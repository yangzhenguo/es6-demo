/**
 * Created by Sam on 2019/5/9.
 */
let birth = '2000/0/01';

const Person = {
    name: 'ZhangSan',
    birth,
    hello() {
        console.log('My name is', this.name);
    }
}
Person.hello()