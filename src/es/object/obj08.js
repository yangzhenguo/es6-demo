/**
 * Created by Sam on 2019/5/9.
 */
const cart = {
    _wheels: 4,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('num is too letter!')
        }
        this._wheels = value;
    }
}

console.log(cart.wheels);
cart.wheels = 10
console.log(cart.wheels);
cart.wheels = 8