const checkEmail = (email) => {
  const tipeData = typeof email; //save type data of params
  // check if params string
  if (tipeData === "string") {
    //regex email format
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      //if valid email
      return "VALID";
    } else {
      let mailformat2 = "@";
      if (!email.match(mailformat2)) {
        return "Error: Email harus memiliki '@' ";
      } else {
        //if not valid email
        return "INVALID";
      }
    }
  } else if (email === undefined || tipeData === typeof email) {
    //check is no params
    return "Error: email harus berupa string atau parameter belum diisi cek kembali email anda";
  }
};
console.log(checkEmail({}));
console.log(checkEmail());
console.log(checkEmail(567567));
console.log(checkEmail("sanusigmail"));
console.log(checkEmail("sanusi@gmail"));
console.log(checkEmail("sanusi@gmail.com"));
