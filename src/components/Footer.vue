<template>
  <div class="noselect" id="Footer-c">
    <div id="emailDiv">
      <a
        target="”_blank”"
        v-scroll-to="'#Contact-c'"
        href="https://www.linkedin.com/in/kilian-kramer-7352b2235/"
        ><font-awesome-icon id="email" icon="fa-solid fa-envelope"
      /></a>
    </div>
    <div id="linkedinDiv">
      <a
        target="”_blank”"
        href="https://www.linkedin.com/in/kilian-kramer-7352b2235/"
        ><font-awesome-icon id="linkedin" icon="fa-brands fa-linkedin"
      /></a>
    </div>
    <div id="githubDiv">
      <a target="”_blank”" href="https://github.com/KIlian42?tab=repositories"
        ><font-awesome-icon id="github" icon="fa-brands fa-github"
      /></a>
    </div>
    <div id="cvDiv">
      <a target="”_blank”" href="/CV Kilian Kramer.pdf">
        <img src="/cv.svg" alt="CV Icon" id="cv" />
      </a>
    </div>
    <!--
      <font-awesome-icon @click="mute" v-if="playmusic" id="volume" icon="fa-solid fa-volume-high" />
      <font-awesome-icon @click="mute" v-if="!playmusic" id="volume" icon="fa-solid fa-volume-xmark" />
      <audio v-if="playmusic" autoplay loop>
        <source src="../assets/MyKingdom.mp3" type="audio/mp3">
      </audio>
      -->
  </div>
</template>

<script>
export default {
  name: "Footer-c",
  data: () => ({
    playmusic: false,
  }),
  methods: {
    mute() {
      this.playmusic = !this.playmusic;
    },
  },
};
</script>

<style lang="scss" scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
#emailDiv {
  position: fixed;
  right: 167.5px;
  bottom: 15.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  &:hover {
    #email {
      color: #434749;
    }
  }
}
#email {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  right: 75px;
  bottom: 20px;
}
#githubDiv {
  position: fixed;
  right: 115.5px;
  bottom: 15.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  &:hover {
    #github {
      color: #434749;
    }
  }
}
#github {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  left: 20px;
  bottom: 20px;
}
#cvDiv {
  position: fixed;
  right: 115.5px;
  bottom: 15.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  &:hover {
    #cv {
      color: #434749;
      opacity: 0.1;
    }
  }
}
#cv {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  left: 70px;
  bottom: 20px;
}
#linkedinDiv {
  position: fixed;
  right: 15.5px;
  bottom: 15.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  &:hover {
    #linkedin {
      color: #434749;
    }
  }
}
#linkedin {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
