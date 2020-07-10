// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) {
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
      }
      inputArr[j + 1] = key;
  }
  return inputArr;
};

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
