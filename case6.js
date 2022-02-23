const getAngkaTerbesarKedua = (dataNumbers) => {
  const tipeData = typeof dataNumbers; //save type data of params
  // check if params string
  if (tipeData === typeof [3]) {
    const max = Math.max(...dataNumbers);
    let result = 0;
    for (let i = 0; i < dataNumbers.length; i++) {
      if (dataNumbers[i] < max && dataNumbers[i] >= result) {
        result = dataNumbers[i];
      }
    }
    return result;
  } else if (tipeData === typeof "string" || tipeData === typeof 3) {
    //check is no params
    return "Error: hanya menerima tipe data objek";
  } else {
    //check is wrong params
    return "Error: pastikan params diisi";
  }
};
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));

console.log(getAngkaTerbesarKedua());
