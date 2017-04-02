let instance = null;

export default class Queue {

  constructor() {
    if (!instance) {
      instance = this;
    }
    this.moves = [];

    return instance;
  }

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

}
