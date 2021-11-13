// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 使用mutation修改store数据
  mutations: {
    // mutations中不能写异步的代码
    increment(state) {
      state.count += 1;
    },
    // 触发mutations时候进行传参
    incrByStep(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count = state.count - step;
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        //  在action中,不能直接修改state中的数据
        // 必须context.commit()触发mutations的函数
        context.commit('increment');
      }, 1000)
    },
    addByStepAsync(context, step) {
      setTimeout(() => {
        //  在action中,不能直接修改state中的数据
        // 必须context.commit()触发mutations的函数
        context.commit('incrByStep', step);
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step);
      })
    }
  },
  // 对数据进行包装的作用
  getters: {
    showNum(state){
      return '当前最新的数量是['+state.count+']';
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
