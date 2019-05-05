/**
 * Created by Sam on 2019/5/6.
 */
let g = (typeof window !== 'undefined'
    ? window
        : (typeof process === 'object' &&
            typeof require === 'function' &&
                typeof global === 'object')
    ? global
            : this
);
console.log(g)