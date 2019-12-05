export default {
    //抽离


    //如果需要传入参数，则可返回一个回调函数
    //例如：组件中{{$store.getters.moreAgestu(10)}}
    // moreAgestu(state) {
    //   return function (age) {
    //     return state.students.filter(s => s.age > age);
    //   }
    // }




    // more20stu(state) {
    //   return state.students.filter(s => s.age > 20);返回的是结果
    // },
    //在组件中写{{$store.getters.more20stu}}
    //getters还可以作为参数
    //例如：
    // more20stulength(state, getters) {
    //   return getters.more20stu.length;结果
    // }
    //powcounter(state) {
    //return state.counter * state.counter;结果
    //}
    //组件中使用getters
    //{{$store.getters.powcounter}}
}