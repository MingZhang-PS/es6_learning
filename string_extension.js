let s = 'zhang ming';

console.log(s.includes('ang'));
console.log(s.startsWith('zhang'));
console.log(s.endsWith('ming'));

console.log(s.repeat(3));

console.log(s.padEnd(15, 'x'));

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

let str = '(name, time) => console.log(`Hello ${name}, how are you ${time}?`)';
let func = eval.call(null, str);
func(name, time);