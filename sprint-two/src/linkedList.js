var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.tail !== null) {
      var tempNode = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead;
    if (this.head !== null) {
      oldHead = this.head;
      var newHead = this.head.next;
      this.head = newHead;
    }
    return oldHead.value;
  };

  list.contains = function(target) {
    var isThere = false;
    for (let node in this) {
      if (this[node].value === target) {
        isThere = true;
      }
    }
    return isThere;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
