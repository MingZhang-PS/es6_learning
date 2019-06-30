function func1() {
    return [1,2];
}

let [x,y] = func1();
console.log([x,y]);

function func2() {
    return {w:1, v:2};
}

let {w, v}= func2();
console.log({w,v});

function func3({x,y,z}) {
    console.log(x,y,z);
}

func3({x:2, y:1, z:3});


const myMap= new Map();
myMap.set('key1', 'this key 1');
myMap.set('key2', 'this key 2');

for(let [key, val] of myMap) {
    console.log(`key = ${key} value=${val}`);
}
