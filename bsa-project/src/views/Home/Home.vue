<template>
  <div>
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
    <section id="contatos">
      <v-sheet dark id="border-outlined">
        <v-container>
          <h3 class="text-center mt-10 pb-5">Contatos da BSA</h3>
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
          <p class="text-center">
            Siga nossas redes sociais para ficar ligado à todas as novidades!
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
    <section id="contatos">
      <v-sheet dark id="border-outlined">
        <v-container>
          <h3 class="text-center mt-10 pb-5">OMD's da BSA</h3>
          <v-row class="text-center">
            <v-col>
              <p>logo</p>
              <p>SAS</p>
            </v-col>
            <v-col>
              <p>logo</p>
              <p>SAB</p>
            </v-col>
            <v-col>
              <p>logo</p>
              <p>MAB</p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>
    <section id="estatuto">
      <v-parallax src="../../assets/backgrounds/l4.jpg" height="600">
        <v-container class="pb-10 text-center">
          <h3 class="text-center mt-10 pb-5">Estatuto da BSA</h3>
          <v-row align="row">
            <v-card
              class="mx-auto pt-2"
              id="card-responsive"
              dark
              color="rgb(255, 255, 255, 0.2)"
            >
              <v-img
                class="white--text align-end"
                id="card-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png"
              >
              </v-img>

              <v-card-text class="white--text">
                <p>Estatuto em Português</p>

                <p class="card-text">
                  Leia e esteja bem familiarizado com o ESTATUTO BSA, pois este
                  é soberano e deve ser observado para que as propostas de OMDs
                  sejam coerentes com o objetivo da DAC BSA, em sua missão de
                  inclusão e favorecimento a todos os seus membros sem
                  distinção.
                </p>
              </v-card-text>

              <v-card-actions>
                <v-btn class="default-button flex" text outlined>
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card
              class="mx-auto pt-2"
              id="card-responsive"
              dark
              color="rgb(255, 255, 255, 0.2)"
            >
              <v-img
                class="white--text align-end"
                id="card-image"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              >
              </v-img>

              <v-card-text class="white--text">
                <p>Statute in English</p>

                <p class="card-text">
                  Read and be well acquainted with the BSA STATUTE, as this is
                  sovereign and must be observed so that the OMD proposals are
                  coherent with the objective of DAC BSA, in its mission of
                  inclusion and favoring of all its members without distinction.
                </p>
              </v-card-text>

              <v-card-actions>
                <v-btn class="default-button flex" text outlined>
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <video-background
      :src="require('@/assets/backgrounds/bgv5.mp4')"
      style="max-height: 100%; height: 50vh"
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
#card-responsive {
  max-width: 400px;
}
#card-image {
  height: 200px;
}

@media (max-width: 992px){
  #card-responsive{
    max-width: 20vh;
  }
  #card-image {
    height: 100px;
  }
  .card-text{
    display: none;
  }
}
</style>