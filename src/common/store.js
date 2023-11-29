// import { reactive, ref } from "vue";
import { createStore } from "vuex";

const moduleA = {
  state: () => ({

  }),
  mutations: {

  },
  getters: {

  },
  actions: {
    
  }
}

const moduleB = {

}

const store = createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 1, text: '...', done: true
      },
      {
        id: 2, text: '...', done: false
      }
    ],
    cart: {}
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) { 
      state.count++
    },
    decrement (state) {
      state.count--
    },
    incrementBy (state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, rejects) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      })
    },
    async actionC ({ commit }) {
      commit('gotData', await getData())
    },
    async actionD ({ dispatch, commit }) {
      await dispatch('actionC')
      commit('getOtherData', await getOtherData())
    },
    // demo of shop car
    checkout ({ commit, state }, products) {
      const savedCartItems = [...state.cart.add]

      commit(types.CHECKOUT_REQUEST)

      shop.buyProducts(
        products,
        // success
        () => commit(types.CHECKOUT_SUCCESS),
        // failure
        () => commit(types.CHECKOUT_FAILURE, savedCartItems)
      )
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})


export default store;