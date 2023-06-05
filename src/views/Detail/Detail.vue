<template>
  <div class="detail">
    <h2>article</h2>

    <h1>标题：{{ articleData.title }}</h1>

    <div v-html="articleData.content">

    </div>

  </div>
</template>

<script setup>
import useArticles from "@/stores/useArticles";
import { toRef } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const ArticleStore = useArticles()

const articleData = toRef(ArticleStore.getArticleById(route.params.articleId))
</script>

<style></style>