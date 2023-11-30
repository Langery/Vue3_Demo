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
  name: 'vuex component',
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
    ...mapMutations({
      increment: 'INCREMENT',
      decrement: 'DECREMENT'
    }),
    increment () {
      this.$store.dispatch('incrementAsync');
    },
    decrement () {
      this.$store.commit('DECREMENT');
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