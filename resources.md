---
layout: default
title: resources
description: "this is resources description"
---

<div class="container-fluid pb-4 stats">
    <div class="container">
        <div class="section-title">
            <img class="img-fluid" src='assets/img/Title-BG3.png' />
            <div class="section-title-text">IMPACT</div>
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
            <div class="section-title-text">CASE STUDIES</div>
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