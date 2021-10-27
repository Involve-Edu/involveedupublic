---
layout: default
title: Case studies on impact of Peer learning programs, Peer learning Case Studies and impact report of involve's peer learning and teaching program in India.
description: "Case studies on impact of Peer learning programs"
---

<div class="container-fluid pb-4 stats">
    <div class="container">
        <div class="section-title">
            <img class="img-fluid" src='assets/img/Title-BG3.png' />
            <div class="section-title-text">OUR IMPACT TILL NOW</div>
        </div>
        <div class="row">
            {% for item in site.data.resources.impact %}
            <div class="col-lg-4 col-md-6 impact-section text-center">
                <img class="img-fluid" src="{{item.img}}">
                <div class='skill-section-title'>
                    <a href="{{item.link}}" target="_blank">{{item.year}}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="container-fluid pb-4 statsOne">
    <div class="container">
        <div class="section-title">
            <img class="img-fluid" src='assets/img/Title-BG.png'/>
            <H1 class="section-title-text">PEER TEACHING CASE STUDIES</H1>
        </div>
        <div class="row">
            {% for item in site.data.resources.case-studies %}
            <div class="col-lg-4 col-md-6 case-studies text-center">
                <img class="img-fluid" src="{{item.img}}">
                <div class='skill-section-title'>
                    <a href="{{item.link}}" target="blank">{{item.text}}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="container-fluid pb-4 statsOne">
    <div class="container">
        <div class="section-title">
            <img class="img-fluid" src='assets/img/Title-BG.png'/>
            <H1 class="section-title-text">OUR OPEN SOURCE RESOURCES</H1>
        </div>
        <div class="row">
            {% for item in site.data.resources.open-source %}
            <div class="col-lg-4 col-md-6 case-studies text-center">
                <img class="img-fluid" src="{{item.img}}">
                <div class='skill-section-title'>
                    <a href="{{item.link}}" target="blank">{{item.text}}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>