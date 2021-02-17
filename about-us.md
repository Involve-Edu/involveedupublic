---
layout: default
title: about-us
description: "this is about us description"
---

<main role="main">
    <div class="container-fluid pb-4 stats">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title mb70">
                        <img class="img-fluid" src='assets/img/Title-BG3.png' />
                        <div class="section-title-text">OUR STORY</div>
                    </div>
                </div>
            </div>
            <section class="ps-timeline-sec ml-80">
                <div class="container container-style">
                    <ol class="ps-timeline">
                        {% for item in site.data.about-us.timeline %}
                        {% if item.text_position == "top" %}
                        <li>
                            <div class="img-handler-top">
                                <p class="milestone-text-1-3-5 mt-17">{{item.blurb}}</p>
                            </div>
                            <span class="ps-sp-top">{{item.number}}</span>
                        </li>
                        {% else %}
                        <li>
                            <div class="img-handler-bot">
                                <p class="milestone-text-2-4-6 mt-11 mt-7">{{item.blurb}}</p>
                            </div>
                            <span class="ps-sp-bot">{{item.number}}</span>
                        </li>
                        {% endif %}
                        {% endfor %}
                    </ol>
                </div>
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
                            <div class="section-title-text">OUR PEOPLE</div>
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
                            <div class="section-title-text">OUR CULTURE</div>
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
                            <div class="section-title-text">AWARDS</div>
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