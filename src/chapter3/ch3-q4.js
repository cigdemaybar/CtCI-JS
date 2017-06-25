'use strict';

export class Queue {
  constructor() {
    this.eStack = [];
    this.dStack = [];
  }
  enqueue(val) {
    this.eStack.push(val);
  }
  dequeue() {
    if (!this.dStack.length && !this.eStack.length) {
      throw new Error('queue is empty');
    }
    if (!this.dStack.length) {
      while (this.eStack.length > 0) {
        this.dStack.push(this.eStack.pop());
      }
    }
    return this.dStack.pop();
  }
}
