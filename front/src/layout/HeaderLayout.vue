<template>
  <header>
    <a href="#">
      <!-- // Logo.svg : needs to add / so we know we start from the top for pathing -->
      <img src="/logo.svg" alt="logo" />
      <span>Gestion Stock</span>
    </a>
  </header>
</template>

<style scoped>
header {
  background: #eee;
  height: 3em;
  padding: 0, 0.5em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    /* IMPORTANT : inherit help harmonize*/
    color: inherit;
    text-decoration: inherit;

    /* & hover évite d'avoir à redéclarer */
    &:hover {
      text-decoration: underline;
    }

    span {
      font-weight: bold;
      font-size: 1.3em;
    }
  }
}
img {
  height: 2.5em;
}
</style>
