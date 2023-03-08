---
layout: default
title: Intern or Volunteer with us and help students imporve in their future ready and academic skills.
description: "We are always on the lookout for partners to join us in our Mission of creating an ecosystem of support for our students through peer based learning."
---

<section>
 <div class="container-fluid pb-5 mentor-section-parent">
            <div class="container ">
{% for i in site.data.other-initiatives.others %}
 <div class="row">
                    <div class="col">
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG.png' />
                            <div class="section-title-text">{{i.title}}</div>
                        </div>
                        <p class="bunchOfText">{{i.blurb}}</p>
                        <div class="section-title">
                            <img class="img-fluid" src='assets/img/Title-BG3.png' />
                            <div class="section-title-text">{{site.data.project-maargadarshi.part_time_carrers.title}}</div>
                     </div>
                    </div>
                    
                    
</div>
{% endfor %}
 </div>
                    </div>
    </section>