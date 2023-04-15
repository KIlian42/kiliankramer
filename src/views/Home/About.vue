<template>
  <v-app id="About-c">
    <v-container fill-height fluid>
      <v-layout row wrap justify-center align-xs-start align-sm-start align-md-start align-lg-center align-xl-center style="height:103%;">
        <v-flex class="order-first order-md-last order-lg-last order-xl-last"  xs12 sm12 md5 lg5 xl5>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="200" data-aos-once="true">
            <div id="imagecontainer">
              <center>
                <img src="../../assets/Me.png" />
              </center>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md7 lg7 xl7>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="200" data-aos-once="true">
            <div id="text">
              <p> 
                Hi, I'm Kilian Kramer and I am a full-stack developer.
                <br><br>
                I build innovative software and design websites.
                <br>
                I have a bachelor degree in Business Informatics (B.Sc)
                <br>
                and a master degree in Artificial Intelligence (M.Sc).
                <br>
                No matter what concerns You have, whether it's a small
                <br>
                feature or a larger project, I may assist You as consultant
                <br>
                or will implement Your application.
                <br><br>
                While building Your individual machine learning model I will share
                <br>
                my experience in data pre-processing, data augmentation, feature
                <br>
                engineering, model selection, model engineering and fine-tuning.
                <br>
                My domain knowledge include Natural Language Processing, Computer Vision,
                <br>
                Recommender Systems, Planning Systems, Reinforcement Learning and other.
                <br>
                Previous Projects focused specifically on autonomous driving, medical data,
                <br>
                recommender systems, natural language processing and web development.
                <br><br>
                Send me an e-mail below to contact me.
              </p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "About-c",
    data: () => ({

    }),
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#About-c {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #151515;
}
#imagecontainer {
  img {
    margin-left: -20%;
    margin-top: 8%;
    width: 68%;
  }
}
#text {
  text-align: left;
  padding-top: 8%;
  padding-left: 15%;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
  font-size: 20px;
  line-height: 160%;
}
@media (max-width: 1350px) {
  #text {
    padding-top: 20%;
    padding-left: 10%;
    font-size: 18px;
  }
}
@media (max-width: 1020px) {
  #text {
    padding-top: 20%;
    padding-left: 6%;
    font-size: 17px;
  }
}
@media (max-width: 960px) {
  #imagecontainer {
    img {
      margin-top: 0%;
      margin-left: 0%;
      width: 70%;
    }
  }
  #text {
    padding-top: 15%;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
}
@media (max-width: 700px) {
  #text {
    font-size: 16px;
    padding-top: 25%;
    margin-bottom: -15px;
    padding-left: 0%;
    padding-right: 0%;
  }
}
@media (max-width: 600px) {
  #imagecontainer {
    img {
      width: 100%;
    }
  }
  #text {
    font-size: 16px;
    padding-left: 0%;
    padding-right: 0%;
  }
}
@media (max-width: 400px) {
  #text {
    font-size: 12px;
    padding-left: 0%;
    padding-right: 0%;
  }
}
@media screen and (orientation:landscape) and (max-width: 850px) and (max-height: 450px)  {
  #text {
    font-size: 18px;
    padding-top: 5%;
    padding-bottom: 0%;
  }
}
</style>