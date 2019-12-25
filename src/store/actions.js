import { getPageMain } from "@/api"

export default {
    //context:上下文，actions中的默认参数，理解成store对象
    aLogin(context, payload) {
        setTimeout(() => {
            context.commit('login')
            console.log(payload.message);
            payload.success();
        }, 1000)
    },



    getpagemain(context) {
        getPageMain().then(res => {
            context.commit('getpagemain', {
                info: res.data.content,
                totalElements: res.data.totalElements
            }

            )
        }).catch()
    },

    changepage(context, number) {
        getPageMain(number).then(res => {
            context.commit('getpagemain', {
                info: res.data.content
            })
        }).catch()
    },






}//包含多个对应事件回调函数得对象，主要是异步操作