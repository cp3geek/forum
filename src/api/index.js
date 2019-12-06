import axios from "axios";
import Qs from "qs";


//全局默认配置
axios.defaults.baseURL = "http://localhost:9090";

//post传数据用data，get传参数用params
export const adminLogin = (username, password) => {
    return axios.post(
        "/loginbackstage",
        Qs.stringify({ username, password })
    );
};

export const userLogin = (email, password) => {
    return axios.post(
        "http://localhost:9090/userlogin",
        Qs.stringify({ email, password })
    );
};

export const getAllArticle = () => {
    return axios.post(
        "/getallarticle"
    );
};

