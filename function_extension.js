// 默认参数
function test(x, y = 'world') {
    console.log(x, y);
}

test('Hello') // Hello World
test('Hello', 'China') // Hello China
test('Hello', '') // Hello World

// 为什么不能重复定义x?
function foo(x = 10) {
    let x = 2;
}

// 函数参数解构的陷阱
function trap({ x = 1, y = 2 }) {
    console.log(x, y);
}
trap({}); //为什么不报错
trap(); //为什么报错

// 通过给函数参数解构也赋予一个默认值来解决问题
function trapFix({ x = 1, y = 2 } = {}) {
    console.log(x, y);
}

trapFix();

function setNull(x = 5, y = 6) {
    console.log(x, y);
}

setNull(10, null);

var x = 1;
function overwriteFunctionParam(x, y = function () {
    x = 2;
}) {

    x = 3;
    y();
    console.log(x);
}

overwriteFunctionParam(10);

const doingSometing = (function() {
    'use strict';//use strict now can apply on the default parameter
    return function(val=42) {
        return val;
    }
}());

let getTempItem = id => ({id:1, name:"temp"});
console.log(getTempItem());