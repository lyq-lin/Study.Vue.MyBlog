import axios from "axios";
import { defineStore } from "pinia";

const useWriter = defineStore("Writer", {
    state: () => ({
        writer: ({
            title: '',
            content: '',
            typeId: ''
        })
    }),
    actions: {
        CreateArticle(article) {
            this.writer = article

            //发送请求创建文章
            axios.post('https://localhost:7239/api/Article/CreateArticle/Create', {
                title: article.title,
                content: article.content,
                typeId: article.typeId
            }).then(res => {
                if (res.data.code == 200) {
                    //跳转页面
                    alert("创建成功")

                } else if (res.data.code == 500) {
                    alert(res.data.message)
                }
            })

        }
    }
})

export default useWriter