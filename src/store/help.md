如果是父子组件，则状态管理不需要用vuex，只需通过props，父组件向子组件传值即可


例如父组件中
`<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="counter++"></button>
        <button @click="counter--"></button>
        <son :counter="counter"/> ：绑定，不能去掉，去掉之后传的是字符串，在这里传递的是变量，前面的counter是子组件的变量名，后面是父组件中传递的变量名
    </div>
</template>`

`<script>
import son from '/son.vue'
export default{
    components:{
        son
    },
    data(){
        return{
            counter:0
        }
    }
}
</script>`

子组件中
`<template>
    <div>
        <h2>{{counter}}</h2>
    </div>
</template>`

`<script>
export default{
    props:{
        counter:Number(传过来的值的类型)
    }
}
</script>`




vue的响应式原理

增加：
Vue.set(state.xxx,key,value|number)
删除：
vue.delete(state.info,'age')

Mutation同步函数
Actions异步操作

开发注册功能，进度放慢，因为一些考试