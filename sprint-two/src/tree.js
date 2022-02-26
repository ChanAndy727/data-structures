var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.index = 0;
  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  //console.log(this.children);

  // base case

  // recursive case
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
