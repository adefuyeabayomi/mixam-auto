<template>
    <section id="home">
      <section class="sec1">
      <!-- landing, icons + small text about mixam, then joinour community section before the other sections. -->
      <div class="top-circle"></div>
      <div class="landing-section"> <!--row-->
        <div class="landing-text-container"><!---row items-->
          <div class="landing-text-wrapper">
            <div class="headline text1">
              <p class="header">Are you an entrepreneur?</p>
              <p class="subline specific">We aim to help all entrepreneurs kickstart their business activities.</p>
            </div>
            <!--
            <div class="headline text2">
              <p>Learn more about business with our free business education articles and courses</p>
              <p class="subline specific"></p>
            </div>
            <div class="headline text3">
              <p>Showcase and sell your products and mixam's free product showcase pages. Build astonishing showcase and get more customers</p>
              <p class="subline specific"></p>
            </div>
            <div class="headline text4">
              <p>Sell with mixam</p>
              <p class="subline specific"></p>
            </div>
            <div class="headline text5">
              <p>Join our community of business oriented people and learn from real life business experiences.</p>
              <p class="subline specific"></p>
            </div>
            <div class="headline text6">
              <p>Post your articles, share your knowledge, share your experiences in business, help someone learn from your insights</p>
              <p class="subline specific"></p>
            </div>
            -->
              <p class="t01">Mixam want to empower entrepreneurs, small business and people who are just starting up their business. <br></p>
              <p class="t02">Get started to see all the services we offer to our users</p>
              <button class="get-started-button">Get Started</button>
            </div>
          </div>
        </div>
        <div class="landing-image-container"><!---row items-->
          <div class="landing-image wrapper">
            <img src="../assets/PngItem_1749913.png" alt="happy lady entrepreneur">
          </div>
        </div>
      <div class="about-snippet-section">
        <div class="about-sinppets-container">
          <div class="wrapper"> 
            <div class="row no-margin">
              <div class="col-4">
                <div class="snippet"> <!--User Base-->
                  <div class="wrap-icon-container">
                  <div class="icon-container icon1">
                    <img>
                  </div>
                </div>
                  <!--snippet text-->
                <p class="snippet-text">Over 10k active entrepreneurs worldwide uses Mixam </p>
                </div>
              </div>
              <div class="col-4">
                <div class="snippet"> <!--Country Used-->
                <div class="wrap-icon-container">
                  <div class="icon-container icon1">
                    <img>
                  </div>
                </div>
                  
                  <!--snippet text-->
                  <p class="snippet-text">Our services are available in 50+ countries around the world</p>
                </div>
              </div>
              <div class="col-4">
                <div class="snippet"> <!--Network and connect-->
                  <div class="wrap-icon-container">
                  <div class="icon-container icon1">
                    <img>
                  </div>
                </div>
                  <!--snippet text-->
                  <p class="snippet-text">Meet With veterans in your field and learn from them</p>
                </div>
              </div>
            <div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div class="community-section">
        <div class="row">
          <div class="community-text-container">
            <div><h4 class="community-header">Join our community</h4></div>
            <div>
              <p class="community-text"> Meet like minded creative enterpreneurs and benefit from the experience, events that our community has to offer. We also offer a platform where you can share you insights, ask questions and we guarantee a pleasant experience</p>
            </div>
            <div class="community-cta">
              <button class="community-button">Learn more</button>
            </div>
          </div>
          <div class="community-img-container">
            <img src="../assets/54950.jpg" class="community-image">
          </div>
        </div>
        <modal name="community-about"></modal>
      </div>
      </section>
      <section class="row studySection">
        <div class="learn-text-container">
          <div class="wrapper">
            <h4 class="learn-header">Begin your journey into the world of business.</h4>
            <p class="learn-text">To be successful in any venture, adeqate training is required. As an aspiring business owner or you own a business already but you need improve on your tactics, Mixam has got lots of resources from people from different lines of business to help you gain insights and make you adequately prepared to take on the world of business</p>
          </div>
          <div class="learn-cta-container">
              <button class="study-button">Learn more</button>
          </div>
        </div>
        <div class="learn-image-container">
          <div class="wrapper">
            <img class="learning-image" src="../assets/Lovepik_com-401679645-online-education-culture.png">
          </div>
        </div>
      </section>
      <section class="row" id="expand-with-mixam">
        <div class="expand-main">
          <h4 class="expand-header">
            Expand your business with mixam
          </h4>
          <p class="expand-text">
            Set up an extra source of income with just few clicks. The include VTU top up with a free website to do your reselling, a blogging platform which can be monetized with google adsense and used to promote your business brand.
          </p>
          <button class="expand-button">Learn More</button>
        </div>
        <div class="expand-image-container">
          <img src="../assets/3255469.jpg" class="expand-image">
        </div>
      </section>
      <section class="explore-mixam-section">
        <!--carousel-->
        <div>
          <h4 class="explore-header">Explore Mixam</h4>
          <p class="explore-text">We offer various services to help our users advance in their businesses.</p>
        </div>
        <div>
          <slick-carousel v-bind="carouselOptions">
            <div class="wrapper">
              <div id="learn-item" class="carousel-content">
                <img src="../assets/mobile-description.png" class="carousel-image">
                <p>Learn More About Business.</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="community-item" class="carousel-content">
                <img src="../assets/urban-852.png" class="carousel-image">
                <p>Join The community</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="share-post" class="carousel-content">
                <img src="../assets/business-3d.png" class="carousel-image">
                <p>Create a post. Share your thoughts and insights</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="setup-biz" class="carousel-content">
                <img src="../assets/mirage-payment-processed-2.png" class="carousel-image">
                <p>Set up a quick online business</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="post-articles" class="carousel-content">
                <img src="../assets/3d-flame-290.png" class="carousel-image">
                <p>Post articles with on our platform</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="feature-request" class="carousel-content">
                <img src="../assets/kingdom-1073.png" class="carousel-image">
                <p>Request a feature that can help the community</p>
              </div>
            </div>
            <div class="wrapper">
              <div id="feedback-item" class="carousel-content">
                <img src="../assets/cherry-support.png" class="carousel-image">
                <p>Give us a feedback / Complaint</p>
              </div>
            </div>
          </slick-carousel>
        </div>
      </section>
      <section class="bottom-section">
        <div class="row bottom-top">

          <div class="mission-div">
            <h4 class="mission-header">Our Mission at mixam.</h4>
            <p class="mission-text">Helping entrepreneurs build solid and competitive businesses forms the core of why we operate. We believe that all strong and formidable businesses begins with the little things. Learning with free materials we provide for upcoming entrepreneurs,free custom product showcase and sale pages, a community to bring entrepreneurs from all areas are part of our efforts to contribute to businesses around the world.</p>
          </div>
          <div class="side-div">
            <div class="subscribe">
             <p class="subscribe-cta-text"> Join Our Email listing For Updates</p>
             <p class="subscribe-form-container">
               <input class="subscribe-input" type="text" placeholder="you@mail.com">
               <button class="subscribe-button">Subscribe</button>
             </p>
            </div>
            <div class="social-container">
              <p class="follow-text">Follow us on social media</p>
              <div class="social-inner">
                <p><i class="fab fa-facebook-square social facebook"></i> Facebook</p>
                <p><i class="fab fa-linkedin social linkedIn"></i> LinkedIn</p>
                <p><i class="fab fa-twitter-square social twitter"></i> Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="terms-conditions">
          <div class="privacy-box">
            <p class="privacypolicy">Learn more about our privacy policy.</p>
          </div>
           <div class="tems-box">
            <p class="tems01">Read our terms and conditions here.</p>
          </div>
        </div>
        <div class="copyrightnotice">&copy; copyright of Adefuye Abayomi</div>
      </section>
    </section>
