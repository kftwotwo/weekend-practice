// Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
//
// tripleUp([1, 4, 5, 6, 2]) → true
// tripleUp([1, 2, 3]) → true
// tripleUp([1, 2, 4]) → false


function tripleUp(myArray) {
  myArray.sort();
  for (var i=0; i < myArray.length - 2; i++) {
    if ((myArray[i] + 1) == (myArray[i +1]) && ((myArray[i] + 2) == (myArray[i + 2]))){
      console.log(myArray[i], myArray[i + 1], myArray[i + 2], myArray[i + 3]);
    } else {
      return false;
    }
    return true;
  }
}
