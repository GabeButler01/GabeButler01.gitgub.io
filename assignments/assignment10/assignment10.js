// Problem 1
const Sam = {
    "name" : "Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raiseEligible" : "true"
};

const Mary = {
    "name" : "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raiseEligible" : "true"    
};

const Bill = {
    "name" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "raiseEligible" : "false"
};

console.log("Problem 1: ", Sam, Mary, Bill);



// Problem 2
const company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [Sam, Mary, Bill]
};

console.log("Problem 2: ", company);



// Problem 3
const Anna = {
    "name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : "false"    
};

company.employees[3] = Anna;

console.log("Problem 3: ", company);



// Problem 4
let totalSalary = 0;

for (let i = 0; i < company.employees.length; i++){
    totalSalary += company.employees[i]["salary"];
}

console.log("Problem 4: ", totalSalary);



// Problem 5
console.log("Problem 5: ", company);

for (let i = 0; i < company.employees.length; i++){
    if(company.employees[i]["raiseEligible"] === "true"){
        let oldSalary = company.employees[i]["salary"];
        company.employees[i]["salary"] = company.employees[i]["salary"] * 1.1;
        company.employees[i]["raiseEligible"] = "false";
        console.log(company.employees[i]["name"], ": ", oldSalary, " => ", company.employees[i]["salary"]);
    }
}


// Problem 6
let employeesHome = ["Anna", "Sam"];

for (let i = 0; i < company.employees.length; i++){
    company.employees[i]["wfh"] = "false";
      for (let j = 0; j < employeesHome.length; j++){
        if(company.employees[i]["name"] === employeesHome[j]){
            company.employees[i]["wfh"] = "true";
        }
    }
}

console.log("Problem 6: ", company);












JSON = {
    // Problem 2
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        // Problem 1
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : "40000",
            "raiseEligible" : "true"
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : "18500",
            "raiseEligible" : "true"
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : "21200",
            "raiseEligible" : "false"
        },
        // Problem 3
        {
            "name" : "Anna",
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : "25600",
            "raiseEligible" : "false"
        }
       ]
}

// Problem 4
/* let totalSalary = 0; */

function getTotalSalary() {
    company = JSON.parse(company);
    for (let i in company){
        totalSalary += employees[i].salary; 
    }
}

// Problem 5
function giveRaise(company) {
    company = JSON.parse(company);
    for (let i in company){
        if(employee[i].raiseEligible === true){
            employee[i].salary = salary * 110;
            employee[i].raiseEligible = "false";
        }
    }
}

// Problem 6
/* let employeesHome = ['Anna', 'Sam']; */
function wfh(compnay) {
    company = JSON.parse(company);
    for (let i in company){
        employee[i].wfh = "false";
        for(let j in employeesHome){
            if(employee[i].name === employeesHome[j]){
                employee[i].wfh = "true";
            }
        }
    }
}