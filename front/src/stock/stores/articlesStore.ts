import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Article, type NewArticle } from '../interfaces/Article'

export const useArticleStore = defineStore('articleStore', () => {
  // Ci-dessous, je dis à ref que le type est soit Article[], soit undefined
  // Je dois mettre undefined pour distinguer du moment où je suis allé dans le
  // backend et où j'ai trouvé un tableau vide.
  const articles = ref<Article[] | undefined>(undefined)
  // Les computed aident à la performance
  const articleTotal = computed(() => {
    if (articles.value === undefined) {
      return 0
    }
    return articles.value.length
  })
  const refresh = () => {
    // Jean-Louis préfère la fonction fléchée avec const pour mieux
    // savoir qui est le this : si fléchée, le this est égal au this
    // à l'extérieur de la fonction ; sinon, on doit var self = this
    articles.value = [
      { id: 'a1', name: 'Marteau', price: 122, qty: 102 },
      { id: 'a2', name: 'Tournevis', price: 112, qty: 102 },
      { id: 'a3', name: 'Pelle', price: 152, qty: 54 }
    ]
  }

  const add = (newArticle: NewArticle) => {
    console.log('Adding article')
    if (articles.value === undefined) {
      throw new Error('Cannot add articles if not refreshed first')
    }
    articles.value.push({ ...newArticle, id: window.crypto.randomUUID() })
  }

  // On peut mettre ids: string[] ou ids: Article['id'][], qui aura aussi la
  // valeur string
  const remove = (ids: string[]) => {
    console.log('Removed article')

    if (articles.value === undefined) {
      throw new Error('Cannot remove article if not refreshed first')
    }
    articles.value = articles.value.filter((a) => !ids.includes(a.id))
  }
  return { articles, articleTotal, refresh, add, remove }
})
