function ShowAlert(){
    alert("click Me Button clicked using HTML Events");
}

function ShowAlert2(){
    alert("click Me Button clicked using js Events");
}

 document.getElementById("clickButton").addEventListener("click",ShowAlert2);


document.getElementById("box").addEventListener("click",()=>
{
    document.getElementById("box").innerText="The Box Was Clicked";
});


document.getElementById("Pointer").addEventListener("mouseover",()=>
{
    document.getElementById("Pointer").innerText="Pointer is over the paragraph!";
});

document.getElementById("Pointer").addEventListener("mouseenter",()=>
{
    document.getElementById("Pointer").innerText="Pointer is over the paragraph!";
});

document.getElementById("Pointer").addEventListener("mouseexit",()=>
{
    document.getElementById("Pointer").innerText="Pointer is over the paragraph!";
});


document.getElementById("nameSubmit")/addEventListener