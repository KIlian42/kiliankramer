<template>
  <div id="App">
    <Navigation :mobileView=mobileView />
    <article>
      <section class="box">
        <Entry  />
      </section>
      <hr>
      <section class="box">
        <Introduction :screenHeight=screenHeight :screenWidth=screenWidth />
      </section>
      <section class="box">
        <NeuralNetworks />
      </section>
      <section class="box">
        <About />
      </section>
      <section class="box">
        <Contact />
      </section>
    </article>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Entry from "./views/Home/Entry.vue"
import Introduction from "./views/Home/Introduction.vue"
import NeuralNetworks from "./views/Home/NeuralNetworks.vue"
import About from "./views/Home/About.vue"
import Contact from "./views/Home/Contact.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  data: () => ({
    mobileView: false,
    screenHeight: null,
    screenWidth: null,
  }),
  created() {

  },
  mounted() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  updated() {
    console.log(this.screenWidth)
  },
  computed: {

  },
  watch: {
    /*
    mobileView() {
      console.log("change", this.mobileView)
    }
    */
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    },
  },
  components: {
    Navigation,
    Entry,
    Introduction,
    NeuralNetworks,
    About,
    Contact,
    Footer
  }
};
</script>

<style lang="scss" scoped>
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
