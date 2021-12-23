<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';

export default {
  name: 'App',

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
li {
  text-decoration: none;
}
</style>
