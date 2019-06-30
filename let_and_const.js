var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10
a[5](); // 10
// 不同于C和Java，Javascript并不具备真正的块级作用域，i是定义在全局作用域的，所以a[6]和a[5]指向相同的i变量


// 创建新的函数作用域，里面定义自己的x变量，来克服这个问题
a = [];
for (var i = 0; i < 10; i++) {
    (function () {
        var x = i;
        a[x] = function () {
            console.log(x);
        };
    }());
}
a[6](); // 6
a[5](); // 5

a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
a[5](); // 5