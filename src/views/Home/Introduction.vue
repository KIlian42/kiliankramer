<template>
  <v-app class="noselect" id="Introduction-c">
    <v-container fill-height fluid>
      <v-layout row justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="250" data-aos-once="true">
            <div id="text">
              <p>
                Technology is evolving fast.
                <br>
                <!--
                Have you already heard about 
                <br v-if="showBreak1()">
                Quantum Machine Learning?
                -->

                <!--<br>-->
                <!--Don't be afraid, it's still in it's infancy.-->

                <!--<br><br><br v-if="showBreak2()">-->
                Each day AI becomes more present.
                <br>
                Sooner or later companies have to deal with
                <br>
                the topic "AI" to not lag behind in the future.
                <br><br><br v-if="showBreak2()">
                If your team have innovative ideas,
                <br>
                but you do not posess the necessary know-how,
                <br>
                I may help you as an experienced data scientist
                <br>
                and prospective AI expert to reach your goals.
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
    name: "Introduction-c",
    data: () => ({

    }),
    props: [
      "screenHeight",
      "screenWidth"
    ],
    methods: {
      showBreak1() {
        if (this.screenWidth < 700) return true;
        else return false;
      },
      showBreak2() {
        if (this.screenWidth < 600 && this.screenHeight > 600) return true;
        else return false;
      }
    },
    updated() {
      // console.log("Height", this.screenHeight)
      // console.log("Width", this.screenWidth)
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
#Introduction-c {
  position: relative;
  min-width: 100vw;
  min-height: 40vh;
  background-color:#151515;
}
#text {
  padding-top: 8%;
  //padding-top: 5%;
  //padding-bottom: 2%;
  text-align: center;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
  font-size: 20px;
  line-height: 160%;
}
@media (max-width: 1264px) {
  #text {
    padding-bottom: 10%;
  }
}
@media (max-width: 600px) {
  #Introduction-c {
    min-height: 70vh;
  }
  #text {
    //color: red;
    font-size: 16px;
  }
}
@media (max-width: 400px) {
  #text {
    //color: blue;
    padding-top: 0%;
    padding-bottom: 0%;
    font-size: 16px;
  }
}
@media screen and (orientation:landscape) and (max-width: 850px) and (max-height: 450px)  {
  #text {
    padding-top: 3.5%;
    padding-bottom: 3.5%;
    //color: yellow;
    font-size: 18px;
  }
}
</style>