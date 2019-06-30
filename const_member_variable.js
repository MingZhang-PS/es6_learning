const foo = {};
foo.a = 1;
foo.b = 2;
console.log(foo);
// const object 自己可以改，但是const变量本身不能重新赋值
foo = {};