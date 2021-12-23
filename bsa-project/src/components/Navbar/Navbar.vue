<template>
    <b-navbar toggleable="lg" type="dark" fixed="top" id="background-navbar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mx-auto">
      <div class="navbar-container">
        <b-navbar-brand href="#" id="navbar-logo-bsa">
          <img src="../../assets/logos/AF_BSA_logotipo.png" width="120em" alt="Logo BSA" />
        </b-navbar-brand>
        <div class="navbar-item">
          <b-nav-item class="px-5" href="#"><span class="nav-button">BSA</span></b-nav-item>
          <b-nav-item class="px-5" href="#"><span class="nav-button">ALISTE-SE</span></b-nav-item>
          <b-nav-item class="px-5" href="#"><span class="nav-button">ESTATUTO DA BSA</span></b-nav-item>
          <b-nav-item class="px-5" href="#"><span class="nav-button">CONTATOS</span></b-nav-item>
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
  background-color: #0000007e !important;
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
  .navbar-item {
    display: unset;
    margin: unset;
  }

  #navbar-logo-bsa {
    display: none;
  }
}
</style>