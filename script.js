slowMath.add(6, 2)
.then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.multiply(Response, 2);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.divide(Response, 4);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.subtract(Response, 3);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.add(Response, 98);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.remainder(Response, 2);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.multiply(Response, 50);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.remainder(Response, 40);
}).then((Response) => {
    console.log(`The answer is ${Response}`);
    return slowMath.add(Response, 32);
}).then((Response) => {
    console.log(`The final result is ${Response}`)
}).catch((reason) => {
    console.log('There was an error!');
    console.log(reason);
})


