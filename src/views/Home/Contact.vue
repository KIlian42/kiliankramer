<template>
  <v-app id="Contact-c">
    <v-container fill-height fluid>
      <v-layout row justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <center>
              <div id="box">
                <div id="inner">
                  <a href="mailto:contact@kiliankramer.com">
                    contact@kiliankramer.com
                  </a>
                </div>
              </div>
            </center>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Contact-c",
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#Contact-c {
  min-width: 100vw;
  min-height: 80vh;
  background-size: cover;
  background-position: -18%;
  //background-image: url("../../assets/stars3.jpg");
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 50%,
      rgba(21, 21, 21, 1) 90%
    ),
    url(../../assets/stars3.jpg);
  //background-image: radial-gradient(rgba(0, 0, 0, 0) 20%, rgba(21, 21, 21, 1) 90%), url(../../assets/stars1.jpg);
}

#box {
  color: white;
  margin-top: 3%;
  width: 500px;
  min-height: fit-content;
  //min-height: fit-content;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

#inner {
  padding: 10%;
}

a:link {
  color: #1dc4d0;
  font-size: 24px;
  text-decoration: none;
  pointer: cursor;
  &:hover {
    text-decoration: underline !important;
  }
}
@media (max-width: 600px) {
  #Contact-c {
    min-height: 40vh;
  }
  a:link {
    font-size: 20px;
  }
  #box {
    width: 100%;
    border-radius: 0px;
    border-left: none;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
}
</style>
