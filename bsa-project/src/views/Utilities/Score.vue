<template>
  <v-container class="pt-16 mt-16">
    <div class="background-score"></div>
    <v-tabs centered dark class="mt-10">
      <v-tab dark>Rendimento de Naves</v-tab>
      <v-tab dark>Consumo das Naves</v-tab>

      <v-tab-item>
        <v-card dark>
          <v-data-table
            :headers="headers"
            :items="score"
            :search="search"
            :loading="isLoading"
            :items-per-page="50"
            loading-text="Carregando... Por favor aguarde"
            item-key="mint"
            :footer-props="{
              'items-per-page-options': [5, 15, 30, 50, 100],
              'items-per-page-text': 'Linhas por Página',
            }"
            no-results-text="Não foi encontrado nenhuma nave com este nome"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Filtre pelo nome da nave"
                      v-model="search"
                      append-icon="mdi-magnify"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:item.rendimentos.diario.liquido.atlas="{ item }">
              {{ item.rendimentos.diario.liquido.usdc.toFixed(2) }}
              <b>USDC</b> <br />
              {{ item.rendimentos.diario.liquido.atlas.toFixed(2) }}
              <b>ATLAS</b>
            </template>
            <template v-slot:item.rendimentos.semanal.liquido.atlas="{ item }">
              {{ item.rendimentos.semanal.liquido.usdc.toFixed(2) }}
              <b>USDC</b> <br />
              {{ item.rendimentos.semanal.liquido.atlas.toFixed(2) }}
              <b>ATLAS</b>
            </template>
            <template v-slot:item.rendimentos.mensal.liquido.atlas="{ item }">
              {{ item.rendimentos.mensal.liquido.usdc.toFixed(2) }}
              <b>USDC</b> <br />
              {{ item.rendimentos.mensal.liquido.atlas.toFixed(2) }}
              <b>ATLAS</b>
            </template>
            <template v-slot:no-data>
              <v-card flat>
                <v-card-text>
                  <p>Não foi possível adquirir dados de rendimentos score</p>
                </v-card-text>
              </v-card>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card dark>
          <v-data-table
            :headers="headersConsumo"
            :items="score"
            :search="search"
            :loading="isLoading"
            :items-per-page="50"
            loading-text="Carregando... Por favor aguarde"
            item-key="mint"
            :footer-props="{
              'items-per-page-options': [5, 15, 30, 50, 100],
              'items-per-page-text': 'Linhas por Página',
            }"
            no-results-text="Não foi encontrado nenhuma nave com este nome"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Filtre pelo nome da nave"
                      v-model="search"
                      append-icon="mdi-magnify"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:item.consumoRecursos.diario.ammo="{ item }">
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.diario.ammo }}
                  <b>AMMO</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.diario.food }}
                  <b>FOOD</b>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.diario.fuel }}
                  <b>FUEL</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.diario.tool }}
                  <b>TOOL</b>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.consumoRecursos.semanal.ammo="{ item }">
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.semanal.ammo }}
                  <b>AMMO</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.semanal.food }}
                  <b>FOOD</b>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.semanal.fuel }}
                  <b>FUEL</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.semanal.tool }}
                  <b>TOOL</b>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.consumoRecursos.mensal.ammo="{ item }">
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.mensal.ammo }}
                  <b>AMMO</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.mensal.food }}
                  <b>FOOD</b>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ item.consumoRecursos.mensal.fuel }}
                  <b>FUEL</b>
                </v-col>
                <v-col>
                  {{ item.consumoRecursos.mensal.tool }}
                  <b>TOOL</b>
                </v-col>
              </v-row>
            </template>
            <template v-slot:no-data>
              <v-card flat>
                <v-card-text>
                  <p>Não foi possível adquirir dados de rendimentos score</p>
                </v-card-text>
              </v-card>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      score: [],
      isLoading: true,
      search: "",
      headers: [
        {
          text: "Nave",
          value: "nave",
          class: "table-header",
        },
        {
          text: "VWAP",
          value: "vwap",
          class: "table-header",
          sortable: false
        },
        {
          text: "ROI Mensal",
          value: "roimensal",
          class: "table-header",
          sortable: false
        },
        {
          text: "ROI em Meses",
          value: "roimeses",
          class: "table-header",
          sortable: false
        },
        {
          text: "ROI Diário Líquido",
          value: "rendimentos.diario.liquido.atlas",
          class: "table-header",
          sortable: false
        },
        {
          text: "ROI Semanal Líquido",
          value: "rendimentos.semanal.liquido.atlas",
          class: "table-header",
          sortable: false
        },
        {
          text: "ROI Mensal Líquido",
          value: "rendimentos.mensal.liquido.atlas",
          class: "table-header",
          sortable: false
        },
      ],
      headersConsumo: [
        {
          text: "Nave",
          value: "nave",
          class: "table-header",
        },
        {
          text: "Consumo Diário",
          value: "consumoRecursos.diario.ammo",
          class: "table-header",
          divider: true,
        },
        {
          text: "Consumo Semanal",
          value: "consumoRecursos.semanal.ammo",
          class: "table-header",
          divider: true,
        },
        {
          text: "Consumo Mensal",
          value: "consumoRecursos.mensal.ammo",
          class: "table-header",
          divider: true,
        },
      ],
    };
  },
  created() {
    let url = 'https://app.brazilianstaratlas.com/?app=2&u=2&auth=00000000&task=getScoreRewards';
    fetch(url, { method: 'GET'})
    .then(resp => resp.json())
    .then(x => {
      this.score = x;
      this.isLoading = false;
    })
    .catch(erro => {
      this.isLoading = false;
      console.log(erro)
    })
  },
};
</script>

<style>
.background-score{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: url('../../assets/backgrounds/starAtlas.jpg') no-repeat center center;
    background-size: cover;
}
</style>