let srt = "890";
srt = Number(srt);
console.log(srt);
console.log(typeof srt);


let num = 100;
num = String(num);
console.log(num);
console.log(typeof num);


let b1 =1;
let b2 =0;
b1 = Boolean(b1);
b2 = Boolean(b2);
console.log(b1);
console.log(typeof b1);
console.log(b2);
console.log(typeof b2);


let eptysrting="";
eptysrting = Boolean(eptysrting);

console.log(eptysrting);
console.log(typeof eptysrting);

let nonemptysrting = "50";
nonemptysrting = Boolean(nonemptysrting);

console.log(nonemptysrting);
console.log(typeof nonemptysrting);


//Task2

let st = "20";
st = Number(st);
add= st+5;
console.log(add); //Number("20") + 5 → 25 → explicit conversion

console.log("20"+5);//"20" + 5 → "205" → automatic coercion
console.log(typeof "20"+5);










