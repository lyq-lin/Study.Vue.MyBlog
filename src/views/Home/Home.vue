<template>
  <div class="home">
    <h2>Home</h2>

    <ul>
      <template v-for="article in ArticleStore.articles" :key="article.id">
        <li><a @click="getArticleById(article.id)"> {{ article.title }} </a></li>
      </template>
    </ul>

  </div>
</template>

<script setup>

import useArticles from "@/stores/useArticles";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const ArticleStore = useArticles()
const route = useRouter()


onMounted(() => {
  ArticleStore.getArticles()
})

function getArticleById(id) {

  route.push({
    path: `/article/${id}`
  })
}

</script>

<style></style>