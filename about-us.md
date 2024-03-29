---
layout: default
title: Journey of Involve, how we started, our Team & its Story.
description: "We believe in the power of team to achieve the extraordinary. We are a group of people with passion and right skill sets, from various backgrounds, united by our vision of developing student agency."
---

<main role="main">
    <div class="container-fluid pb-4 stats">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title mb70">
                        <img class="img-fluid" src='assets/img/Title-BG3.png' />
                        <H1 class="section-title-text">OUR STORY</H1>
                    </div>
                </div>
            </div>
            <section class="main-timeline">
                {% for item in site.data.about-us.timeline %}
                <div class="timeline">
                    <div class="icon"></div>
                    <div class="date-content">
                        <div class="date-outer"> 
                            <span class="date">
                                <span class="year">{{item.year}}</span> 
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <p class="description">
                            {{item.blurb}}
                            {% if item.add_break == true %}
                            <br/><br/><br/>
                            {% endif %}
                        </p>
                    </div>
                </div>
                {% endfor %}
            </section>
        </div>
    </div>
    <section>
        <div class="container-fluid pb-5 mentors-section-parent">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG.png' />
                            <H2 class="section-title-text">OUR PEOPLE</H2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col statText">
                        <p class="ourculturtext">
                            {{site.data.about-us.people.culture_blurb}}
                        </p>
                    </div>
                </div>
                <div class="row mentors-sub-section ml-7">
                    {% for item in site.data.about-us.people.team %}
                        <div class="col-6 col-md-3 col-sm-6">
                            <div class="imageborder">
                                <img class="imageresponsive custimgsize" src="{{item.img}}">
                                <div class="employDis">
                                    <h6><b>{{item.name}}</b></h6>
                                    <p>{{item.designation}}</p> 
                                </div>
                                <div class="overlay custimgsize">
                                    <p>{{item.bio}}</p>
                                </div>
                            </div>
                        </div>
                    {% endfor %}
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
                            <H2 class="section-title-text">OUR CULTURE</H2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col statText">
                        <p class="ourculturtext">{{site.data.about-us.culture.description}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <img class="groupimage" src='{{site.data.about-us.culture.group_img}}' />
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
                            <H2 class="section-title-text">AWARDS</H2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <p class="logoimages">
                            <div class="col-md-12 col-8 logoimages">
                                {% for item in site.data.about-us.awards %}
                                    <a href="{{item.link}}" target="_blank">
                                        <img  class="logoImg"  src='{{item.img}}'/>
                                    </a>
                                {% endfor %}
                            </div>
                        <div class="col-md-2 col-sm-12"></div>
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>