const _=require('lodash');
 a=_.drop([1, 2, 3]);
// => [2, 3]
 
 b=_.drop([1, 2, 3], 2);
// => [3]
 
 c=_.drop([1, 2, 3], 5);
// => []
 
 d=_.drop([1, 2, 3], 0);
// => [1, 2, 3]
console.log(a);
console.log(b);
console.log(c);
console.log(d);