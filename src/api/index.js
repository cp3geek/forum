import axios from "axios";
import Qs from "qs";
import { SnackbarProgrammatic as Snackbar } from 'buefy'

//全局默认配置
axios.defaults.baseURL = "http://localhost:9090";
// axios.interceptors.request.use(
//     config => {
//         console.log(config);
//         return config;
//     },
//     err => {
//         console.log(err);
//     }
// );请求拦截
axios.defaults.withCredentials = true //请求发送cookie


axios.interceptors.response.use(res => {
    return res;
}, () => {
    Snackbar.open({
        message: '服务器被吃了',
        type: 'is-warning',
        position: 'is-top',
        actionText: 'Retry',
        indefinite: true,
        onAction: () => {
            this.$buefy.toast.open({
                message: 'Action pressed',
                queue: false
            })
        }
    })
})

//post传数据用data，get传参数用params
export const adminLogin = (username, password) => {
    return axios.post("/loginbackstage", Qs.stringify({ username, password }));
};

export const userLogin = (email, password) => {
    return axios.post(
        "http://localhost:9090/userlogin",
        Qs.stringify({ email, password })
    );
};

export const getAllArticle = (page) => {
    return axios.post("/pagearticle", Qs.stringify({ page }));
};

export const getAllArticleType = () => {
    return axios.post("/getallarticletype");
};

export const getArticleByTypeId = typeId => {
    return axios.post("/getarticlebytypeid", Qs.stringify({ typeId }));
};

export const getHotArticleType = () => {
    return axios.post("/gethotarticletype");
};

export const getPageMain = pageNum => {
    return axios({
        url: "/getpagearticle",
        params: {
            page: pageNum
        }
    })
};
export const getnew = () => {
    return axios("/getnew")
};

export const gethotuser = () => {
    return axios("/hotuser")
};
export const register = (userName, userPassword, userShow, userEmail, userPhone, userSex) => {

    return axios.post("/register", Qs.stringify({ userName, userPassword, userShow, userEmail, userPhone, userSex }))

};
export const getcomment = (artId) => {
    return axios.post("/getComment", Qs.stringify({ artId }))
};
export const newcomment = (comArtId, text, comUserId) => {
    return axios.post("/postcomment", Qs.stringify({ comArtId, text, comUserId }))
};
export const newpost = (userId, title, text, select) => {
    return axios.post("/newpost", Qs.stringify({ userId, title, text, select }))
}

export const findartbyuserid = (userId) => {
    return axios.post("/findartbyuserid", Qs.stringify({ userId }))
}


