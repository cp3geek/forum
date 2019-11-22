import axios from "axios";
import Qs from "qs";

export const adminLogin = (username, password) => {
    return axios.post(
        "http://localhost:9090/loginbackstage",
        Qs.stringify({ username, password })
    );
};
