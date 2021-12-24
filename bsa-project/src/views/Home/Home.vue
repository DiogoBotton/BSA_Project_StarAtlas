<template>
  <div>
    <section id="home">
      <video-background
        :src="require('@/assets/backgrounds/bgv5.mp4')"
        style="max-height: 100%; height: 80vh"
        overlay="linear-gradient(45deg,#2a4ae430,#00168150)"
      >
        <v-container style="margin: auto">
          <div class="text-center ml-2">
            <h3>Já somos mais de 7 mil membros!</h3>
            <h3>Venha fazer parte da maior Guilda do Star Atlas</h3>
          </div>
          <div class="text-center mt-10 pb-16">
            <img src="../../assets/logos/AF_BSA_logotipo.png" width="350em" />
          </div>
          <div class="text-center">
            <v-btn elevation="1" rounded outlined dark x-large>
              <span class="font-button">ALISTE-SE JÁ</span>
            </v-btn>
          </div>
        </v-container>
      </video-background>
    </section>
    <section id="contatos">
      <v-sheet dark id="border-outlined">
        <v-container>
          <h3 class="text-center mt-10 pb-10">Contatos da BSA</h3>
          <v-row justify="center pb-10">
            <v-btn
              class="mx-4 white--text"
              icon
              href="https://twitter.com/BSAatlas"
              target="_blank"
            >
              <v-icon size="24px"> mdi-twitter </v-icon>
            </v-btn>
            <v-btn
              class="mx-4 white--text"
              icon
              href="https://www.youtube.com/channel/UCu8iE6e6nlp8eOajYFLJC8Q"
              target="_blank"
            >
              <v-icon size="24px"> mdi-youtube </v-icon>
            </v-btn>
            <v-btn
              class="mx-4 white--text"
              icon
              href="https://www.instagram.com/brazilianstaratlasalliance/"
              target="_blank"
            >
              <v-icon size="24px"> mdi-instagram </v-icon>
            </v-btn>
            <v-btn
              class="mx-4 white--text"
              icon
              href="https://discord.com/invite/JhB7jNCqzU"
              target="_blank"
            >
              <v-icon size="24px"> mdi-discord </v-icon>
            </v-btn>
          </v-row>
          <p>
            Sejam muito bem vindos(as) à Brazilian StarAtlas Alliance !!! É com
            um imenso prazer que vos recebemos aqui para formarmos a MAIOR
            ALIANÇA BRASILEIRA no StarAtlas para que possamos também disputar
            entre os maiores do metaverso! -> Estamos convidando à todos para
            utilizar a tag da guilda [BSA] no seu nick não somente aqui no nosso
            discord, mas também principalmente no discord global do StarAtlas,
            para mostrar a nossa força, organização e coalisão por lá !
          </p>
        </v-container>
      </v-sheet>
    </section>
    <v-parallax dark src="../../assets/backgrounds/starAtlas.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <p>
            Sejam muito bem vindos(as) à Brazilian StarAtlas Alliance !!! É com
            um imenso prazer que vos recebemos aqui para formarmos a MAIOR
            ALIANÇA BRASILEIRA no StarAtlas para que possamos também disputar
            entre os maiores do metaverso! -> Estamos convidando à todos para
            utilizar a tag da guilda [BSA] no seu nick não somente aqui no nosso
            discord, mas também principalmente no discord global do StarAtlas,
            para mostrar a nossa força, organização e coalisão por lá !
          </p>
        </v-col>
      </v-row>
    </v-parallax>
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
export default {
  components: {},
};
</script>

<style>
.videobg-content {
  display: flex;
}
#border-outlined {
  border-top: thin solid rgba(255, 255, 255, 0.12);
  border-bottom: thin solid rgba(255, 255, 255, 0.12);
}
</style>