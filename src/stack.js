const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.stackArr = [];
  }
  push(element) {
    this.stackArr.unshift(element);
  }

  pop() {
    const top = this.stackArr.shift();
    return top;
  }

  peek() {
    if(this.stackArr.length > 0){
      return this.stackArr[0];
    }
    return null;
  }
}

module.exports = {
  Stack
};
