const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualanPakAldi) => {
  const tipeData = typeof dataPenjualanPakAldi; //save type data of params
  // check if params string
  if (tipeData === typeof []) {
    let result = 0;
    dataPenjualanPakAldi.forEach((element) => {
      result += element.totalTerjual;
    });
    return result;
  } else if (tipeData === typeof "string" || tipeData === typeof 3) {
    //check is no params
    return "Error: hanya menerima tipe data objek";
  } else {
    //check is wrong params
    return "Error: pastikan params diisi";
  }
};
console.log(getTotalPenjualan(dataPenjualanPakAldi));
