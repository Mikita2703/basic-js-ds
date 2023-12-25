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
  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(elem) {
    let node = new ListNode(elem);

    if (this.start) {
      this.end.next = this.end = node;
    } else {
      this.start = this.end = node;
    }
  }

  dequeue() {
    let start = this.start;
    this.start = this.start.next;

    return start.value;
  }
}

module.exports = {
  Queue
};
