let range = {
    from: 1,
    to: 5,
};

//1. Call to "for .. of" initially calls this;
range[Symbol.iterator] = function () {
    // ...it returns the iterator object:
    // 2. Onward, 'for ... of', works only with iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the 'for ... of' loop
        next() {
            //4. It should return the value as an object {done: ..., value: ...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
}

for (let num of range){
    console.log(num);
}