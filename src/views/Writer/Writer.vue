<template>
    <div class="write">
        <h2>write</h2>

        <h2>请输入标题: <input type="text" v-model="articleData.title"></h2>

        <h2>请输入类型(typeId): <input type="text" v-model="articleData.typeId"></h2>

        <MdEditor v-model="articleData.content" :on-save="CreateArticle" />
    </div>
</template>

<script setup>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useWriter from '@/stores/useWriter'

const articleData = reactive({
    title: '',
    content: '',
    typeId: ''
})

const ArticleStore = useWriter()

const router = useRouter()


function CreateArticle() {
    //1. 调用pinia里的action，发送请求
    ArticleStore.CreateArticle(articleData)

    
    //2. 跳转页面
    router.push({
        path: "/"
    })
}


</script>

<style scoped></style>