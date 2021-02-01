---
layout: default
---

<main role="main">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="{{site.data.programs.banner.img}}" alt="First slide">
            </div>
        </div>
    </div>
    <div class="container pb-4">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <img class="img-fluid" src='assets/img/Title-BG.png'/>
                    <div class="section-title-text">OUR PROGRAMS</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col statText">
                <p class="">{{site.data.programs.our_programs.blurb}}</p>
            </div>
        </div>
    </div>
    <!--offline peer teaching-->
    <div class="container-fluid goal-section-parent">
        <div class="container programContent">
            <div class="row">
                <div class="col-sm-12 col-md-4 mt-3">
                    <div class="plAdoptionImage text-center mt-4">
                        <img class="progrmImg ofpTeaching" src="{{site.data.programs.peer_teaching.offline.img}}"/>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 mt-3 text-center">
                    <h3>{{site.data.programs.peer_teaching.offline.title}}</h3>
                    <hr>
                    <p class="programText">{{site.data.programs.peer_teaching.offline.blurb}}</p>
                    <p class="programText">
                        To learn more about the program
                        <span class="peerMore">
                            <a href="https://drive.google.com/file/d/1SRshEWt4S4gY43s4Jo_xs3LE_2koV__K/view?usp=sharing">CLICK HERE</a>
                        </span>
                    </p>
                    <p class="programText">
                        Support the in-school program by adopting a school. To know more
                        <span class="peerMore">
                            <a href="https://drive.google.com/file/d/1SRshEWt4S4gY43s4Jo_xs3LE_2koV__K/view?usp=sharing" target="_blank">CLICK HERE</a> 
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--End of offline pt-->
    <!--  online peer pt  -->
    <div class="container-fluid">
        <div class="container programContent onlinePeerContent">
            <div class="row">
                <div class="col-sm-12 col-md-8 mt-3 onlinePeerTexts text-center">
                    <h3>{{site.data.programs.peer_teaching.online.title}}</h3>
                    <hr>
                    <p class="programText">{{site.data.programs.peer_teaching.online.blurb}}</p>  
                </div>
                <div class="col-sm-12 col-md-4 mt-3">
                    <div class="plAdoptionImage text-center">
                        <img class="progrmImg olpTeaching" src="{{site.data.programs.peer_teaching.online.img}}" style="border: 2px solid gray;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  Other programs   -->
    <div class="container-fluid goal-section-parent ">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <img class="img-fluid" src='assets/img/Title-BG3.png'/>
                        <div class="section-title-text">INNOVATION PROGRAMS</div>
                    </div>
                </div>
            </div>
            <div class="row pb-3 impact-section">
                {% for item in site.data.programs.innovation_programs %}
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
                <div class="col-md-12 text-center">
                    <a href="https://forms.gle/ijkCQmSYrL1F8hgY8" target="_blank">
                        <p class="peerMore">
                            {{site.data.programs.get_in_touch_blurb}}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>

</main>