<template>
  <div id="App">
    <!--
    <font-awesome-icon class="linkedin" icon="fa-brands fa-linkedin" />
    <font-awesome-icon class="xing" icon="fa-brands fa-square-xing" />
    <font-awesome-icon class="instagram" icon="fa-brands fa-instagram" />
    <font-awesome-icon @click="mute" v-if="playmusic" class="volume" icon="fa-solid fa-volume-high" />
    <font-awesome-icon @click="mute" v-if="!playmusic" class="volume" icon="fa-solid fa-volume-xmark" />
    <audio v-if="playmusic" autoplay loop>
      <source src="./assets/MyKingdom.mp3" type="audio/mp3">
    </audio>
    <div class="div1">
      <b><p id="typedtext" class="typetext" /></b>
      <vue-particles color="#4BD0A8" style="height: 100vh"></vue-particles>
    </div>
    <div class="div4">
      <div class="mytext">
          <p>
          Technology is developing extremely fast.
          <br>
          Have you already heard about Quantum Machine Learning?
          <br>
          Don't worry, it's still in it's infancy.
          <br><br>
          Each day AI becomes more and more present.
          <br>
          Sooner or later companies have to deal with
          <br>
          the topic "AI" to not to lag behind later.
          <br><br>
          If your team or your business have innovative ideas,
          <br>
          but you lack with the necessary Know-How,
          <br>
          I am here to help you as an experienced data scientist.
          <br>
          and will guide you to reach your visions.
          </p>
        </div>
    </div>
    <div class="div3">
      <div class="videocontainer">
        <video style="border-radius:15px;margin-top:4px" width="100%" height="100%" autoplay loop muted>
          <source src="./assets/NeuralNetworkSimulation.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mytext2">
          <p>
          Neural networks are capable to learn almost every
          <br>
          pattern, but the data needs to be pre-processed.
          <br><br>
          For instance, text (words) are transformed into vectors,
          <br>
          so called word embeddings. Through context-based
          <br>
          processing neural networks learn the semantic
          <br>
          meaning of words by clustering these vectors.
          <br><br>
          I like to share my experience with you when building your
          <br>
          machine learning features. This includes knowledge about
          <br>
          data pre-processing and data augmentation, the right model
          <br>
          choice and a proper fine-tuning, to reach the best performances.
          </p>
        </div>
    </div>
    <div class="div2">
      <div class="myimage" />
      <div class="mytext3">
        <p> 
          Hi, I am Kilian and I am a passionate full-stack developer.
          <br><br>
          I build innovative software and design websites.
          <br>
          I have a bachelor degree in business informatics (B.Sc) and
          <br>
          currently I am doing my master in artificial intelligence (M.Sc).
          <br><br>
          No matter what concerns you have, whether it's a small
          <br>
          feature or a larger project, I may help you as a consultant
          <br>
          or will support you by implementing your software.
          <br><br>
          Drop me an e-mail below to get in touch with me.
        </p>
      </div>
    </div>
    -->
    <!--
    <header>
      Current section: {{ activeEntry }}
    </header>
    -->
    <nav>
      <ul>
        <!-- @click="goToSection(section.value)" -->
        <li
          v-for="section in sections"
          :key="section.value"
          :class="{ active: section.value == activeEntry }"
          v-scroll-to="getSection(section.value)"
        >
          <span>{{ section.name }}</span>
        </li>
      </ul>
    </nav>
    <article>
      <section
        v-for="section in sections"
        :key="section.value"
        :class="section.value"
        :id="section.value"
        :name="section.value"
        ref="section"
      >
        <h2>{{ section.name }}</h2>
      </section>
    </article>
    <!--<vue-particles color="#dedede"></vue-particles>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    playmusic: false,
    observer: null,
    activeEntry: "",
    sections: {
      red: {
        name: "Red",
        value: "red",
      },
      blue: {
        name: "Blue",
        value: "blue",
      },
      green: {
        name: "Green",
        value: "green",
      },
      yellow: {
        name: "Yellow",
        value: "yellow",
      },
      purple: {
        name: "Purple",
        value: "purple",
      },
    },
  }),
  async mounted() {
    this.initObserver();
    this.observeSections();
  },
  async created() {},
  updated() {
    console.log(this.activeEntry);
  },
  computed: {
    getSectionsRefs() {
      return this.$refs;
    },
  },
  methods: {
    mute() {
      this.playmusic = !this.playmusic;
    },
    goToSection(sectionName) {
      console.log(sectionName);
      window.scrollTo({
        top: this.$refs.section.filter(
          (e) => e.attributes.name.value === sectionName
        )[0].offsetTop,
        behavior: "smooth",
      });
    },
    observeSections() {
      this.$refs.section.forEach((section) => {
        this.observe(section);
      });
    },
    observe(entry) {
      this.observer.observe(entry);
    },
    initObserver() {
      const options = {
        threshold: [0.5],
      };
      this.observer = new IntersectionObserver((entries) => {
        const active = entries.filter((e) => e.isIntersecting); //entry.intersectionRatio
        if (active.length) {
          this.activeEntry = active[0].target.attributes.name.value;
        }
      }, options);
    },
    getSection(section) {
      return "#" + String(section);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Calibri", sans-serif;
  font-weight: 700;
}
.linkedin {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  right: 70px;
  bottom: 20px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 1;
}
.xing {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 1;
}
.instagram {
  width: 40px;
  height: 40px;
  color: white;
  position: fixed;
  right: 120px;
  bottom: 20px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 1;
}
.volume {
  width: 70px;
  height: 70px;
  color: white;
  position: fixed;
  left: 40px;
  bottom: 40px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 1;
}
.div1 {
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  //background-color: #151515;
}
.myimage {
  float: left;
  background-image: url("./assets/Me.jpeg");
  background-size: cover;
  height: 500px;
  width: 400px;
  position: absolute;
  left: 10%;
  top: 10%;
  /* From https://css.glass */
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 3px solid rgba(255, 255, 255, 0.56);
  padding: 0px 4px;
}

.mytext {
  max-width: 700px;
  text-align: left;
  left: 33%;
  top: 20%;
  position: absolute;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Tahoma, sans-serif;
  font-size: 24px;
  line-height: 160%;
}

.mytext2 {
  max-width: 800px;
  text-align: left;
  right: 2%;
  top: 21.5%;
  position: absolute;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Tahoma, sans-serif;
  font-size: 24px;
  line-height: 160%;
}

.mytext3 {
  max-width: 700px;
  text-align: left;
  right: 10%;
  top: 20%;
  position: absolute;
  color: white;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Tahoma, sans-serif;
  font-size: 24px;
  line-height: 160%;
}

.typetext {
  position: absolute;
  left: 20vw;
  top: 28vh;
  opacity: 0.6;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 80px;
}

.div2 {
  position: relative;
  width: 100vw;
  height: 150vh;
  background-color: #151515;
}

.div3 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #151515;
}

