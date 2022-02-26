var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
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
  var bool = this.value === target;
  if (this.children.length > 0 && bool === false) {
    for (let i = 0; i < this.children.length; i++) {
      bool = bool || this.children[i].contains(target);
    }
  }
  return bool;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
