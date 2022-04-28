---
layout: default
title: Intern or Volunteer with us and help students imporve in their future ready and academic skills.
description: "We are always on the lookout for partners to join us in our Mission of creating an ecosystem of support for our students through peer based learning."
---

<main role="main">
    <section>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="{{site.data.get-involved.banner.img}}" alt="First slide">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid pb-5 goal-section-parent">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <H1 class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG3.png' />
                            <div class="section-title-text">{{site.data.get-involved.carrers.title}}</div>
                        </H1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 listofjob">
                        <table class="table">
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
                                        <a href="{{job.description}}">Click here</a>
                                    </td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid pb-5 mentor-section-parent">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG.png' />
                            <div class="section-title-text">{{site.data.get-involved.part_time_carrers.title}}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1 col-sm-12"></div>
                    {% for item in site.data.get-involved.part_time_carrers.jobs %}
                    <div class="col-md-5 col-sm-12">
                        <h3>{{item.title}}</h3>
                        <p class="bunchOfText">{{item.blurb}}</p>
                        <p class="applylink">
                            <a href="https://forms.gle/yVuFW8MYH8NLDZj17" target="_blank">Click here to apply</a>
                        </p>
                    </div>
                    {% endfor %}
                    <div class="col-md-1 col-sm-12"></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid pb-5 goal-section-parent">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG3.png' />
                            <div class="section-title-text">{{site.data.get-involved.partner_with_us.title}}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 col-sm-12"></div>
                    <div class="col-md-8 col-sm-12">
                        <p class="bunchOfText">{{site.data.get-involved.partner_with_us.blurb}}</p>
                        <p class="applylink"><a href="https://forms.gle/oH8mXyZqTfsEgTDG7" target="_blank">Please click here to partner with us </a></p>
                    </div>
                    <div class="col-md-2 col-sm-12"></div>
                </div>
            </div>
        </div>
    </section>
</main>
