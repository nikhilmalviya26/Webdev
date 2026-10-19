// const H = document.createElement("h2");

// const T = document.createElement("p");

// const B = document.createElement("button");

// H.classList.add(text-info);
// H.textContent = "Sun Heading";



const ar = [
    "Saurabh",
    "Rupesh",
    "Nikhil",
    "kartik","Kalpesh","Hemant"

];

const List = document.createElement("ol");

ar.forEach((item) => {
    const L = document.createElement("li");
    L.textContent = item;
    List.appendChild(L);
});

document.getElementById("myList").appendChild(List);


// const ar = ["Rahul", "Amit", "Nikhil", "Kartik", "Neha"];

// const list = document.createElement("ol");

// ar.forEach((item) => {
//     const l = document.createElement("li");
//     l.textContent = item;
//     list.appendChild(l);
// });

// document.getElementById("myList").appendChild(list);
