
const a = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = a.filter((a) => {
    return a%2 ==0;
}).map((c) => {
    return c;
});
console.log(a);
console.log(evenNumber);
console.log(a);
