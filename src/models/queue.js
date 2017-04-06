// implement queue as a singleton
let instance = null;

export default class Queue {

  constructor() {
    if (!instance) {
      instance = this;
    }
    this.moves = [];

    return instance;
  }

  /**
  * @param {Map} item
  */
  push(item) {
    this.moves.push(item);
    return this.moves;
  }

  shift() {
    return this.moves.shift();
  }

  reset() {
    this.moves = [];
  }

  isEmpty() {
    return this.moves.length === 0;
  }

}
