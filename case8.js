const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const result = {
  totalKeuntungan: "",
  totalModal: "",
  persentaseKeuntungan: "",
  produkBukuTerlaris: "",
  penulisTerlaris: "",
};

function checkTotalModal(dataPenjualanNovel) {
  let tempModal = [];
  let semuaBuku;
  dataPenjualanNovel.forEach((element) => {
    semuaBuku = element.totalTerjual + element.sisaStok;
    tempModal.push(element.hargaBeli * semuaBuku);
  });
  const reducer = (accumulator, curr) => accumulator + curr;
  result.totalModal = "Rp." + tempModal.reduce(reducer);
}

function checkBukuTerlaris(dataPenjualanNovel) {
  let tempBukuTerlaris = 0;
  let arr = [];
  let max = 0;
  // find max
  dataPenjualanNovel.forEach((element) => {
    arr.push(element.totalTerjual);
  });
  max = Math.max(...arr);
  // find max book name
  dataPenjualanNovel.forEach((element) => {
    if (element.totalTerjual == max) {
      tempBukuTerlaris = element.namaProduk;
    }
  });
  result.produkBukuTerlaris = tempBukuTerlaris;
}

function checkTotalKeuntungan(dataPenjualanNovel) {
  let tempKeuntungan = [];
  let max = 0;
  dataPenjualanNovel.forEach((element) => {
    tempKeuntungan.push(
      (element.hargaJual - element.hargaBeli) * element.totalTerjual
    );
  });
  const reducer = (accumulator, curr) => accumulator + curr;
  result.totalKeuntungan = "Rp. " + tempKeuntungan.reduce(reducer);
}

function checkPersentaseKeuntungan(dataPenjualanNovel) {
  let tempKeuntungan = [];
  let tempKeuntunganSemua = [];
  let max = 0;
  dataPenjualanNovel.forEach((element) => {
    // profit on the sale of each book times the number sold
    tempKeuntungan.push(
      (element.hargaJual - element.hargaBeli) * element.totalTerjual
    );
    // profit on the sale book if all stock is sold out
    tempKeuntunganSemua.push(
      (element.hargaJual - element.hargaBeli) *
        (element.totalTerjual + element.sisaStok)
    );
  });
  const reducer = (accumulator, curr) => accumulator + curr;
  let persen =
    (tempKeuntungan.reduce(reducer) / tempKeuntunganSemua.reduce(reducer)) *
      100 +
    " %";
  result.persentaseKeuntungan = persen;
}

function checkPenulisTerlaris(dataPenjualanNovel) {
  let tempArr = [],
    arrFilter = [];
  let dataPenjualanNovelClone = dataPenjualanNovel;
  const reducer = (accumulator, curr) => accumulator + curr;
  let arr = dataPenjualanNovel
    .filter((data) => data.penulis == "Tere Liye")
    .map((element) => tempArr.push(element.totalTerjual));
  arrFilter.push(tempArr.reduce(reducer));
  dataPenjualanNovelClone.push({
    totalTerjual: arrFilter,
    penulis: "Tere Liye",
  });
  let max = dataPenjualanNovelClone.map((element) =>
    Math.max(element.totalTerjual)
  );
  dataPenjualanNovelClone.map((element) => {
    if (element.totalTerjual > max) {
      result.penulisTerlaris = element.penulis;
    }
  });
}

const getInfoPenjualan = (dataPenjualanNovel) => {
  const tipeData = typeof dataPenjualanNovel; //save type data of params
  // check if params string
  if (tipeData === typeof []) {
    // total modal
    checkTotalModal(dataPenjualanNovel);

    // produk buku terlaris
    checkBukuTerlaris(dataPenjualanNovel);

    // total Keuntungan
    checkTotalKeuntungan(dataPenjualanNovel);

    // persentase keuntungan
    checkPersentaseKeuntungan(dataPenjualanNovel);

    // penulis terlaris
    checkPenulisTerlaris(dataPenjualanNovel);

    return result;
  } else if (tipeData === typeof "string" || tipeData === typeof 3) {
    //check is no params
    return "Error: hanya menerima tipe data objek";
  } else {
    //check is wrong params
    return "Error: pastikan params diisi";
  }
};
console.log(getInfoPenjualan(dataPenjualanNovel));
