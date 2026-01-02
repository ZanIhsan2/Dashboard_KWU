export const salesData = {
  minggu1: { keju: 0, coklat: 0, uang: 0 },
  minggu2: { keju: 22, coklat: 30, uang: 130000 },
  minggu3: { keju: 28, coklat: 24, uang: 130000 },
};

export const totals = {
  totalKeju:
    salesData.minggu1.keju +
    salesData.minggu2.keju +
    salesData.minggu3.keju,
  totalCoklat:
    salesData.minggu1.coklat +
    salesData.minggu2.coklat +
    salesData.minggu3.coklat,
  totalUang:
    salesData.minggu1.uang +
    salesData.minggu2.uang +
    salesData.minggu3.uang,
  totalProduk:
    salesData.minggu1.keju +
    salesData.minggu2.keju +
    salesData.minggu3.keju +
    salesData.minggu1.coklat +
    salesData.minggu2.coklat +
    salesData.minggu3.coklat,

  // Tambahan untuk profit
  profitRupiah: (() => {
    const modal = 0.7; // asumsi modal 70% dari total uang
    return (1 - modal) * (
      salesData.minggu1.uang +
      salesData.minggu2.uang +
      salesData.minggu3.uang
    );
  })(),

  profitPercent: (() => {
    const totalUang =
      salesData.minggu1.uang +
      salesData.minggu2.uang +
      salesData.minggu3.uang;
    const modal = 0.7 * totalUang;
    const profit = totalUang - modal;
    return Math.round((profit / totalUang) * 100);
  })(),
};