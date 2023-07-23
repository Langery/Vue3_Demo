<template>
  <header>
    <p>Hello {{nickname}}</p>
  </header>

  <main>
    <p>This is the {{ number }} Page</p>
    <p>The first number is {{showNum}}</p>
  </main>
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'

// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'First Vue3',
  data(){
    return{
      nickname: 'Vue 3',
      number: 'First',
      showNum: 0
    }
  },
  computed: {

  },
  // Composition API Enter
  setup (){
    let watchObj = ref({
      name: 'watch body',
      age: 20
    })
    watch(watchObj, (newValue, oldValue) => {

    }, {deep: true});
    watchEffect(() => {
      watchObj.value;
    })
    onMounted(() => {

    });

    onUnmounted(() => {

    })
  }
}
</script>

<style scoped>

</style>
