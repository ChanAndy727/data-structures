class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(string) {
    this.storage[Object.keys(this.storage).length] = string;
  }

  dequeue() {
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
  }

  size() {
    return Object.keys(this.storage).length;
  }


}
