<template>
    <b-navbar toggleable="lg" type="dark" fixed="top" id="background-navbar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mx-auto">
      <div class="navbar-container">
        <b-navbar-brand href="#" id="navbar-logo-bsa">
          <img src="../../assets/logos/AF_BSA_logotipo.png" width="120em" alt="Logo BSA" />
        </b-navbar-brand>
        <div class="navbar-item">
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="#">BSA</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="#">ALISTE-SE</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="#estatuto">ESTATUTO DA BSA</v-btn></li>
          <li class="nav-item px-5 nav-link"><v-btn text dark rounded large class="nav-button" href="#contatos">CONTATOS</v-btn></li>
        </div>
        </div>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style>
#background-navbar {
  --bs-bg-opacity: 1;
  background-color: #00000050 !important;
  /* #0000007e */
}
*a {
  text-decoration: none;
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

@media (max-width: 922px){
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