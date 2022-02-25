var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (storage['0']) {
      for (let key in storage) {
        var newKey = parseInt(key) + 1;
        storage[newKey] = storage[key];
      }
    }
    storage['0'] = value;

  };

  someInstance.pop = function() {
    var top;
    if (storage['0']) {
      top = storage[0];
      for (let key in storage) {
        var newKey = parseInt(key) - 1;
        storage[newKey] = storage[key];
      }
    }
    return top;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
