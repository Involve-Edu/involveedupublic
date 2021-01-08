"use strict";

function renderJob(job) {
     console.log(job); //this displays the json

     var jobtable = document.getElementById('tablejob');
         console.log(jobtable);
         jobtable.className = 'table table-striped';

     var jobtablehead1 = document.createElement('th');
     jobtablehead1.innerText = 'Job Title';
     var jobtablehead2 = document.createElement('th');
            jobtablehead2.innerText = 'Description';

            jobtable.append(jobtablehead1, jobtablehead2);

     for (var i = 0; i < job.length; i++) {
         var Result = job[i];

         /*if( job.length >0 ){*/



            let jobtablerow = document.createElement('tr');
            jobtablerow.className = 'jobtablerow';

            let jobtabledata1 = document.createElement('td');
            jobtabledata1.innerText += Result.jobTitle;
            let jobtabledata2 = document.createElement('td');
            jobtabledata2.innerText += Result.employeeCode;

            jobtable.append(jobtablerow, jobtabledata1, jobtabledata2);
       /* }
        else {
        let jobtableerror = document.createElement('p');
        jobtableerror.innerText = 'There are no jobs available';
        jobtable.append(jobtableerror);
        }*/
     }

  }




fetch("./data.json")
    .then(result => result.json())
    .then(data=>
        renderJob(data.jobs)
    );