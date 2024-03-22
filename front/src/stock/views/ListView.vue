<script setup lang="ts">
import { faCircleNotch, faPlus, faRotateRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import { type Article } from '../interfaces/Article'
import { useArticleStore } from '../stores/articlesStore'

const articleStore = useArticleStore()
const errorMsg = ref('')
const isRefreshing = ref(false)
const selectedArticles = ref<Set<Article['id']>>(new Set())

const handleRemove = () => {
  // Pour convertir un ensemble en tableau, le spread operator suffit
  articleStore.remove([...selectedArticles.value])
}

const handleRefresh = async () => {
  try {
    errorMsg.value = ''
    isRefreshing.value = true
    await articleStore.refresh()
  } catch (err) {
    errorMsg.value = 'Oups... Erreur technique'
  }
  isRefreshing.value = false
}
const handleSelect = (a: Article) => {
  console.log(a)
  if (selectedArticles.value.has(a.id)) {
    selectedArticles.value.delete(a.id)
    return
  }
  selectedArticles.value.add(a.id)
}

// On passe une fonction en argument de onMounted
onMounted(() => {
  try {
    console.log('onMounted, onMountain')

    if (articleStore.articles === undefined) {
      articleStore.refresh()
    }
  } catch (err) {
    console.log('Hélas, ça plantouille')
  }
})
</script>
<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir" @click="handleRefresh">
          <FontAwesomeIcon
            :spin="isRefreshing"
            :icon="isRefreshing ? faRotateRight : faCircleNotch"
          />
        </button>
        <RouterLink to="/stock/add" class="button" title="Ajouter">
          <FontAwesomeIcon :icon="faPlus" />
        </RouterLink>
        <!-- Niveau performance, mieux vaut cacher un élément que le reconstruire de zéro -->
        <button title="Supprimer" :hidden="selectedArticles.size === 0" @click="handleRemove()">
          <FontAwesomeIcon :icon="faTrashAlt" />
        </button>
      </nav>
      <div class="error">{{ errorMsg }}</div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articleStore.articles"
            :key="a.id"
            @click="handleSelect(a)"
            :class="{ selected: selectedArticles.has(a.id) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.25em;
}

div.error {
  height: 2em;
  font-weight: bold;
}

table {
  border: 0.1em solid #aaa;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;
  overflow: hidden;

  thead {
    background: #aaa;
  }

  th,
  td {
    padding: 0.5em 1em;
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
