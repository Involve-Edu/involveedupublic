---
layout: default
title: Building Student Agency through Peer learning strategies.
description: "Involve equips students with academic and future-ready skills through Peer Learning strategies."
---

<main role="main">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            {% for item in site.data.index.carousel %}
            <li data-target="#myCarousel" data-slide-to="{{item.order}}" class="{{item.active}}"></li>
            {% endfor %}
        </ol>
        <div class="carousel-inner">
            {% for item in site.data.index.carousel %}
            <div class="carousel-item {{item.active}}">
                <img class="{{item.title}}" src="{{item.img}}" alt="{{item.title}}">
            </div>
            {% endfor %}
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="container-fluid pb-4 stats">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG.png' />
                        <div id="about" class="section-title-text">
                            {{ site.data.index.student_crisis.title }}
                        </div>
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    {% 
                        include stats_ui.html 
                        stat = "56%"
                        progress_bar_val = "56%" 
                        stat_desc = "of Students have Learning Gaps" 
                    %}
                </div>
                <div class="col-6">
                    {% 
                        include stats_ui.html 
                        stat = "53%" 
                        progress_bar_val = "53%" 
                        stat_desc = "of Students will not be ready for 21st Century Jobs" 
                    %}
                </div>
            </div>
            <div class="row pt-3 pb-3">
                <div class="col statText">
                    <p class="">{{ site.data.index.student_crisis.blurb }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    {% 
                        include stats_ui.html 
                        stat = "33:1" 
                        progress_bar_val = "82%" 
                        stat_desc = "Student:Teacher Ratio causing lack of Personalization" 
                    %}
                </div>
            </div>
        </div>
    </div>
    <div class="container pb-4">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG3.png' />
                    <div id="ourPrograms" class="section-title-text">
                        {{ site.data.index.challenge_to_solve.title }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col statText">
                <p class="">{{ site.data.index.challenge_to_solve.blurb }}</p>
            </div>
        </div>
    </div>
    <div class="container-fluid pb-4 skill-section-parent">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG.png' />
                        <div class="section-title-text">{{site.data.index.empovered_student.title}}</div>
                    </div>
                </div>
            </div>
            <div class="row">
                {% for item in site.data.index.empovered_student.skills %}
                <div class="col">
                    <div class="skill-section {{item.background_colour}}">
                        <div class='skill-section-title'>{{item.title}}</div>
                        <div class='skill-section-image'><img class="img-fluid" src="{{item.img}}" /></div>
                        <div class='skill-section-text'>{{item.desc}}</div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
    <div class="container-fluid pb-5 goal-section-parent">
        <div class="container ">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG3.png' />
                        <div class="section-title-text">{{site.data.index.goal.title}}</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 statText">
                    <p class="mt35">{{site.data.index.goal.blurb}}</p>
                </div>
                <div class="col-12 col-md-6 mt-md-0 mt-4 ">
                    <img class="img-fluid" src="{{site.data.index.goal.img}}"/>
                </div>
            </div>
        </div>
    </div>
    <div class="container impact-section-parent">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG.png' />
                    <div id="resources" class="section-title-text">{{site.data.index.impact.title}}</div>
                </div>
            </div>
        </div>
        <div class="row pb-3 ">
            <div class="col statText">
                <p class="">{{site.data.index.impact.blurb}}</p>
            </div>
        </div>
        <div class="row pb-3 impact-section">
            {% for item in site.data.index.impact.stat %}
                <div class="col-6 col-md-4">
                    {% 
                        include stats_ui.html 
                        stat = item.statVal
                        progress_bar_val = item.statProgress
                        stat_desc = item.stat_desc
                    %}
                </div>
            {% endfor %}
        </div>
    </div>
    <div class="container-fluid testimonial-section-parent">
        <div class="container">
            <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {% for item in site.data.index.testimonial %}
                        <div class="carousel-item {{item.active}}">
                            <div class="row testimonial-slide">
                                <div class="col-12 col-lg-4">
                                    <div class="testimonialImage"><img src="{{item.img}}" /> </div>
                                </div>
                                <div class="col-12 col-lg-8">
                                    <div class="testimonialText">
                                        <span>
                                            <p class="testimonialContent">{{item.content}}</p>
                                            <p class="testimonialName">{{item.author}}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {% endfor %}
                </div>
                <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
    <div class="container-fluid pb-5 mentors-section-parent">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="mentors-section-title">OUR MENTORS</p>
                </div>
            </div>
            <div class="row mentors-sub-section">
                {% for item in site.data.index.mentors %}
                {% if item.arrow == "down" %}
                <div class="col-6 col-md-3">
                    <div class="row">
                        <div class="mentor-text">
                            <div class="mentor-name">{{item.name}}</div>
                            <div class="mentor-description">{{item.bio}}</div>
                        </div>
                        <img class="mentor-arrow" src="assets/img/mentorArrowDown.jpg" />
                    </div>
                    <div class="row">
                        <a href="{{item.linkedin}}">
                            <img class="mentor-img" src="{{item.img}}" />
                        </a>
                    </div>
                </div>
                {% else %}
                <div class="col-6 col-md-3">
                    <div class="row">
                        <a href="{{item.linkedin}}">
                            <img class="mentor-img" src="{{item.img}}" />
                        </a>
                    </div>
                    <div class="row">
                        <div class="mentor-text">
                            <div class="mentor-name">{{item.name}}</div>
                            <div class="mentor-description">{{item.bio}}</div>
                        </div>
                        <img class="mentor-arrow" src="assets/img/mentorArrowUp.png" />
                    </div>
                </div>
                {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
    <div class="container-fluid pb-5 recognition-section-parent">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG.png' />
                        <div class="section-title-text">{{site.data.index.media_recognition.title}}</div>
                    </div>
                </div>
            </div>
            <div class="row recognition-section">
                <div id="partner-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="recognition-slide">
                                <div class="row">
                                    {% for item in site.data.index.media_recognition.slide_set_1 %}
                                        <div class="col-2">
                                            <a href="{{item.link}}" target="_blank">
                                            <img src="{{item.img}}">
                                            </a>
                                        </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="recognition-slide">
                                <div class="row">
                                    {% for item in site.data.index.media_recognition.slide_set_2 %}
                                        <div class="col-2">
                                            <a href="{{item.link}}" target="_blank">
                                            <img src="{{item.img}}">
                                            </a>
                                        </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pb-5 partner-section-parent">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG3.png' />
                        <div class="section-title-text">{{site.data.index.partners.title}}</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="partner-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="partners-slide">
                                <div class="row">
                                    {% for item in site.data.index.partners.slide_set_1 %}
                                        <div class="col-2">
                                            <a href="{{item.link}}" target="_blank">
                                            <img src="{{item.img}}">
                                            </a>
                                        </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="partners-slide">
                                <div class="row">
                                    {% for item in site.data.index.partners.slide_set_2 %}
                                        <div class="col-2">
                                            <a href="{{item.link}}" target="_blank">
                                            <img src="{{item.img}}">
                                            </a>
                                        </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pb-5 goal-section-parent">
        <div class="container ">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG.png' />
                        <div class="section-title-text">{{site.data.index.support.title}}</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col statText">
                    <p class="">{{site.data.index.support.blurb}}</p>
                    <a class="btn custom-btn mt-4 pl-5 pr-5 pt-2 pb-2" href="{{site.data.index.support.donate_link}}">DONATE</a>
                </div>
            </div>
        </div>
    </div>
</main>
