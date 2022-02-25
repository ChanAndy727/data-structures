var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[Object.keys(this.storage).length] = string;
};

queueMethods.dequeue = function() {
  var top;
  if (this.storage['0']) {
    top = this.storage['0'];
    delete this.storage['0'];
    for (let key in this.storage) {
      var newKey = parseInt(key) - 1;
      this.storage[newKey] = this.storage[key];
      delete this.storage[key];
    }
  }
  return top;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};