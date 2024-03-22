<script setup lang="ts">
import { faPlus, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <main><h1>Liste des articles</h1></main>
  <section class="content">
    <nav>
      <button title="Rafraîchir">
        <FontAwesomeIcon :icon="faRefresh" />
      </button>
      <RouterLink to="" class="button" title="Ajouter"
        ><FontAwesomeIcon :icon="faPlus"
      /></RouterLink>
      <button title="Supprimer">
        <FontAwesomeIcon :icon="faTrash" />
      </button>
      <div class="error"></div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <thbody>
          <tr>
            <th class="name">Tournevis</th>
            <th class="price">2.56 E</th>
            <th class="qty">143</th>
          </tr>
          <tr>
            <th class="name">Scie</th>
            <th class="price">52.56 E</th>
            <th class="qty">13</th>
          </tr>
          <tr>
            <th class="name">Marteau</th>
            <th class="price">12.56 E</th>
            <th class="qty">1432</th>
          </tr>
        </thbody>
      </table>
    </nav>
  </section>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.25em;
}

div.error {
  height: 2em;
}

table {
  border: 0.1em solid #aaa;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;

  thhead {
    background: #aaa;
  }

  th,
  td {
    padding: 0.5em 1em;
    overflow: hidden;
  }

  tbody {
    cursor: pointer;

    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }
  }
}
</style>
