export default {
    //context:上下文，actions中的默认参数，理解成store对象
    aLogin(context, payload) {
        setTimeout(() => {
            context.commit('login')
            console.log(payload.message);
            payload.success();
        }, 1000)
    }
}//包含多个对应事件回调函数得对象，主要是异步操作