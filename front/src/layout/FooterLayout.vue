<template>
  <footer><RouterLink to="/legal">Mentions légales</RouterLink></footer>
</template>

<style scoped>
footer {
  background: #eee;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
