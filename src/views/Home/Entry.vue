<template>
    <div class="noselect" id="Entry-c">
      <!-- <img src="../../assets/background.jpg" style="z-index:10;" width="100%" height="133%" />; -->
      <vue-particles color="#4BD0A8" style="height:100vh;z-index:100;"></vue-particles>
      <b><p id="typedtext" /></b>
    </div>
</template>

<script>
  export default {
    name: "Entry-c",
    data: () => ({

    }),
    methods: {

    }
  }
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
#Entry-c {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(../../assets/background.jpg);
  //background-image: url("../../assets/background.jpg");
  background-size: cover;
}
#typedtext {
  position: absolute;
  left: 30vw;
  top: 40vh;
  opacity: 0.6;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 80px;
}

@media (max-width: 1264px) {
  #typedtext {
    font-size: 60px;
  }
}
@media (max-width: 1000px) {
  #typedtext {
    font-size: 50px;
  }
}
@media (max-width: 600px) {
  #typedtext {
    left: 15vw;
  }
}
@media (max-width: 400px) {
  #typedtext {
    top: 40vh;
    font-size: 40px;
    left: 4vw;
  }
}
@media screen and (orientation:landscape) and (max-width: 850px) and (max-height: 450px)  {
  #typedtext {
    left: 25vw;
  }
}
</style>