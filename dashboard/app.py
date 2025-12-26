import streamlit as st
import pandas as pd

# =====================
# KONFIGURASI
# =====================
st.set_page_config(
    page_title="Dashboard Ubi Ungu Lumer",
    layout="wide"
)

HARGA = 10000
VARIAN_LIST = ["Keju", "Coklat", "Mix"]

st.title("Dashboard Penjualan Ubi Ungu Lumer")

# =====================
# LOAD DATA
# =====================
@st.cache_data
def load_data():
    df = pd.read_csv("penjualan.csv")
    df["tanggal"] = pd.to_datetime(df["tanggal"])
    df["total"] = df["porsi"] * HARGA
    df["minggu"] = ((df["tanggal"].dt.day - 1) // 7) + 1

    # Nama bulan manual (AMAN di Windows)
    bulan_map = {
        1: "Januari", 2: "Februari", 3: "Maret", 4: "April",
        5: "Mei", 6: "Juni", 7: "Juli", 8: "Agustus",
        9: "September", 10: "Oktober", 11: "November", 12: "Desember"
    }
    df["bulan_nama"] = df["tanggal"].dt.month.map(bulan_map)
    return df

data = load_data()

# =====================
# FILTER BULAN
# =====================
bulan = st.selectbox(
    "📆 Pilih Bulan",
    sorted(data["bulan_nama"].unique())
)

data_bulan = data[data["bulan_nama"] == bulan]

# =====================
# FILTER VARIAN (RAPIH)
# =====================
st.subheader("🎛️ Filter Varian")

tampilkan_semua = st.checkbox("Tampilkan semua varian", value=True)

if tampilkan_semua:
    varian_pilih = VARIAN_LIST
else:
    varian_pilih = st.multiselect(
        "Pilih Varian",
        options=VARIAN_LIST,
        default=VARIAN_LIST
    )

data_filter = data_bulan[data_bulan["varian"].isin(varian_pilih)]

# =====================
# METRIC
# =====================
col1, col2 = st.columns(2)

col1.metric(
    "💰 Total Omzet",
    f"Rp {data_filter['total'].sum():,}"
)

col2.metric(
    "🍽️ Total Porsi Terjual",
    int(data_filter["porsi"].sum())
)

# =====================
# GRAFIK MINGGUAN
# =====================
st.subheader("📈 Grafik Penjualan per Minggu")

mingguan = (
    data_filter
    .groupby("minggu", as_index=False)["porsi"]
    .sum()
    .sort_values("minggu")
)

mingguan["minggu_label"] = mingguan["minggu"].apply(lambda x: f"Minggu {x}")

st.line_chart(
    mingguan.set_index("minggu_label")["porsi"]
)

# =====================
# TABEL DETAIL (CUSTOM)
# =====================
tabel_detail = data_filter.copy()

# HAPUS kolom yang tidak mau ditampilkan
tabel_detail = tabel_detail.drop(columns=["minggu"])

# TAMBAH kolom baru
tabel_detail["Harga / Porsi"] = HARGA
tabel_detail["Total (Rp)"] = tabel_detail["porsi"] * HARGA

# GANTI nama kolom biar rapi
tabel_detail = tabel_detail.rename(columns={
    "tanggal": "Tanggal",
    "varian": "Varian",
    "porsi": "Jumlah Porsi"
})

# FORMAT tanggal
tabel_detail["Tanggal"] = tabel_detail["Tanggal"].dt.strftime("%d-%m-%Y")

# URUTKAN kolom
tabel_detail = tabel_detail[
    ["Tanggal", "Varian", "Jumlah Porsi", "Harga / Porsi", "Total (Rp)"]
]

# =====================
# TABEL DETAIL (OPSIONAL)
# =====================
with st.expander("📋 Detail Pesanan"):
    st.dataframe(
        tabel_detail,
        use_container_width=True
    )