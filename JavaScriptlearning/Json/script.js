const employees = [
    {
        name:"nikhil",
        age:23,
        gender:"male",
        salary:"2.5cr",
        companydetails:[{compnayname:"snkgroups",worktime:"flexible"}]
    },

    {
        name:"kartik",
        age:24,
        gender:"male",
        salary:"1.5cr",
        companydetails:[{compnayname:"snkgroups",workinghours:"10-6"}]
    },

    {
        name:"lucky",
        age:23,
        gender:"male",
        salary:"45LPA",
        companydetails:[{compnayname:"snkgroups",workinghours:"10-6"}]
    },

]

console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

console.log(employees[0].companydetails[0].compnayname);

employees[0].name ="pandey";
console.log(employees[0].name);

delete employees[1].name;



