import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import TypeIt from "typeit";

Vue.config.productionTip = false

// ADDED
// Animate on scroll (text)
import AOS from 'aos' // see index.html
Vue.use(AOS); // see index.html
// scroll anchor
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);
// hover animation library
import VueKinesis from 'vue-kinesis';
Vue.use(VueKinesis)
// particles library
import VueParticles from 'vue-particles';
Vue.use(VueParticles)
// Copy to clipboard
// import VueClipboards from 'vue-clipboards'
// Vue.use(VueClipboards)

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faVolumeHigh, faVolumeXmark, faChevronUp, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXingSquare, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faEnvelope, faGithub, faVolumeHigh, faLinkedin, faXingSquare, faInstagram, faVolumeXmark, faChevronUp, faBars, faPaperPlane)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// END ADDED

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

new TypeIt("#typedtext", {
  speed: 80,
  lifeLike: true,
  loop: true,
  cursor: false
}).go()
  .type("&nbsp;&nbsp;&nbsp;Data Analysis")
  .pause(3000)
  .delete(20, { deleteSpeed: 150 })
  .pause(2000)
  .type("Machine Learning", {speed: 300})
  .pause(3000)
  .delete(20, { deleteSpeed: 150 })
  .pause(1500)
  .type("Cloud Integration", {speed: 150})
  .pause(3000)
  .delete(25, { deleteSpeed: 150 })
  .pause(1500)
  .type("&nbsp;&nbsp;&nbsp;&nbsp;Webdesign", {speed: 150})
  .pause(3000)
  .delete(20, { deleteSpeed: 150 })
  .go();