let str = 'Hello';

// does the same as
// for (let char of string) console.log(char);

let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) {
        console.log(result);
        break;
    }
    console.log(result);
}
