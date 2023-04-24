<template>
  <v-app class="noselect" id="NeuralNetworks-c">
    <!-- v-btn block class="primary">1</v-btn> -->
    <!-- class="ma-0 pa-0" -->
    <v-container fill-height fluid>
      <v-layout row wrap justify-center align-xs-start align-sm-start align-md-start align-lg-center align-xl-center style="height:103%;">
        <v-flex xs12 sm12 md12 lg6 xl6>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="200" data-aos-once="true">
            <div id="videocontainer">
              <!-- <img src="../../assets/logo.png" style="border-radius:15px;margin-top:4px" width="100%" height="100%" /> -->
              <video controls width="100%" height="100%" playsinline autoplay loop muted>
                <source src="../../assets/NeuralNetworkSimulation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md12 lg6 xl6>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="200" data-aos-once="true">
            <div id="text">
              <p>
              Neural networks are capable to learn any pattern,
              <br>
              however every data needs pre-processing.
              <br><br>
              For instance, text (words) are in Chat-GPT encoded as vectors,
              <br>
              so called embeddings. Through context-based training the
              <br>
              language model can learn the semantic meaning by predicting
              <br>
              masked contextual words to cluster the related embedding vectors.
              <br><br>
              In the video is an example for image recognition. Popular techniques
              <br>
              in computer vision are convolutional networks, which process image
              <br>
              features with convolutional filters.
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
    name: "NeuralNetworks-c",
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
#NeuralNetworks-c {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color:#151515;
}
#videocontainer {
  padding-left: 5%;
}
#text {
  text-align: left;
  padding-left: 4%;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
  font-size: 20px;
  line-height: 160%;
}
@media (max-width: 1400px) {
  #text {
    font-size: 19px;
  }
}
@media (max-width: 1350px) {
  #text {
    font-size: 18px;
  }
}
@media (max-width: 1300px) {
  #text {
    font-size: 17px;
  }
}
@media (max-width: 1263px) {
  #videocontainer {
    margin-top: -0.5%;
    padding-left: 0%;
  }
  #text {
    font-size: 20px;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 15%;
    padding-bottom: 15%;
    text-align: center;
  }
}
@media (max-width: 1150px) {
  #text {
    padding-top: 7%;
    margin-bottom: -20px;
  }
}
@media (max-width: 650px) {
  #NeuralNetworks-c {
    min-height: 70vh;
  }
  #text {
    font-size: 16px;
    padding-top: 7%;
    padding-bottom: 40%;
  }
}
@media (max-width: 530px) {
  #text {
    font-size: 12px;
  }
}
@media (max-width: 400px) {
  #text {
    font-size: 12px;
    padding-left: 0%;
    padding-right: 0%;
    margin-top: -1%;
  }
}
@media screen and (orientation:landscape) and (max-width: 850px) and (max-height: 450px)  {
  #NeuralNetworks-c {
    min-height: 80vh;
  }
  #text {
    padding-top: 5%;
    padding-bottom: 15%;
    font-size: 18px;
  }
}
</style>