</template>

<script>
// "../assets/...."
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import carousel from "vue-slick-carousel";

export default {
  name: 'home',
  data : function(){
    return {
      carouselOptions :{
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
         
          }, {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          }, {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: true,
            },
          },  {
            breakpoint: 2500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              dots: true,
            },
          }, 
        ]
      }
    }
  },
  components : {
    "slick-carousel" : carousel,
  }
}
</script>

<style lang="scss">
.slick-prev{
  left: -16px !important;
   background: #09586e !important;
  border-radius: 50%;
}
.slick-next {
  right: -16px !important;
  background: #09586e !important;
  border-radius: 50%;
}
#home {
  @include padding-top1;
  @include padding-bottom1;
  }
.sec1{
    @include padding1;
    background-image: url("../assets/background-util.png");
  }
.sec1 div{
  position : relative;
}
.top-circle{
  width: 450px;
  height: 450px; 
  border-radius : 50%;
  position : absolute !important;
  top: -50px;
  left: 20%;
  background-color : $theme-blue;
}

.headline .header{
  padding-bottom: 16px;
}
.landing-section{
  display: flex;
  flex-direction: column;
}
.landing-section div{
  flex: 1;
}
.headline {
  font-family : $theme-header-font2;
  font-size: 22px;
  padding-top: 48px;
}
.get-started-button{
  padding: 8px;
    border-radius: 5px;
    color: white;
    background-color: #0d2627;
    font-size: 13px;
    margin-top: 22px;
    font-weight: normal;
}
.subline.specific{
  font-family : $theme-view-font1-light;
  font-size: 13px;
}
.subline.text{
    letter-spacing: 1px;
    padding-top: 48px;
    font-size: 13px;
    width: 88%;
    line-height: 20px;
}
.t01{
  padding-top: 16px;
}
.t02{
  width: 50%;
  padding-top: 16px;
}
.get-started-button{
  width: 150px;
  border: 0px solid;
}
.landing-section p{
  line-height: 22px;
}
.landing-image img{
  width: 200px;
  height : 215px;
  position : relative;
  top : -80px;
  left : 35%;
}
.community-header,.learn-header, .explore-header,.expand-header{
      font-family: junegull;
    font-size: 24px;
    text-align: center;
    padding-bottom: 16px;
    margin-top: -80px;
    letter-spacing: 1px;
}
.learn-header, .explore-header,.expand-header{
  margin-top: 0px;
}
.about-snippet-section{
  display: none;
  margin-top: -20px;;
}
.snippet-icon-container{
  width: 50px;
  height: 50px;
  border : 2px solid #17c1f2;
  border-radius : 50%;
  position: absolute !important;
  bottom: 92px;
  background: white;
  left: 36%;
}
.wrap-icon-container{
  position: absolute !important;
  bottom: 93px;
}
.icon-container{
  width: 50px;
  height: 50px;
  border: 2px solid #17c1f2;
  border-radius: 50%;
  margin: 0px auto;
  background-color: white;
}
.snippet-text{
  margin-top: 35px;
  text-align: center;
  line-height: 24px;
  padding: 5px;
  color: #f9d211;
  font-weight: 800;
}
.snippet-row{
  display: flex;
}
.snippet{
  width: 85%;

  margin : 0px auto;
  border : 2px solid #17c1f2;
  border-radius: 15px;
  height: 120px;
}
#expand-with-mixam{
    @include padding1;
    text-align: center;
    line-height: 22px;
    background-image: url("../assets/background-util.png");
}
.expand-header{
  @include padding-top4;
  color: rgb(82, 82, 82);
}
.expand-image{
  width: 60%;
  display: block;
  margin: 0px auto;
  margin-top: 40px;
}
.expand-button{
  width: 150px;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 0px;
  border: 0px;
  color : white;
  background-color: gray;
  border-radius : 10px;
}
.explore-header{
  text-align : left;
}
.explore-mixam-section{
  @include padding1;
  @include padding-top4;
  background-color: #eefbff;
  padding-bottom: 80px;
  
}
.carousel-image{
  width: 70%;
  max-width: 170px;
  margin: 20px auto 0px auto;
  display : block;
}
.carousel-content{
  @include padding1;
  border-radius : 30px;
  width: 80%;
  max-width: 320px;
  margin: 40px auto;
  height: 180px;
  text-align: center;
}
.carousel-content p{
  font-size : 13px;
  margin: 0px auto !important;
  padding: 12px !important;
  text-align: center;
}
#learn-item{
  background-color: $theme-text-main;
  color: #7ce3ff;
}
#community-item{
  background-color: #1f5b6c;
  color: #7ce3ff;
}
#community-item img{
  margin: 0px auto 0px auto;
}
#share-post{
  background-color: #55c0c7;
}
#share-post img{
  width: 60%;
  max-width: 140px;
  margin-top: -20px;
}
#setup-biz{
  background-color: #fafeec;
}
#setup-biz img{
  width: 50%;
  margin-top: -10px;
}
#post-articles{
  background-color: #249c94;
  color : white;
}
#post-articles img{
  margin-top: -22px;
  margin-bottom: -25px;
}
#feature-request {
  background-color: #f3f7a1;
}
#feature-request img{
  margin-top: -20px;
}
#feedback-item{
  background : $theme-text-main;
  color: white;
}
#feedback-item img{
  display: block;
  margin: 0px auto 0px auto;
}
.studySection{
  background-color: $theme-text-main;
  @include padding1;
  @include padding-top3;
  @include padding-bottom2;
  color: white;
  line-height: 22px;
}
.study-button{
  width: 150px;
  padding: 8px;
  border : 2px solid;
  background-color : transparent;
  border-radius: 10px;
  display: block;
  margin: 40px auto 20px auto;
  color: white;
}
.study-button:hover{
  background-color: #17c1f2;
  color : white;
  box-shadow: 0px 0px 10px #17c1f2;
}
.learn-text-container{
  text-align: center;
}
.learn-header{
  line-height: 30px;
}
.learning-image{
  width: 90%;
  display: block;
  margin: 0px auto;
}
.community-text-container{
  padding: 0px;
  margin-top: 40px;
}
.community-image{
  width: 85%;
  display: block;
  margin: 0px auto;
}
.community-text{
      text-align: center;
    line-height: 22px;
    font-size: 14px;
}
.community-button{
  width: 150px;
  padding: 8px;
  border : 2px solid;
  color : #17c1f2;
  border-radius: 10px;
  display: block;
  margin: 30px auto 20px auto;
  background-color: white;
}
.community-button:hover{
  background-color: #17c1f2;
  color : white;
  box-shadow: 0px 0px 10px #17c1f2;
}
.bottom-section{
  background-color: #031516;
  color: white;
}
.mission-div{
  padding-bottom: 48px;
  padding-top: 64px;
  border-bottom: 1px solid;
}
.mission-header{
  font-size: 25px;
  font-weight: 100;
}
.mission-text{
  line-height: 22px;
  padding-top: 16px;
}
.side-div{
  padding-top: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid;
}
.subscribe-cta-text{
  text-align: center;
  color: #17c1f2;
  font-weight: 600;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 10px;
}
.subscribe-input{
    display: inline-block;
    width: 70%;
    height: 35px;
    border: 0px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    background-color: white;
}
.subscribe-input::placeholder{
  padding-left: 10px;
  font-family: signika-light;
}
.subscribe-button{
    display: inline-block;
    width: 30%;
    height: 35px;
    border-top-right-radius: 20px;
    background-color: #de6b1a;
    border: 0px;
    border-bottom-right-radius: 20px;
    font-weight: 600;
    font-family: signika-regular;
    color : #ffffff;
    font-family: signika-regular;
    letter-spacing: 1px; 
}
.follow-text{
  font-weight: 600px;
  letter-spacing: 1px;
  padding: 32px 0px 4px 0px;
}
.social.facebook{
  color: #0060ff;
    background-color: white;
    height: fit-content;
    padding: 3px;
    border-radius: 3px;
}
.social.twitter{
    padding: 3px;
    background: white;
    color: #17c1f2;
    border-radius: 3px;
}
.social.linkedIn{
      color: #0c367b;
    padding: 2px;
    background: white;
    font-size: 104%;
    border-radius: 3px
}
.social-inner p{
  margin: 5px 0px;
  font-weight: 600px;
  letter-spacing: 1px;
}
.privacypolicy, .tems01{
  letter-spacing: 1px;
  text-align: center;
  padding: 10px 0px 8px 0px;
}
.copyrightnotice{
  padding: 5px;
  text-align: center;
  font-size : 80%;
}
//animations 
//headline animations 
/*
.text1{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text1;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text1{
  0%{
    display: block;
    opacity: 0;
  }
  1%{
    opacity: 1;
  }
  16%{
    opacity: 1;
  }
  17%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 0;
  }
}
.text2{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text2;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text2{
  16%{
    opacity: 0;
    display: block;
  }
  17%{
    opacity: 1;
  }
  33%{
    opacity: 1;
  }
  34%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
}
.text3{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text3;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text3{
  33%{
    opacity: 0;
    display: block;
  }
  34%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  51%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 0;
  }
}
.text4{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text4;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text4{
  50%{
    opacity: 0;
    display: block;
  }
  51%{
    opacity: 1;
  }
  66%{
    opacity: 1;
  }
  67%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 0;
  }
}
.text5{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text5;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text5{
  66%{
    opacity: 0;
    display: block;
  }
  67%{
    opacity: 1
  }
  83%{
    opacity: 1;
  }
  84%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 0;
  }

}
.text6{
  animation: name duration timing-function delay iteration-count direction fill-mode;
  animation-name: text6;
  animation-duration: 36s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
@keyframes text6{
  0%{
    opacity: 0;
    display: none;
  }
  83%{
    opacity: 0;
    display: block;
  }
  84%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}*/
