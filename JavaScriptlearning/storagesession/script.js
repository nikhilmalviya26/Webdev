// function validform(){
//     let name = document.getElementById("fullname").value;

//     if(name===""){
//         alert("enter a valid name");
//         return false;
//     }

//      else if (!/^[a-zA-Z ]+$/.test(name)) {
//         alert("Only characters and spaces are allowed");
//         return false;
//     }
    
//     else {
//         alert("Valid Name");
//         return true;
//     }

   

let form = document.querySelector("#validform");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.querySelector("#fullname").value.trim();

    let valid = true;

    if (name === "") {
        valid = false;
    }

    for (let i = 0; i < name.length; i++) {

        let char = name[i];
        if (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === " "
        ) {
            continue;
        }
        else {
            valid = false;
            break;
        }
    }

    if (valid) {
        console.log("Valid Name");
    }
    else {
        console.log("Invalid Name");
    }

});