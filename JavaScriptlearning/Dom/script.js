let text = document.querySelector("h1").innerText;
console.log(text + " Nikhi Malviya");

function submit(){
    console.log("Submit Button Clicked")

    const nm=document.querySelector("#fullName").value.trim();
    const em=document.getElementById("email").value.trim();
    console.log("Full Name :" ,nm);
    console.log("Email:" ,em);


}


