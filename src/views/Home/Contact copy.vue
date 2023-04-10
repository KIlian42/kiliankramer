<template>
  <v-app id="Contact-c">
    <v-container fill-height fluid>
      <v-layout row justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <center>
            <div id="box">
              <div id="inner">
                <h2>Message:</h2>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    dark
                    autocomplete
                    v-model="name"
                    :counter="100"
                    :rules="nameRules"
                    label="Your name"
                    required
                  ></v-text-field>

                  <v-text-field
                    dark
                    autocomplete
                    v-model="email"
                    :counter="100"
                    :rules="emailRules"
                    label="Your e-mail"
                    required
                  ></v-text-field>

                  <v-textarea
                    dark
                    autocomplete
                    :counter="1000"
                    label="Your message"
                  ></v-textarea>
                  <br />
                  <v-btn class="mr-4" width="100%" height="50px" @click="submit">Send&nbsp;<font-awesome-icon icon="fa-solid fa-paper-plane" /></v-btn>
                </v-form>
                <br />
                <a href="mailto:kiliankramer16@gmail.com">Send e-mail via mailbox</a>
              </div>
            </div>
          </center>
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
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
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
  height: 520px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

#inner {
  padding: 10%;
}

h2 {
  margin-top: -10%;
  font-size: 30px;
  color: white;
  opacity: 0.8;
}

.v-btn {
  border-radius: 20px;
}

a:link {
  color: #1DC4D0;
  font-size: 17px;
  text-decoration: none;
  pointer: cursor;
  &:hover {
    text-decoration: underline !important;
  }
}

// ::v-deep .v-textarea textarea {
//    border-color: white;
//   opacity: 0.5;
// }
// ::v-deep .v-text-field text-field {
//   border-color: rgba(192, 0, 250, 0.986);
// }
</style>
