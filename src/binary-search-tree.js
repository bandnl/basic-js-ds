const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.roott = null;
  }

  root() {
    if (this.root) {
      return this.roott
    } else return null
  }

  add(data) {
    this.roott = addWithIn (this.roott, data);

    function addWithIn (node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.value === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithIn(node.left, data)
      } else {
        node.right = addWithIn(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return Search(this.roott, data);

    function Search (node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ? 
      Search(node.left, data) : 
      Search(node.right, data);
    }
  }

  find(data) {
    return Find(this.roott, data);

    function Find (node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      return data < node.data ? 
      Find (node.left, data) : 
      Find (node.right, data);
    }
  }

  remove(data) {
    this.roott = Remove (this.roott, data)

    function Remove (node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = Remove (node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = Remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = Remove (node.right, minFromRight.data);
        
        return node;
      }
    }
  }

  min() {
    if (!this.roott) {
      return;
    }

    let node = this.roott;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roott) {
      return;
    }

    let node = this.roott;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};