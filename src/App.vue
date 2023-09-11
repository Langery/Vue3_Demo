<template>
  <header>
    <p>Hello {{nickname}}</p>
  </header>

  <main>
    <p>This is the {{ number }} Page</p>
    <p>The first number is {{showNum}}</p>
    <p>The reactive name is {{person.name}}, and age is {{person.age}}</p>
    <main-page></main-page>
  </main>
</template>

<script lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch, watchEffect } from 'vue'
import MainPage from './component/MainPage.vue';

// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'First Vue3',
  components: {
    MainPage
  },
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
    let person = reactive({
      name: 'react body',
      age: 18
    })
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
    return {
      person,
      watchObj
    }
  }
}
</script>

<style scoped>

</style>
