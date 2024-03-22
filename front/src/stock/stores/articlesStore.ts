import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Article, type NewArticle } from '../interfaces/Article'
import { api } from '../api'

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
  // Jean-Louis préfère la fonction fléchée avec const pour mieux
  // savoir qui est le this : si fléchée, le this est égal au this
  // à l'extérieur de la fonction ; sinon, on doit var self = this
  const refresh = async () => {
    articles.value = await api.getArticles()
  }

  const add = async (newArticle: NewArticle) => {
    await api.add(newArticle)
    if (articles.value === undefined) {
      throw new Error('Cannot add articles if not refreshed first')
    }
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