.div4 {
  position: relative;
  width: 100vw;
  height: 70vh;
  background-color: #151515;
}

.videocontainer {
  position: absolute;
  left: 4%;
  top: 25vh;
  width: 45%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(255, 255, 255, 0.56);
  padding: 0px 4px;
}

.divtemplate {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

header {
  position: fixed;
  background: rgba(#000, 0.3);
  padding: 12px 16px;
  border-radius: 8px;
  margin: 8px;
}
nav {
  position: fixed;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  ul {
    li {
      text-align: left;
      padding: 4px 32px;
      cursor: pointer;
      span {
        line-height: 24px;
        display: inline-block;
        padding: 0px 12px;
        vertical-align: top;
        user-select: none;
      }
      &:before {
        content: "";
        background: #fff;
        height: 24px;
        width: 24px;
        border-radius: 16px;
        display: inline-block;
        transform: scale(0.5);
        transition: transform ease 0.4s;
      }
      &:hover {
        &:after {
          transform: scale(0.7);
        }
      }
      &.active {
        color: #fff;
        &:after {
          transform: scale(1);
        }
      }
    }
  }
}
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &.blue {
    background: #2d7dd2;
  }
  &.red {
    background: #f44100;
  }
  &.green {
    background: #97cc04;
  }
  &.yellow {
    background: #eeb902;
  }
  &.purple {
    background: #a03896;
  }
  h2 {
    text-transform: capitalize;
    font-size: 64px;
    opacity: 0.5;
    user-select: none;
  }
}
footer {
  height: 400px;
}
</style>
