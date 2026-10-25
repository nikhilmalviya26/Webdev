const showAssBtn = document.getElementById("showAssingmentNotification");
const showAttBtn = document.getElementById("showAttendenceNotification");
const stopAssBtn = document.getElementById("StopAssingmentNotification");

const assPara = document.getElementById("AssingmentNotification");
const attPara = document.getElementById("AttendenceNotification");

function ShowAssingment() {
  assPara.textContent = "Your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click", ShowAssingment);

showAttBtn.addEventListener("click", () => {
  attPara.textContent = "Please check your attendance status!";
});

stopAssBtn.addEventListener("click", () => {
  showAssBtn.removeEventListener("click", ShowAssingment);

  assPara.textContent = "Your assignment Notification is Stopped!";
});

const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Clicked");
});

const stip = document.getElementById("EventCapturing");

function view() {
  console.log("View Button Clicked");
}

stip.addEventListener("click", view);

document.getElementById("view").addEventListener("click", view);

const parentCard = document.getElementById("EventDelegation");

parentCard.addEventListener("click", (e) => {
  //   console.log(e.target.tagName);

  if (e.target.tagName === "DIV") {
    console.log(e.target.textContent);
  }
});