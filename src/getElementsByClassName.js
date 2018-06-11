// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//base case: when there are no children check for class
//recursive case: check the current node if it has that class then push into result array if it has that class
//iterate through children calling getElements on each node
var getElementsByClassName = function(className) {
  // your code here
  var result = [];

  var checkChildren = function(className, currentNode) {
    if (currentNode.classList.contains(className)) {
      result.push(currentNode);
    }
    for (var i = 0; i < currentNode.children.length; i++) {
      checkChildren(className, currentNode.children.item(i));
    }
  };
  checkChildren(className, document.body); 
  return result;
  
};
