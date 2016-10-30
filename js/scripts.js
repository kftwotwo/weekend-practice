//
// Given an array of ints, return true if every 2 that appears in the array is next to another 2.
//
// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false

function twoTwo(myArray) {
  count = 0;
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == 2) {
      count += 1;
    }
  }
  if (count == 2) {
    for (var i = 0; i < (myArray.length -1); i++) {
      if (myArray[i] == 2) {
        if (myArray[i] == (myArray[i + 1])) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}
