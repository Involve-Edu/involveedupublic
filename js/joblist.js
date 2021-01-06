"use strict";

function renderJob(emp){
    console.log(job)
    job.forEach((joblist)=>{
        job.innerText += joblist.jobTitle + "\n\n";
        jobname.innerText += joblist.employeeCode + "\n\n";
        console.log(jobTitle);
    })
}



fetch("js/data.json")
    .then(result => result.json())
    .then(data=>
        renderJob(data.jobs)
    );