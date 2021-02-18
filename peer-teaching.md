---
layout: default
title: peer-teaching
description: "this is peer teaching description"
---

<main role="main">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="{{site.data.peer-teaching.banner.img}}" alt="First slide">
            </div>
        </div>
    </div>
    <div class="container pb-4">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG.png'/>
                    <div class="section-title-text text-uppercase">{{site.data.peer-teaching.overview.title}}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col statText">
                <p>{{site.data.peer-teaching.overview.blurb}}</p>
            </div>
        </div>
    </div>
    <!--  Outcomes  -->
    <div class="container pb-1">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG3.png'/>
                    <H2 class="section-title-text">OUTCOMES</H2>
                </div>
            </div>
        </div>
        <div class="row ml4">
            <div class="col" style="text-align: center">
                {% for item in site.data.peer-teaching.outcomes %}
                <div class="outcome">
                    <img src="{{item.img}}" alt="Cinque Terre" width="600" height="400">
                    <div class="descrip">
                        <div class="head">
                            <h5>{{item.title}}</h5>
                        </div>
                        <p>{{item.description}}</p>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
    <!--  our model  -->
    <div class="container-fluid pb-3 goal-section-parent">
        <div class="container ">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG.png'/>
                        <H2 class="section-title-text">OUR MODEL</H2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-8 col-lg-8 mt-4 modelText">
                    <p style="margin-top: 5px; margin-bottom: 10px;">
                        {{site.data.peer-teaching.our_model.blurb}}
                    </p>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <div 
                        class="testimonialImage imgHover" 
                        style="margin-bottom:100px; bottom: 27px; top:-15px"
                    >
                        <img 
                            class="progrmImg modelImg" 
                            src="{{site.data.peer-teaching.our_model.img}}"
                            style="border: 2px solid gray;"
                        />
                        <div class="overlay ">
                            <div class="text">
                                <a href="{{site.data.peer-teaching.our_model.link}}">Learn More Visit</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  Other programs   -->
    <div class="container-fluid pb-4 stats">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG3.png'/>
                        <div class="section-title-text">STRUCTURE</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 text-center">
                    <p>{{site.data.peer-teaching.structures.blurb}}</p>
                </div>
            </div>
            <div class="row">
                {% for item in site.data.peer-teaching.structures.years %}
                <div class="col-lg-4 col-md-6">
                    <div class="skill-section skill-section-{{item.background_colour}} structHeight">
                        <div class='skill-section-title' style="text-align: center">{{item.year_val}}</div>
                        <div class='skill-section-text yearHeight'>
                            {% for list in item.list %}
                                <p>{{list}}</p>
                            {% endfor %}
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
    <!--  Impact section  -->
    <div class="container pb-5">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG3.png'/>
                    <H2 class="section-title-text">IMPACT</H2>
                </div>
            </div>
        </div>
        <div class="row">
            {% for item in site.data.peer-teaching.impact %}
            <div class="col cust">
                <div class="impactSection skill-section-{{item.background_colour}} impact example2">
                    <div class='skill-section-text'><br>
                        <h3>{{item.stat}}</h3>
                    </div>
                    <div class='skill-section-title impactHead'>{{item.description}}</div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
    <!--  Impact image section  -->
    <div class="container pb-4 mt-4">
        <div class="col-md-12">
            <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#blogCarousel" class="control" style="text-indent: unset">
                        <i class="arrowColor rightarrow carousel-control-prev-icon" aria-hidden="true"></i>
                    </li>
                    <li data-target="#blogCarousel" class="control" style="text-indent: unset">
                        <i class="arrowColor leftarrow carousel-control-next-icon" aria-hidden="true"></i>
                    </li>
                </ol>
                <!-- Carousel items -->
                <div class="carousel-inner">
                    {% for item in site.data.peer-teaching.img_carousel %}
                    {% for slide in item.slide_set %}
                    <div class="carousel-item {{slide.active}}">
                        <div class="row">
                            {% for img in slide.img%}
                            <div class="col-md-3">
                                <a href="#">
                                    <img src="{{img}}" alt="Image" style="max-width:100%; margin-bottom: 20px;">
                                </a>
                            </div>
                            {% endfor %}
                        </div>
                    </div>
                    {% endfor %}
                    {% endfor %}
                </div>
                <!--.carousel-inner-->
            </div>
            <!--.Carousel-->
        </div>
    </div>
    <!--  Impact video section  -->
    <div class="container pb-4">
        <div class="row">
            {% for item in site.data.peer-teaching.media %}
            <div class="col-sm-6 col-md-6">
                <div class="example2">
                    <p>{{item.title}}</p>
                    <hr>
                    <div class="video">
                        <video controls class="responsive-iframe" src="{{item.video_path}}">
                        </video>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</main>