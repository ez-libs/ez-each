# Array.ezEach
[![Build Status](https://travis-ci.com/ez-libs/ez-each.svg?branch=master)](https://travis-ci.com/ez-libs/ez-each)
[![npm version](https://badge.fury.io/js/ez-each.svg)](https://badge.fury.io/js/ez-each)  
Replacement for JavaScript's forEach implementation; synchronous &amp; compatible with TypeScript

## Installation
```
npm i ez-each
```
  
For NPM version < 5
```
npm install ez-each --save
```

## Usage
### Traditional forEach
```
["a", "b", "c"].forEach((letter: string) => console.log(letter));
```
Output:
```
a
b
c
```
**The order of the output is potentially random as it depends on each item's individual iteration time.**

### Traditional forEach replacement (for loop)
```
let array = ["a", "b", "c"];
for (let index = 0; index < array.length; index++)
  console.log(array[index]);
```
Output:
```
a
b
c
```

### Using ezEach
**Import the library just once, at a central place in your code if possible.**
```
import "ez-each";

["a", "b", "c"].ezEach((letter: string) => console.log(letter));
```
Output:
```
a
b
c
```

## Comparison
 Function        | Synchronous   | Easy Syntax   |
|----------------|---------------|---------------|
| Array.forEach()| <ul><li>[ ] no</li></ul> | <ul><li>[x] yes</li></ul> |
| for loop       | <ul><li>[x] yes</li></ul>| <ul><li>[ ] no</li></ul> |
| Array.ezEach() | <ul><li>[X] yes</li></ul>| <ul><li>[x] yes</li></ul> |
