const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }
  isEmpty(){
    return this.rootNode === null;
  }
  add(data) {
    if(this.has(data) || data == null){
      return;
    }
    const node = new Node(data);
    if(this.isEmpty()){
      this.rootNode = node;
    }else{
      this.insertNode(this.rootNode,node)
    }
  }

  insertNode(parentNode,nodeToInsert){
    if(parentNode.data > nodeToInsert.data){
      if(!parentNode.left){
        parentNode.left = nodeToInsert;
      }else{
        this.insertNode(parentNode.left,nodeToInsert);
      }
    }else{
      if(!parentNode.right){
        parentNode.right = nodeToInsert;
      }else{
        this.insertNode(parentNode.right,nodeToInsert);
      }
    }
  }

  has(data) {
    if(this.isEmpty() || !data){
      return false;
    }
    return this.search(this.rootNode, data);
  }
  search(node, data){
    if(node == null){
      return false;
    }
    if(node.data === data){
      return true;
    }
    if(node.data > data){
      return this.search(node.left, data);
    }
    return this.search(node.right, data);
  }

  find(data) {
    if(this.isEmpty() || !data){
      return null;
    }
    return this.findNode(this.rootNode, data)
  }
  findNode(node, data){
    if(!node){
      return null;
    }
    if(node.data === data){
      return node;
    }
    if(node.data > data){
      return this.findNode(node.left, data);
    }
    return this.findNode(node.right, data);
  }

  remove(data) {
    if(this.has(data)){
      this.removeNode(this.rootNode, data);
    }
  }
  removeNode(node, data) {
  if (!node) {
    return node;
  }

  if (node.data > data) {
    node.left = this.removeNode(node.left, data);
  } else if (node.data < data) {
    node.right = this.removeNode(node.right, data);
  } else {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }

    const minRight = this.min(node.right);
    node.data = minRight;
    node.right = this.removeNode(node.right, minRight);
  }
  
  return node;
}

  min(node = this.rootNode) {
    if(this.isEmpty()){
      return null;
    }
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max(node = this.rootNode) {
    if(this.isEmpty()){
      return null;
    }
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};