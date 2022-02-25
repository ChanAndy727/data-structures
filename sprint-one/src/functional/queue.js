var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    var value;
    if (storage['0']) {
      value = storage['0'];
      delete storage['0'];
      for (let key in storage) {
        var newKey = (parseInt(key) - 1);
        storage[newKey] = storage[key];
        delete storage[key];
      }
    }
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
