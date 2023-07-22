<template>
  <header>
    <p>Hello {{name}}</p>
  </header>

  <main>
    <p>This is the {{ number }} Page</p>
    <p>The first number is {{showNum}}</p>
  </main>
</template>

<script lang="ts">
import { onMounted, onUnmounted } from 'vue'
/** 
 * setup 不用导出，组件不用注册
 */
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
export default {
  data(){
    return{
      name: 'Vue 3',
      number: 'First',
      showNum: 0
    }
  },
  computed: {

  },
  // Composition API Enter
  setup (){

    onMounted(() => {

    });

    onUnmounted(() => {

    })
  }
}
</script>

<style scoped>

</style>