@media screen and (min-width : 400px){
  .headline{
    font-size : 25px;
  }
  .landing-image img{
  width: 220px;
  height : 255px;
  position : relative;
  top : -80px;
  left : 40%;
}
}
@media screen and (min-width : 480px) {
  .top-circle{
    width: 600px;
    height: 600px;
  }
  .headline{
    font-size : 35px;
  }

  .landing-image img{
  width: 250px;
  height : 300px;
  position : relative;
  top : -80px;
  left : 45%;
}
.subline.specific, .t01,.t02{
  font-size: 18px;
  padding-top: 32px;
}
.community-header,.expand-header,.explore-header,.mission-header{
  font-size : 30px;
  line-height: 33px;
}
.expand-image{
  border-radius : 20%;
}
.community-text,.learn-text, .expand-text,.explore-text{
  font-size: 18px;
  line-height: 33px;
}
.community-text-container{
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}

}
@media screen and (min-width: 600px){
  
}
@media screen and (min-width: 768px){
  
  .landing-text-container{
    margin-left: 23px;
  }
  .t01{
  padding-right: 12px;
  }
    .top-circle{
    width: 700px;
    height: 700px;
    top: -150px;
    left: 35%;
  }
  .community-header{
    margin-top: 50px;
  }
  .landing-image img{
  width: 350px;
  height : 450px;
  position : relative;
  top : -120px;
  left : 50%;
}
.landing-text-wrapper{
  max-width: 750px;
}
.about-snippet-section{
  display: block;
}
.community-text-container,.expand-main,.expand-image-container,.mission-div,.side-div{
  flex: 1;
}
.mission-div,.side-div{
  @include padding1;
  padding-top: 64px;
  padding-bottom: 32px;
}
.mission-div{
  border-right: 1px solid;
}
.mission-text{
  font-size: 18px;
  line-height: 22px !important;
}
.community-img-container{
  flex :1;
  margin-top: 0px;
}
.community-image{
  margin-top: 15%;
}
.community-section{
  @include padding-top4;
  @include padding-bottom4;
}
.studySection{
  flex-direction: row-reverse;
  padding-top: 70px;
}
.learn-text-container{
  flex: 1;
}
.learn-image-container{
  flex: 1;
}
.learning-image{
  margin-top: 15%;  
  width: 100%;
}
.expand-image{
  margin-top : 5%;
  width: 100%;
}
}
@media screen and (min-width: 900px){
  .learning-image{
    margin-top: 7%;
  }
  .expand-image{
  margin-top : 0%;
}
  .studySection{
    padding-top: 100px;
    padding-bottom: 78px;
  }
  .landing-text-wrapper{
  max-width: 580px;
}
  .landing-image img{
  width: 360px;
  height : 490px;
  position : relative;
  top : -310px;
  left : 57%;
}
    .top-circle{
    width: 700px;
    height: 700px;
    top: -170px;
    left: 35%;
  }
  .about-snippet-section{
    margin-top: -230px;
  }
  .community-header{
    margin-top: 110px;
  }
}
@media screen and (min-width: 1024px){
  .top-circle{
    width: 750px;
    height: 750px;
    top: -210px;
    left: 45%;
  }
    .learning-image{
    margin-top: 0%;
  }
  .community-image{
  margin-top: 5%;
}
    .landing-text-wrapper{
      max-width: 650px;
    }
      .headline{
        padding-top: 64px;
    font-size : 45px;
  }
  .subline.specific, .t01,.t02{
    font-size : 22px;
    padding-top: 48px;
    line-height: 30px;
  }
  .get-started-button{
    font-size: 18px;
  }
  .community-text-container{
  margin-left: 3%;
  margin-top: 60px;
}
.community-img-container{
  margin-top: 40px;
}
.expand-header{
  margin-top: 10%;
}
}
@media screen and (min-width: 1200px){

    .learning-image{
    margin-top: -7%;
  }
      .landing-text-wrapper{
      max-width: 780px;
    }
      .landing-image img{
  width: 370px;
  height : 520px;
  position : relative;
  top : -400px;
  left : 57%;
}
  .about-snippet-section{
    margin-top: -320px;
  }
  .snippet-text{
    padding:15px;
  }
  .snippet{
    width: 75%;
  }
  .expand-header{
  margin-top: 25%;
}
}

</style>
<style lang="scss">
/* this design is mobile so the max width for it to apply is 480px*/
