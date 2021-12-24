<template>
  <v-app>
    <Navbar />

    <v-main class="dark-background-color">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: evolve-sans-bold;
  src: url(./assets/fonts/MADEEvolveSansBold.otf);
}
@font-face {
  font-family: evolve-sans-light;
  src: url(./assets/fonts/MADEEvolveSansLight.otf);
}
@font-face {
  font-family: cinzel-decorative-regular;
  src: url(./assets/fonts/CinzelDecorative-Regular.otf);
}
p {
  font-family: evolve-sans-light;
  font-size: larger;
  text-shadow: 0.1em 0.1em 0.2em black;
}
h3 {
  font-family: cinzel-decorative-regular;
  color: white;
  text-shadow: 0.1em 0.1em 0.2em black;
}
.font-button {
  font-family: evolve-sans-light;
  font-size: larger;
}
li {
  text-decoration: none;
}
.default-button {
  color: white;
  font-family: evolve-sans-bold;
}
/* Colors */
.dark-background-color {
  background: #2b2b2b;
}
</style>
