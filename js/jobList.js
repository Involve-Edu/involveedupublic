"use strict";

function renderJob(job){
    console.log(job)
    job.forEach((joblist)=>{
        jobname.innerText += joblist.jobTitle + "\n\n";
        jobid.innerText += joblist.employeeCode + "\n\n";
//        console.log(job.jobTitle);
    })
}

fetch("js/data.json")
    .then(result => result.json())
    .then(data=>
        renderJob(data.jobs)
    );