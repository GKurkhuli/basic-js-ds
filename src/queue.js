const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.topNode;
  }

  enqueue(value) {
    if (!this.topNode) {
      this.topNode = new ListNode(value);
      return;
    }

    let node = this.topNode;
    while (node.next) {
      node = node.next;
    }

    node.next = new ListNode(value);
  }

  dequeue() {
    if (!this.topNode) {
      return null;
    }

    const value = this.topNode.value;

    this.topNode = this.topNode.next;

    return value;
  }
}

module.exports = {
  Queue
};
