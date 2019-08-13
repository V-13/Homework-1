const _=require('lodash');
var array = [1, 2, 3];
 
var ab=_.fill(array, 'a');
console.log(ab);
// => ['a', 'a', 'a']
 
var ba=_.fill(Array(3), 2);
console.log(ba);
// => [2, 2, 2]