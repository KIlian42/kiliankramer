<template>
  <v-app class="noselect" id="About-c">
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
        <v-flex
          class="order-first order-md-last order-lg-last order-xl-last"
          xs12
          sm12
          md5
          lg5
          xl5
        >
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div id="imagecontainer">
              <center>
                <img src="../../assets/Me.png" />
              </center>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md7 lg7 xl7>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div id="text">
              <div class="block-text">
                My name is Kilian Kramer (27), I am full-stack developer and
                passionate AI engineer. I will finish next month a 2 1/2 years
                Master's programme (M.Sc) in Artificial Intelligence at the
                University of Maastricht.
                <br /><br />
                My research focuses on model development from scratch and
                integrating lastest extisting models in production environment.
                My experience includes model development or selection /
                fine-tuning, hardware requirements and data organisation:
                collecting, preparing, examining, visualising and augmenting
                data. In particular I have expertise in natural language
                processing, computer vision, planning and recommender systems.
                Below are some references to previous projects:<br /><br />
                ->
                <a id="link" target="”_blank”" href="https://ella-group.io"
                  >Personal assistant / Digital clone (Ella Media AG)</a
                ><br />
                ->
                <a
                  id="link"
                  target="”_blank”"
                  href="https://maskor.fh-aachen.de/projects/ARTUS/"
                  >ARTUS (autonomous driving)</a
                >,
                <a
                  id="link"
                  target="”_blank”"
                  href="https://github.com/KIlian42/HTN-planning-under-resource-and-time-constraints-in-hybrid-mines"
                  >(Git)</a
                ><br />
                ->
                <a
                  id="link"
                  target="”_blank”"
                  href="https://next-audit.de/kira/"
                  >KIRA (natural language processing)</a
                ><br />
                ->
                <a
                  id="link"
                  target="”_blank”"
                  href="https://github.com/KIlian42/Atrial-Fibrillation-Classification-using-Transformer-models"
                  >Master Thesis (ECG arrhythmia disease detection)</a
                ><br /><br />
              </div>
            </div>
            <div id="text2">
              If you would like to collaborate with me, please send me an
              e-mail.
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

#link {
  color: #1dc4d0;
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
  margin-top: -10px;
  background-color: #151515;
}
#imagecontainer {
  img {
    margin-left: -35%;
    margin-top: 8%;
    width: 68%;
  }
}
#text {
  text-align: justify;
  padding-top: 8%;
  padding-left: 22%;
  padding-right: 15%;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  line-height: 160%;
}
#text2 {
  text-align: justify;
  padding-left: 22%;
  padding-right: 0%;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  line-height: 160%;
}
.block-text {
  text-align: justify; /* Justifies the text */
}
@media (max-width: 1390px) {
  #text {
    padding-top: 10%;
    padding-left: 10%;
    font-size: 18px;
  }
  #text2 {
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
    padding-top: 20%;
    padding-left: 6%;
    font-size: 17px;
  }
  #text2 {
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
  #text2 {
    padding-left: 6%;
    font-size: 14px;
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
  #text2 {
    text-align: center;
    font-size: 20px;
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
  #text2 {
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
  #text2 {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  #text {
    margin-top: -50px;
    font-size: 11px;
  }
  #text2 {
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
  #text2 {
    padding-left: 0%;
    padding-right: 0%;
    font-size: 10px;
  }
  #imagecontainer {
    img {
      margin-top: -1%;
    }
  }
}
@media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
  #text {
    font-size: 18px;
    padding-top: 13%;
    padding-bottom: 0%;
  }
  #text2 {
    font-size: 18px;
  }
  #imagecontainer {
    img {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
