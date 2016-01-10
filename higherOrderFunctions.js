myArray = [1,2,3,4,5];

myObj = {
  name : "Joe",
  age : 30,
  location : "Maui"
}

function add10(x) {
  return x + 10;
}

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function map(collection, callback) {
  var result = [] 
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}

function even(x) {
  return x % 2 === 0;
}

function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
}

function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return result;
}

function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return result;
}

function add(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator == undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

function every(collection, callback) {
  if (callback == undefined) {
    return true;
  }
  return reduce(collection, function(accumulator, element) {
    return accumulator && callback(element)
  }, true);
}
 
function some(collection, callback) {
  if (callback == undefined) {
    return true;
  }  
  return reduce(collection, function(accumulator, element) {
    return accumulator || callback(element);
  }, false);
}

function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false);
}

var myArr = [1,2,1,2,1,2,3];

function histogram(collection) {
  return reduce(collection, function(accumulator, element) {
    if (accumulator[element] === undefined) {
      accumulator[element] = 1;
    } else {
      accumulator[element]++;
    }
    return accumulator;
  }, {})
}

function histogram(collection) {
  return reduce(collection, function(accumulator, element) {
    accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
    return accumulator;
  }, {});
}

var myCar = {
  make: "Ford",
  model: "Escape"
}

myCar.go = function() {
  console.log("vroom");
}

