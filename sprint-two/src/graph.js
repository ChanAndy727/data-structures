

// Instantiate a new graph
var Graph = function() {
  this.graph = [];
  this.index = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[this.index] = {value: node,
    edges: []};
  this.index++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var bool = false;
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === node) {
      bool = true;
    }
  }
  return bool;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === node) {
      this.graph.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var bool = false;
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === toNode) {
      for (let k = 0; k < this.graph[i].edges.length; k++) {
        if (this.graph[i].edges[k] === fromNode) {
          bool = true;
        }
      }
    }
  }
  return bool;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var toNodeIndex;
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === toNode) {
      this.graph[i].edges.push(fromNode);
    }
    if (this.graph[i].value === fromNode) {
      this.graph[i].edges.push(toNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === toNode) {
      for (let k = 0; k < this.graph[i].edges.length; k++) {
        if (this.graph[i].edges[k] === fromNode) {
          this.graph[i].edges.splice(k, 1);
        }
      }
    }
    if (this.graph[i].value === fromNode) {
      for (let k = 0; k < this.graph[i].edges.length; k++) {
        if (this.graph[i].edges[k] === toNode) {
          this.graph[i].edges.splice(k, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.graph.length; i++) {
    cb(this.graph[i]);
    console.log(this.graph[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


