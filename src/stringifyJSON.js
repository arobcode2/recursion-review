// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//takes an object and makes it into a JSON string
//what kind of object is being passed in?
//base case: if the object is not an array or an object return the stringified input
//recursive case: if the object is an array- the first thing to add is the opening bracket- iterates through the array calling stringify on each element and seperating with a comma, after done iterating concatenate with a closing bracket
//object case: open curly brace, iterate through keys, stringify the value of each key, concatenate with colons and commas, closing curly brace
var stringifyJSON = function(obj) {
  var result = '';
  var count = 0;

  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        result += ',';    
      }
    }
    result += ']';
  } else if (typeof obj === 'number') {
    result += obj.toString();
  } else if (obj === null) {
    result += 'null';
  } else if (typeof obj === 'boolean') {
    result += obj.toString();
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result += '"' + key + '":' + stringifyJSON(obj[key]);
      count++;
      if (count < Object.keys(obj).length) {
        result += ',';
      }
    }
    result += '}';
  }
    
  

  return result;

};
