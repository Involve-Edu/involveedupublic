---
layout: default
title: Intern or Volunteer with us and help students imporve in their future ready and academic skills.
description: "We are always on the lookout for partners to join us in our Mission of creating an ecosystem of support for our students through peer based learning."
---

<main role="main">
    <section>
        <div class="container-fluid pb-5 goal-section-parent">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <H1 class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG.png' />
                            <div class="section-title-text">{{site.data.project-maargadarshi.carrers.title}}</div>
                        </H1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 listofjob">
                        <!-- <table class="table">
                            <thead>
                                <th>Job Title</th>
                                <th>Joining Date</th>
                                <th>Job Description</th>
                            </thead>
                            <tbody>
                                {% for job in site.data.get-involved.carrers.jobs %}
                                <tr>
                                    <td>{{job.title}}</td>
                                    <td>{{job.date}}</td>
                                    <td>
                                        <a href="{{job.apply_link}}">Click here</a>
                                    </td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table> -->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 col-sm-12"></div>
                    <div class="col-md-8 col-sm-12">
                        <p class="bunchOfText">{{site.data.project-maargadarshi.partner_with_us.blurb}}</p>
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG3.png' />
                            <div class="section-title-text">{{site.data.project-maargadarshi.part_time_carrers.title}}</div>
                        </div>
                        <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG3.png'/>
                        <H2 class="section-title-text">STORIES OF CHANGE</H2>
                    </div>
                    <div class="row pb-3 impact-section">
                {% for item in site.data.project-maargadarshi.innovation_programs %}
                    <div class="col-md-6 col-sm-12 text-center">
                        <div class="plAdoptionImage">
                            <img class="img-fluid progrmImg plAdoption" src="{{item.img}}">
                        </div>
                        <div class="peerAdoption">
                            <h4>{{item.title}}</h4>
                            <hr>
                            <p class="">{{item.blurb}}</p>
                        </div>
                    </div>
                {% endfor %}
                    </div>
                    </div>
                    <div class="col-md-2 col-sm-12"></div>
                </div>
            </div>
        </div>
    </section>
   
   
</main>
