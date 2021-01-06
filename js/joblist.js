"use strict";

// fetch("./data.json")
//     .then(function(resp){
//         return resp.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });

function renderEmp(emp){
    console.log(emp)
    var table = document.getElementById("empTable")
    emp.forEach((empl)=>{
        // var name = empl.userId;
        // uId.innerText += name +"\n\n";
        job.innerText += empl.jobTitle + "\n\n";
        jobname.innerText += empl.employeeCode + "\n\n";
        console.log(jobTitle);
    })
}



fetch("./data.json")
    .then(result => result.json())
    .then(data=>
        renderEmp(data.jobs)
    );