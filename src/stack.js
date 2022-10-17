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
  #result = [];
  push(element) {
    this.#result.push (element);
  }

  pop() {
    let last_el = this.#result.pop ();
    return last_el;
  }

  peek() {
    let copied_el = this.#result.pop ();
    this.#result.push (copied_el);
    return copied_el;
  }
}

module.exports = {
  Stack
};
