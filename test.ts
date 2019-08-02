import "./dist/index";
var assert = require('assert');

var testArray: Array<string> = ["a", "b", "c", "d", "e"];
var temp: Array<string>;

beforeEach(() => {
  temp = [];
})

describe('Array', function () {
  describe('#ezEach()', function () {
    it('should work with typified arrays', function () {
      testArray.ezEach((item: string) => {
        temp.push(item);
      });
      assert.deepEqual(temp, testArray);
    });
    it('should return the expected index', function () {
      testArray.ezEach((item: string, i: number) => {
        temp.push(testArray[i]) //to verify, we pick the original entry using the index
      });
      assert.deepEqual(temp, testArray);
    });
    it('should work with non-typified arrays', function () {
      let anything: Array<any> = testArray;
      anything.ezEach((item: string, i: number) => {
        temp.push(item);
      });
      assert.deepEqual(temp, testArray);
    });
    it('should iterate over arrays in the correct order', function () {
      let state = false;
      testArray.ezEach((item: string, i: number) => {
        if (i == testArray.length - 1)
          state = true;
      });
      assert.equal(state, true);
    });
  });
});
