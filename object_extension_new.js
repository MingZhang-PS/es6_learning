var person = {};
Object.defineProperty(person, "name", {
    enumerable: true, //是不是可以for..in
    value: "ming",
    writable: false, //是不是可以修改的
    configurable: false//是不是可以delete，是不是可以修改属性
});
person.name = 'zhang'
console.log(person) //无法修改field

delete person.name
console.log(person) //删不掉field

Object.defineProperty(person, 'name', {
    writable: true //不可修改，将抛出错误
});


const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}


var target1 = {};
var source3 = 'abc';
Object.assign(target1, source3);
console.log(target1); //特殊case，字符串拷贝进来是字符数组，可枚举



function SomeClass() { }
Object.assign(SomeClass.prototype, {

    someMethod(arg1, arg2) {
        console.log('someMethod')
    },
    anotherMethod() {

    }

});
var o = new SomeClass();
o.someMethod() //比SomeClass.prototype.someMethod = function() {}好看的多


const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
    console.log(options); //为属性制定默认值
}


const source = {
    x: { prop: 10 },
    set foo(value) {
        console.log(value);
    }
};
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
source.x.prop = 20;
console.log(target2.x) //依然是浅拷贝


var map = new Map();
map.set('z', 33);
map.set('1', 100);
map.set('b', 3);

for (let [k, v] of map) {
    console.log(
        `${JSON.stringify(k)}: ${JSON.stringify(v)}`
    );
}
