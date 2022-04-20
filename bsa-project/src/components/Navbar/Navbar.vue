<template>
    <b-navbar toggleable="lg" type="dark" fixed="top" :id="alterNavbar ? 'background-navbar-scrolldown' : 'background-navbar'" :class="{'navbar--hidden': !showNavbar }">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mx-auto">
      <div class="navbar-container">
        <b-navbar-brand href="/#" id="navbar-logo-bsa">
          <img src="../../assets/logos/AF_BSA_logotipo.png" width="120em" alt="Logo BSA" />
        </b-navbar-brand>
        <div class="navbar-item">
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="/#">ALISTE-SE</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="/#bsa">BSA</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="/#estatuto">ESTATUTO DA BSA</v-btn></li>
          <li class="nav-item px-5 nav-link">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text dark rounded large
                  class="nav-button"
                  v-bind="attrs"
                  v-on="on"
                >
                  Utilidades
                </v-btn>
              </template>
              <v-list dark>
                <v-list-item
                  v-for="(item, index) in utilsList"
                  :key="index"
                  :href="item.path"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="/#contatos">CONTATOS</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="https://forum.brazilianstaratlas.com/" target="_blank">FÓRUM</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="https://app.brazilianstaratlas.com/" target="_blank">LOGIN</v-btn></li>
        </div>
        </div>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  data(){
    return{
      showNavbar: true,
      alterNavbar: false,
      lastScrollPosition: 0,
      utilsList: [
        { title: 'Rendimentos Score', path: '/score' },
      ]
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        this.alterNavbar = false;
        return
      }

      if(window.innerWidth <= 992){
        this.showNavbar = true;
        this.lastScrollPosition = currentScrollPosition
        return
      }

      // if(currentScrollPosition >= 100){
      //   this.alterNavbar = true;
      // }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 40) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted () {
  window.addEventListener('scroll', this.onScroll)
},
  beforeDestroy () {
  window.removeEventListener('scroll', this.onScroll)
}
};
</script>

<style>
#background-navbar {
  --bs-bg-opacity: 1;
  background: linear-gradient(rgba(6, 7, 40), rgba(6, 7, 40, 0.355)) !important; /* #0000007e #00000050*/
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
  padding: 1.5rem 0;
}
.navbar--hidden {
  transform: translate3d(0, -100%, 0) !important;
}

#background-navbar-scrolldown{
  transition: 0.2s all ease-out;
  background: linear-gradient(rgba(6, 7, 40), rgba(6, 7, 40, 0.355)) !important;
  padding: 1.5rem 0;
}

.nav-button {
  color: white;
  font-family: evolve-sans-bold;
}

.nav-button:hover {
  color: rgba(255, 255, 255, 0.514);
}

.navbar-container {
  display: flex;
  margin: 0 auto;
}

.navbar-item {
  display: flex;
  margin: auto;
  list-style: none;
}

@media (max-width: 991px){
  #background-navbar {
    background-color: #000000a2 !important;
  }

  .navbar-item {
    display: unset;
    margin: unset;
  }

  #navbar-logo-bsa {
    display: none;
  }
}
</style>