let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// slice(start, end)	from start to end (not including end)	allows negatives
// substring(start, end)	between start and end (not including end)	negative values mean 0
// substr(start, length)	from start get length characters	allows negative start