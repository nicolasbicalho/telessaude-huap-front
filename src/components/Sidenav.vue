<template>
  <aside class="sidenav">
    <img style="margin-bottom: 32px" src="../assets/logouff_vertical_azul.png" alt="" srcset="">
    <RouterLink to="/" class="sidenav-link">Home</RouterLink>
    <RouterLink to="/teleinterconsulta" class="sidenav-link">Teleinterconsulta</RouterLink>
  </aside>
</template>

<style scoped>
  .sidenav {
    width: 16rem;
    padding: 1rem;
    background-color: rgb(50, 50, 50);
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sidenav-link {
    text-decoration: none;
    color: white;
  }
</style>
