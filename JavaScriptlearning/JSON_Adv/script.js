const ab ={
    name:"Prince",
    gender:"rather not to say",
    college:"SAM",
    year:3
}

console.log(Object(ab));
console.log(Object.keys(ab));
console.log(Object.values(ab));
console.log(Object.entries(ab));


const ar = [10,20,30,40,50];
console.log(...ar);




const xyz = () => {
    console.log({...ab});
};

xyz();


function Sum(...n){
    return n.reduce((result = 0 ,num) => (result += num));
}

const answer = sum(2,3,4,5,6,7,8,9);
console.log(answer);