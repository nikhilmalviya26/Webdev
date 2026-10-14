
const ary = ["apple",2.5,99,"Himachal","a"];

console.log("with for each");

ary.forEach((element) =>{
    if(typeof element === "number")
    {
        console.log(element);
        
    }
});

