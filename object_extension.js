let birthday = '2001/01/01';
const person = {
    name: '',
    birthday,
    hello() {
        console.log(this.birthday);
    }
};
person.hello();

const proto = {
    x: 'hello',
    foo() {
        console.log(this.x);
    }
};

const obj = {
    x: 'world',
    foo() {
        super.foo();
    }
};

Object.setPrototypeOf(obj, proto);
obj.foo();