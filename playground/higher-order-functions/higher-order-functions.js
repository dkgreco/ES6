// function one(name, age) {
//     "use strict";
//     console.log(name, age);
// }
//
// function two() {
//     "use strict";
//     console.log('arguments: ', arguments);
//     one.apply(undefined, arguments);
// }
//
// two('Dustin', 29);
// two.apply(undefined, ['Brett', 28]);

let add = (a, b) => a + b;
let squareOfSquares = (a, b) => ((a * a) * (b * b));

let callAndLog = func => {
    "use strict";
    return function() {
        let res = func.apply(undefined, arguments);
        console.log('Result is: ', res);
        return res;
    };
};

let addAndLog = callAndLog(add);
addAndLog(99, 1);

let squareOfSquaresAndLog = callAndLog(squareOfSquares);
squareOfSquaresAndLog(3, 2);