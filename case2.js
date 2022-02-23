const checkTypeNumber = (givenNumber) => {
  const tipeData = typeof givenNumber; //save type data of params
  // check if params string and number
  if (
    tipeData === typeof "string" ||
    (tipeData !== typeof [] && givenNumber !== undefined)
  ) {
    // check is even number
    if (Number(givenNumber) % 2 == 0) {
      return "Genap";
    } else {
      // check is odd number
      return "Ganjil";
    }
  } else if (givenNumber === undefined) {
    //check is no params
    return "Error: Bro where is the parameter";
  } else {
    //check is wrong params
    return "Undefined Variabel";
  }
};
console.log(checkTypeNumber());
console.log(checkTypeNumber({}));
console.log(checkTypeNumber(22));
console.log(checkTypeNumber("11"));
