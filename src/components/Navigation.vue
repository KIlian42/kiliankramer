<template>
  <div class="noselect" id="Navigation-c">
    <div v-if="scrolledNav" v-show="!mobileView" class="box"></div>
    <ul class="topbar" v-if="!mobileView">
      <li
        :class="{ active: activeEntry == 'Entry-c' }"
        v-scroll-to="'#Entry-c'"
      >
        <font-awesome-icon
          :class="{ active: activeEntry == 'Entry-c' }"
          id="up"
          icon="fa-solid fa-chevron-up"
        />
      </li>
      <li
        :class="{ active: activeEntry == 'Introduction-c' }"
        v-scroll-to="'#Introduction-c'"
      >
        <p>Intro</p>
      </li>
      <li
        :class="{ active: activeEntry == 'NeuralNetworks-c' }"
        v-scroll-to="'#NeuralNetworks-c'"
      >
        <p>AI</p>
      </li>
      <li
        :class="{ active: activeEntry == 'About-c' }"
        v-scroll-to="'#About-c'"
      >
        <p>About</p>
      </li>
      <li
        :class="{ active: activeEntry == 'Contact-c' }"
        v-scroll-to="'#Contact-c'"
      >
        <p>Contact</p>
      </li>
    </ul>
    <div class="burger-menu-icon" v-show="mobileView">
      <i
        v-show="mobileView"
        class="far fa-bars"
        :class="{ 'i-active': mobileNav }"
        @click="toggleMobileNav"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </i>
    </div>

    <!-- Sidebar -->
    <div class="sidebar" v-show="mobileView">
      <transition name="mobile-nav">
        <ul v-show="mobileNav">
          <br />
          <li
            :class="{ activeS: activeEntry == 'Entry-c' }"
            v-scroll-to="'#Entry-c'"
          >
            •Top
          </li>
          <li
            :class="{ activeS: activeEntry == 'Introduction-c' }"
            v-scroll-to="'#Introduction-c'"
          >
            •Intro
          </li>
          <li
            :class="{ activeS: activeEntry == 'NeuralNetworks-c' }"
            v-scroll-to="'#NeuralNetworks-c'"
          >
            •AI
          </li>
          <li
            :class="{ activeS: activeEntry == 'About-c' }"
            v-scroll-to="'#About-c'"
          >
            •About
          </li>
          <li
            :class="{ activeS: activeEntry == 'Contact-c' }"
            v-scroll-to="'#Contact-c'"
          >
            •Contact
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation-c",
  data: () => ({
    activeEntry: "",
    observer: null,
    scrolledNav: null,
    mobileNav: false,
  }),
  methods: {
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 689) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  updated() {},
  watch: {},
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        // arrow function!
        const active = entries.filter((e) => e.isIntersecting);
        if (active.length) {
          this.activeEntry = active[0].target.childNodes[0].id;
          console.log(this.activeEntry);
        }
      },
      { threshold: [0.5] }
    );
    // loop over components
    const matches = document.querySelectorAll("section.box");
    for (let i = 0; i < matches.length; i++) {
      this.observer.observe(matches[i]);
    }
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {},
  created() {},
  props: ["mobileView"],
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
#Navigation-c {
  position: fixed;
  z-index: 1;
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Tahoma, sans-serif;
  font-size: 20px;
}
.box {
  position: fixed;
  z-index: -1;
  // background-image: url("../assets/header.png");
  border-bottom: solid white;
  background-color: #151515;
  background-size: cover;
  height: 49px;
  width: 100%;
  opacity: 0.85;
}
.topbar {
  margin: 12px 25vw;
  float: left;
  width: 100%;
  li {
    list-style-type: none;
    display: inline;
    display: inline-block;
    padding-left: 40px;
    color: white;
    cursor: pointer;
    :hover {
      color: #bdcdd8;
      opacity: 1;
      transform: scale(1.05);
    }
  }
}

#up {
  width: 25px;
  height: 25px;
  color: white;
  opacity: 0.9;
  z-index: 1;
  margin-bottom: -3px;
  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
}

.active {
  transform: scale(1.15);
}

.activeS {
  color: #bdcdd8;
}

.burger-menu-icon {
  background-color: white;
  border-radius: 15px 0px 0px 15px;
  border: 10px solid;
  border-color: white;
  width: 58px;
  height: 52px;
  position: fixed;
  display: flex;
  float: right;
  top: 80px;
  right: 0px;
  color: #151515;
  i {
    cursor: pointer;
    font-size: 40px;
    transition: 0.8s ease all;
    margin-top: -6px;
  }
  .i-active {
    transform: rotate(180deg);
    margin-bottom: -8px;
  }
}

.sidebar {
  text-decoration: none;
  position: absolute;
  padding-left: 30px;
  margin-top: -30px;
  cursor: pointer;
  ul {
    color: black;
    margin-left: -30px;
    padding-right: 20px;
    padding-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  li {
    padding-left: 20px;
    padding-top: 10px;
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: transform 0.5s ease;
  }
  .mobile-nav-enter,
  .mobile-nav-leave-to {
    transform: translateX(-100%);
    transition: all 500ms ease-in 0s;
  }
}
</style>
