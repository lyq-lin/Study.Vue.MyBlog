import axios from "axios";
import { defineStore } from "pinia";
import jwt_decode from "jwt-decode"

const useUser = defineStore("user", {
    state: () => ({
        user: ({
            userid: "",
            username: ""
        })
    }),

    actions: {
        async login(loginData) {
            await axios.post('https://localhost:7239/api/Authorize/Login/Login', {
                userName: loginData.username,
                userPwd: loginData.password
            }).then(res => {
                if (res.data.code == 200) { //响应成功
                    const jwtPayload = res.data.data
                    localStorage.setItem("jwtToken", jwtPayload)

                    //解析jwt
                    const decodeJwt = jwt_decode(jwtPayload)
                    this.$state.user.userid = decodeJwt["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
                    this.$state.user.username = decodeJwt["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

                } else if (res.data.code == 500) {
                    //响应失败
                    alert(res.data.message)
                }
            })
        }
    }
})

export default useUser