//declaration
interface Array<T> {
  ezEach(callback: (value: any, index: number) => void): void;
}

//implementation
/**
  * Performs the specified action for each element in an array synchronously.
  * @param callback  A function that accepts two arguments. ezEach calls the function one time for each element in the array.
  */
Array.prototype.ezEach = function (callback: (value: any, index?: number) => void) { //note to self: using ES6 arrow functions would rip `this` out of it's context
  for (let i = 0; i < this.length; i++) {
    if (typeof(index= == "undefined") {
      callback(this[i]);
    } else callback(this[i], i);
  }
}
