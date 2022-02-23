const isValidPassword = (pass) => {
  const tipeData = typeof pass; //save type data of params
  // check if params string
  if (tipeData === "string") {
    //regex pass format
    let passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (pass.match(passFormat)) {
      //if valid pass
      return true;
    } else {
      let passformat2 = /^(?=.*\d)/;
      let passformat3 = /^(?=.*[a-z])/;
      let passformat4 = /^(?=.*[A-Z])/;
      let passformat5 = /^.{8,20}$/;
      if (!pass.match(passformat2)) {
        return "Error: pass harus memiliki minimal satu angka ";
      } else if (!pass.match(passformat3)) {
        return "Error: pass harus memiliki minimal satu huruf kecil ";
      } else if (!pass.match(passformat4)) {
        return "Error: pass harus memiliki minimal satu huruf besar ";
      } else if (!pass.match(passformat5)) {
        return "Error: pass harus memiliki panjang minimal 8 karakter ";
      } else {
        //if not valid pass
        return false;
      }
    }
  } else if (pass === undefined) {
    //check is no params
    return "Error: Password belum diisi";
  } else {
    //check is wrong params
    return "Error: password harus berupa string atau parameter belum diisi cek kembali email anda";
  }
};
console.log(isValidPassword());
console.log(isValidPassword({}));
console.log(isValidPassword("anwar"));
console.log(isValidPassword("anwar1"));
console.log(isValidPassword("Aar1"));
console.log(isValidPassword("Anwarsanusi1"));
