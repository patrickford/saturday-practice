var numbers = [1,2,3,4,5,6,7,8,9,10];

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               'o','p','q','r','s','t','u','v','w','x','y','z'];

// Practice Problems:
//-------------------
// Use the higherOrderFunctions to solve the following problems:

// Use filter to return just the vowels from the array letters
filter(letters, function(letter) {
  // your code here
  return ["a","e","i","o","u"].indexOf(letter) != -1;;
});

// Use filter to return everything that is not equal to the last element of the collection
filter(numbers, function(element) {
  // your code here
  return element != numbers[numbers.length-1];
});


// Use each to print the odd numbers to the console
each(numbers, function(number) {
  // your code here
});


// Use reduce to return the sum of numbers
reduce(numbers, function(sum, number) {
  // your code here
});


// Use map to convert the array letters to all capital letters
map(letters, function(letter) {
  // your code here
});


// Use filter to return every other letter in letters
filter(letters, function(letter) {
  // your code here
});


// Modify the above function to return the other letters
filter(letters, function(letter) {
  // your code here
});


// Use filter to return the string "lmnop" from letters
filter(letters, function(letter) {
  // your code here
}) // HINT: more code here


// Return the sum of the even numbers using filter and reduce together
// NO HINTS: All of your code here

var nestedArray = [ [3,7,5,9], [8,5,6,3,9], [9,5,1], [8,4,2,0] ]

// Use filter to return an array of arrays where the first element of each sub-array
// is greater than the last element of that sub-array

filter(nestedArray, function(element) {
  // your code here
  return element[0] > element[element.length-1];
})

// Use filter to return an array of arrays where each element in the sub-array
// is an odd number


filter(nestedArray, function(element) {
  var result = true;
  for (var i = 0; i < element.length; i++) {
    if (element[i] % 2 == 0) {
      result = false;
    }
  }
  return result;
})

function odd(x) {
  return x % 2 != 0;
}

filter(nestedArray, function(element) {
  return every(element, odd);
});

// Use map and reduce to return an array that contains the sum of each sub array
// No hints: your code here

myArray = [1,2,3,4,5];

function add(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false)
}

var newArray = [1,2,3,1,2,1,2]

{1 : 3, 2 : 3, 3 : 1}

function histogram(collection) {
  return reduce(collection, function(accumulator, element) {
    if (accumulator[element]) {
      accumulator[element]++;
    } else {
      accumulator[element] = 1;
    }
    return accumulator;
  }, {})
}


