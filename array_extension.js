let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];

let mymap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']

]);
let arr = [...mymap.keys()];

function f(v) {
    return v > this.age;
}
let person = { name: 'John', age: 20 };
[10, 12, 26, 15].find(f, person);    // person作为this传进去

