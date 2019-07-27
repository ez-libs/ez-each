import "./dist/index";
var assert = require('assert');

var testArray: Array<number> = [1, 2, 3, 4, 5];
var temp: Array<number>;

beforeEach(() => {
  temp = [];
})

describe('Array', function () {
  describe('#ezEach()', function () {
    it('should work with number arrays', function () {
      testArray.ezEach((item: number, i: number) => {
        temp.push(item);
      });
      assert.deepEqual(temp, testArray);
    });
    it('should return the correct index', function () { //same but using the index
      testArray.ezEach((item: number, i: number) => {
        temp.push(i + 1)
      });
      assert.deepEqual(temp, testArray);
    });
    it('should work with any arrays', function () {
      let anything: Array<any> = testArray; //not sure if this test is actually useful
      anything.ezEach((item: number, i: number) => {
        temp.push(item);
      });
      assert.deepEqual(temp, testArray);
    });
    it('should iterate over arrays in the correct order', function () {
      let state = false;
      testArray.ezEach((item: number, i: number) => {
        if (i == testArray.length - 1)
          state = true;
      });
      assert.equal(state, true);
    });
  });
});