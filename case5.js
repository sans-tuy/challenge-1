const getSplitName = (personName) => {
  const tipeData = typeof personName; //save type data of params
  // check if params string
  if (tipeData === "string") {
    //regex personName format
    let personNameFormat = /\s+/;
    let fullName = {};
    fullName = personName.split(personNameFormat);
    if (fullName.length == 3) {
      //if valid personName
      let splitName = {
        firstName: null,
        middleName: null,
        lastName: null,
      };
      splitName.firstName = fullName[0];
      splitName.middleName = fullName[1];
      splitName.lastName = fullName[2];
      return splitName;
    } else if (fullName.length < 3) {
      //if valid personName
      let splitName = {
        firstName: null,
        middleName: null,
        lastName: null,
      };
      if (fullName.length == 2) {
        splitName.firstName = fullName[0];
        splitName.lastName = fullName[1];
        return splitName;
      }
      if (fullName.length == 1) {
        splitName.firstName = fullName[0];
        return splitName;
      }
      return splitName;
    } else {
      return "This function is only for 3 character name";
    }
  } else if (personName === undefined) {
    //check is no params
    return "Error: masukkan nama terlebih dahulu";
  } else {
    //check is wrong params
    return "Error: Hanya menerima params string";
  }
};
console.log(getSplitName("anwar sanusi kun"));
