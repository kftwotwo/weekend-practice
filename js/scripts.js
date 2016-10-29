
// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
//
// haveThree([3, 1, 3, 1, 3]) → true
// haveThree([3, 1, 3, 3]) → false
// haveThree([3, 4, 3, 3, 4]) → false


// 1) return true if the value 3 shows up exaclty 3 times.
// input: [1,3,3,4,3]
// output: true
// Input: [1,3,3,4,4]
// output:false

//2) compare each index with a for loop


function haveThree(myArray) {
  count = 0;
  myArray.forEach(function(i) {
    if (i == 3) {
      count += 1;
    }
  })
  if (count == 3) {
    for (var i = 0; i < (myArray.length - 1); i++) {
      if (myArray[i] == 3) {
        var result = myArray[i] == myArray[i + 1];
      }
      if (result == true){
        return false;
        break
      }
    }
    return true;
  } else {
    return false;
  }
}
