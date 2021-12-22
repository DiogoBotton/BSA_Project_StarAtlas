<template>
    <b-navbar toggleable="lg" type="dark" fixed="top" id="background-transparent">
      <b-navbar-brand href="#" id="logo-navbar">
        <img src="../../assets/logos/logo-ft.png" width="70em" alt="Logo BSA" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mx-auto">
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="px-5" href="#">Button</b-nav-item>
          <b-nav-item class="px-5" href="#">Button</b-nav-item>
          <b-nav-item class="px-5" href="#">Button</b-nav-item>
          <b-nav-item class="px-5" href="#">Button</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style>
#background-transparent {
  --bs-bg-opacity: 1;
  background-color: #0000007e !important;
}

@media (max-width: 992px) {
  #logo-navbar {
    display: none;
  }
}
</style>