<template>
  <v-app class="noselect" id="NeuralNetworks-c">
    <!-- v-btn block class="primary">1</v-btn> -->
    <!-- class="ma-0 pa-0" -->
    <v-container fill-height fluid>
      <v-layout
        row
        wrap
        justify-center
        align-xs-start
        align-sm-start
        align-md-start
        align-lg-center
        align-xl-center
        style="height: 103%"
      >
        <v-flex xs12 sm12 md12 lg6 xl6>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div id="videocontainer">
              <!-- <img src="../../assets/logo.png" style="border-radius:15px;margin-top:4px" width="100%" height="100%" /> -->
              <video
                controls
                width="100%"
                height="100%"
                playsinline
                autoplay
                loop
                muted
              >
                <source
                  src="../../assets/NeuralNetworkSimulation.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md12 lg6 xl6>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div id="text">
              <p>
                Neural networks are one of the most interesting mathematical
                approaches, because by fitting the same simple function, that is
                many times nested, allows to learn any pattern. However, still
                there is a lot of research about explaining undergoing
                processes, which sometimes makes them seem like magic black-box
                models. Understanding the model training objective and
                identifying data patterns is important when integrating machine
                learning (ML) models and tuning the right knobs.
                <br /><br />For instance, Chat-GPT (Generative Pre-trained
                Transformer) is a probabilistic-based generative large language
                model trained in an autoregressive manner. Words are encoded as
                vectors, so called embeddings. Through context-based
                pre-training the language model learns semantic / syntactical
                relations by mapping, clustering, masking and predicting
                contextual words. Next, the model is fine-tuned on text
                completion by aligning it to instructions to do certain tasks.
                Language models (chatbots) are great in chat conversations,
                question answering, summarizing, enumerations, multiple-choice
                tasks or generating creative content, by now also processing
                multimodal or web data to some extent. However, in contrast to
                this is doing arithmetical calculations or reliable facts, given
                that for Chat-GPT data is outdated or two-thirds of the training
                data was scraped from the public internet.<br /><br />The video
                shows an example for image recognition. State-of-the-art
                computer vision models learn features from refined image pieces
                through combining convolutional filters in various ways. Today's
                research seek to combine multimodal models and each day new
                models are published that become capable of more that are even
                cheaper, because approaches become smarter and cheaper. Since AI
                is steadily evolving and will become indispensable in any
                working process, I study latest approaches and already take
                advantage of open-source models. If you plan to adapt machine
                learning models to your domain and processes I can consult you.
                <br /><br />
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
  data: () => ({}),
  methods: {},
};
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
  background-color: #151515;
}
#videocontainer {
  padding-left: 5%;
}
#text {
  text-align: justify;
  padding-left: 4%;
  padding-right: 20%;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
@media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
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
