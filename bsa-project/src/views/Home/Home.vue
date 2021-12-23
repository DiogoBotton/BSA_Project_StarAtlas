<template>
  <div>
    <video-background
      :src="require('@/assets/backgrounds/bgv5.mp4')"
      style="max-height: 100%; height: 80vh"
      overlay="linear-gradient(45deg,#2a4ae430,#00168150)"
    >
      <div style="margin: auto">
        <div class="text-center ml-2">
          <h3>Já somos mais de 7 mil membros!</h3>
          <h3>Venha fazer parte da maior Guilda do Star Atlas</h3>
        </div>
        <div class="text-center">
          <img src="../../assets/logos/AF_BSA_logotipo.png" width="350em" />
        </div>
        <div class="text-center pt-15 mt-2">
          <v-btn elevation="1" rounded outlined dark x-large>
            <span class="font-button">ALISTE-SE JÁ</span>
          </v-btn>
        </div>
      </div>
    </video-background>
    <Banner />
    <video-background
      :src="require('@/assets/backgrounds/bgv5.mp4')"
      style="max-height: 100%; height: 80vh"
      overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <img src="../../assets/logos/AF_BSA_logotipo.png" width="350em" />
        </v-col>
      </v-row>
    </video-background>
  </div>
</template>

<script>
import Banner from "../../components/Banner/Banner.vue";

export default {
  components: {
    Banner,
  },
};
</script>

<style>
.videobg-content {
  display: flex;
}
</style>