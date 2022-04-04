<template>
  <div>
    <video-background
      :src="require('@/assets/backgrounds/bgv5.mp4')"
      style="max-height: 100%; height: 98vh"
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
          <v-btn
            elevation="1"
            rounded
            outlined
            dark
            x-large
            href="https://discord.com/invite/JhB7jNCqzU"
            target="_blank"
          >
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
    <section id="bsa">
      <v-parallax dark src="../../assets/backgrounds/l4.jpg" id="bsa_sobre">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h3 class="text-center mt-10 pb-5">
              Sobre a BSA (Brazilian Star Atlas Alliance)
            </h3>
            <p>
              A BSA Brazilian Star Atlas Alliance teve seu início em Setembro de
              2021 reunindo os entusiastas e grandes investidores de STAR ATLAS
              no Brasil. Somos uma guilda onde você encontrará abrigo,
              descontração e respeito e acima de tudo um grupo focado no sucesso
              financeiro no mundo Blockchain e play-to-earn, com objetivo de
              orientar e dar suporte nos vários caminhos que o mundo novo do
              Metaverso oferece aos seus membros. A BSA é uma DAC (guilda)
              formada por pessoas de várias nacionalidades e que hoje traz uma
              força extraordinária dentro do Star Atlas para todos os povos que
              desejam fazer parte dessa família, seja você terreno ou não, você
              fará parte dessa jornada de conquistas.
            </p>
            <p>
              Já somos mais de 7.000 membros organizados em nosso DISCORD! A BSA
              tem uma das maiores frotas do jogo com naves de todos os
              segmentos, raridades e possuímos alianças com as principais
              organizações do Metaverso STAR ATLAS! Estamos prontos não somente
              para proteger você! Te levaremos além! Embarque com a BSA nas
              explorações espaciais em busca de novos mundos, novas
              oportunidades de ganhos e diversão! Se você já possui uma frota
              forte ou apenas uma X4! É um investidor procurando uma DAC com
              capacidade de escalar seus ganhos ou se você procura uma forma de
              entrar nesse metaverso e ainda não tem recursos, a BSA é o seu
              lugar!
            </p>
          </v-col>
        </v-row>
      </v-parallax>
    </section>

    <section id="estatuto">
      <v-sheet dark id="border-outlined">
        <v-container class="pb-10 text-center">
          <h3 class="text-center mt-10 pb-5">Estatuto da BSA</h3>
          <v-row>
            <p class="card-text">
              Leia e esteja bem familiarizado com o Estatuto da BSA, pois este é
              soberano e deve ser observado para que as propostas de OMDs sejam
              coerentes com o objetivo da DAC BSA, em sua missão de inclusão e
              favorecimento a todos os seus membros sem distinção.
            </p>
            <v-col>
              <v-btn
                class="default-button"
                text
                outlined
                target="_blank"
                href="./files/ESTATUTO_BSA.pdf"
              >
                Download
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
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
  methods: {
    downloadEstatutoBsa() {
      // OBS: Para funcionar, necessário deixar o arquivo na mesma pasta onde o arquivo index.html se encontra, normalmente na pasta "public"
      fetch("./files/ESTATUTO_BSA.pdf").then(async (result) => {
        const blob = await result.blob();
        console.log(blob)
        const anchor = window.document.createElement("a");

        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = "ESTATUTO_BSA.pdf";
        anchor.click();
        window.URL.revokeObjectURL(anchor.href);
      });
    },
  },
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

@media (max-width: 992px) {
  #card-responsive {
    max-width: 30vh;
  }
  #card-image {
    height: 100px;
  }
  #bsa_sobre {
    height: 800px !important;
  }
}
</style>