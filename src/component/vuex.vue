<template>
  <div>
    {{ countAlias }} <br>
    {{ countPlusLocalState }} <br>

    Completed Todos: {{ doneTodosCount }} <br>

    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    {{ add }}
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'vuex',
  data(){
    return {
      localCount: 5
    }
  },
  computed: {
    localCount () {
      return this.localCount
    },
    ...mapState({
      count: 'count',
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodos', 'doneTodosCount', 'getTodoById'
    ])
  },
  methods: {
    ...mapMutations([
      'increment', 'incrementBy', 'decrement'     
    ]),
    increment () {
      this.$store.dispatch('incrementAsync');
    },
    decrement () {
      this.$store.commit('decrement');
    },
    testAction () {
      this.$store.dispatch('actionA').then(() => {

      })
    }
  },
  mounted(){

  }
}
</script>