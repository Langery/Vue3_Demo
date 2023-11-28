// import { reactive, ref } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state(){
    return {
      count: 0
    }
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {

  },
  modules: {
    
  }
})


export default store;