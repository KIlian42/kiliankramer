<template>
  <v-app class="noselect" id="About-c">
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
                Hi, I am Kilian Kramer and I am a full-stack developer.
                <br><br>
                I build innovative software and design websites.
                <br>
                I have a bachelor degree in Business Informatics (B.Sc)
                <br>
                and I will soon finish my master in Artificial Intelligence (M.Sc).
                <br>
                No matter what concerns you have: a small feature
                <br>
                or a large project, I may consult you in your project
                <br>
                or will implement your application.
                <br><br>
                While building your individual machine learning model, I will share my
                <br>
                experience in data labeling, data pre-processing, data augmentation,
                <br>
                feature engineering, model selection, model engineering and fine-tuning.
                <br>
                My skills include <medium style="color:#1AA4F7;">natural language processing</medium>, <medium style="color:#1AA4F7;">computer vision</medium>, <medium style="color:#1AAFF7;">recommender</medium>
                <br>
                <medium style="color:#1AAFF7;">systems</medium>, <medium style="color:#1AA4F7;">planning systems</medium>, <medium style="color:#1AA4F7;">reinforcement learning</medium> and more. My previous
                <br>
                projects were focused on <a id="link" target=”_blank” href="https://maskor.fh-aachen.de/projects/ARTUS/">autonomous driving*</a>, <a id="link" target=”_blank” href="https://github.com/KIlian42/Atrial-Fibrillation-Classification-using-Transformer-models">medical applications*</a> and
                <br>
                <a id="link" target=”_blank” href="https://next-audit.de/ki-im-audit/?_gl=1*7nv7at*_up*MQ..*_ga*NTIzOTc4MDQxLjE2ODIyNDE0ODY.*_ga_K2B0QB965W*MTY4MjI0MTQ4Ni4xLjEuMTY4MjI0MTUwOC4wLjAuMA..">recommender systems*</a>.
                <br><br>
                Send me an e-mail to contact me. <font-awesome-icon style="width:11px;margin-bottom:-2px;" icon="fa-solid fa-arrow-down" />
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
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
#link {
  color: #1DC4D0;
  text-decoration: none;
  pointer: cursor;
  &:hover {
    text-decoration: underline !important;
  }
}
#About-c {
  position: relative;
  min-width: 100vw;
  min-height: 80vh;
  margin-top: -70px;
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
@media (max-width: 1390px) {
  #text {
    padding-top: 10%;
    padding-left: 10%;
    font-size: 18px;
  }
  #imagecontainer {
    img {
      margin-top: 15%;
    }
  }
}
@media (max-width: 1220px) {
  #text {
    font-size: 17px;
    padding-top: 20%;
    padding-left: 6%;
    font-size: 17px;
  }
  #imagecontainer {
    img {
      margin-top: 30%;
    }
  }
}
@media (max-width: 1080px) {
  #text {
    font-size: 14px;
    padding-top: 5%;
    padding-left: 6%;
  }
  #imagecontainer {
    img {
      margin-top: 10%;
    }
  }
}
@media (max-width: 960px) {
  #text {
    font-size: 20px;
    padding-top: 15%;
    text-align: center;
  }
  #imagecontainer {
    img {
      width: 100%;
      margin: auto;
    }
  }
}
@media (max-width: 960px) {
  #text {
    margin-top: -80px;
  }
}
@media (max-width: 750px) {
  #text {
    font-size: 16px;
  }
}
@media (max-width: 650px) {
  #text {
    margin-top: -80px;
  }
  #imagecontainer {
    img {
      margin-top: -70px;
    }
  }
}
@media (max-width: 600px) {
  #imagecontainer {
    img {
      width: 100%;
      margin: auto;
      margin-top: -70px;
    }
  }
  #text {
    font-size: 14px;
    padding-left: 0%;
    padding-right: 0%;
  }
}
@media (max-width: 500px) {
  #text {
    margin-top: -50px;
    font-size: 11px;
  }
  #imagecontainer {
    img {
      margin-top: -100px;
    }
  }
}
@media (max-width: 400px) {
  #About-c {
    min-height: 80vh;
  }
  #text {
    margin-top: -8%;
    font-size: 10px;
    padding-left: 0%;
    padding-right: 0%;
  }
  #imagecontainer {
    img {
      margin-top: -1%;;
    }
  }
}
@media screen and (orientation:landscape) and (max-width: 850px) and (max-height: 450px)  {
  #text {
    font-size: 18px;
    padding-top: 13%;
    padding-bottom: 0%;
  }
  #imagecontainer {
    img {
      width: 100%;
      margin: auto;
    }
  }
}
</style>