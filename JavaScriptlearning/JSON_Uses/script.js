// object creation 

const data ={
    
    "name":"Nikhil","age":20,"subject":"English"
};

console.log(data.age);//20  dot notaion
console.log(data["name"]);//Nikhil both type gives ouptup  bracket notaion

//ADD UPDATE DELETE '

//add
data.section="D";
console.log(data);

//update
data.name = "Raj";
console.log(data.name);

//delete
delete data.name;
console.log(data);


//multiple object in one array 
const phone = [
    {
         titile:"my phone 18",
        "description" : "good phone",
        "button1" :25000,
        "button2" : "buy now"
    },

      {
         titile:"my phone 16",
        "description" : "good  phone ever",
        "button1" :20000,
        "button2" : "buy now"
    }
]

console.log(phone[0]); //full op at 0 index
console.log(phone[0].titile); //give title as output


//printing by foreach

phone.forEach((pt) => {
    console.log(pt);
    
});  ///print all values

phone.forEach((pt) =>{
    console.log(pt.titile);
    
});



//add data
function add_Data(item){
    const mycard = document.createElement("div");

    mycard.innerHTML = `
    
    `
}
