const tail = require('../tail');
const assertEqual = require('../assertEqual');



assertEqual(tail([1, 2, 3, 4, 5, 6, 7]), 7);
assertEqual(tail([5, 6, 7]), 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(tail([1, 2, 3]), 3);
assertEqual(tail([1]), 1);
assertEqual(tail([]), undefined);