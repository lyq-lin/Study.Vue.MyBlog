import axios from "axios";
import { defineStore } from "pinia";

const useArticles = defineStore("Articles", {
    state: () => ({
        articles: []
    }),
    getters: {
        getArticleById(state) {
            return ArticleId => {
                return state.articles.find(item => item.id === ArticleId)
            }
        }
    },
    actions: {
        getArticles() {
            //配置请求头携带Jwt
            axios.interceptors.request.use(config => {

                const token = localStorage.getItem("jwtToken")

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }

                return config
            })

            axios.get('https://localhost:7239/api/Article/GetArticles/Articles').then(res => {
                this.articles = res.data.data
            })
        }
    }
})

export default useArticles