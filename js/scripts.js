//
// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.
//
// has77([1, 7, 7]) → true
// has77([1, 7, 1, 7]) → true
// has77([1, 7, 1, 1, 7]) → false*

function has77(myArray) {
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i] == 7) {
      if (myArray[i] == myArray[i + 1]) {
        return true;
      } else {
        if (myArray[i] == myArray[i + 2]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
