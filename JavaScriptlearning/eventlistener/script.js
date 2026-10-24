const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAttendenceNotification");
const stopAssBtn = document.getElementById("StopAttendenceNotification");


const asspara = document.getElementById("AssignmentNotification");
const attpara = document.getElementById("AssignmentNotification");

function showAssignment(){
    asspara.textContent = "Your assignment deadline is approaching";
}

showAssBtn.addEventListener("click",showAssignment);

showAssBtn.addEventListener("click",()=>
{
    attpara.textContent = "Please check your attendance status!";
});

