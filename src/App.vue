<template>
  <header>
    <p>Hello {{nickname}}</p>
  </header>

  <!-- <main> -->
    <p>This is the {{ number }} Page</p>
    <p>The first number is {{showNum}}</p>
    <p>The reactive name is {{person.name}}, and age is {{person.age}}</p>
    <main-page></main-page>
  <!-- </main> -->
</template>

<script lang="ts">
import { onMounted, onUnmounted, reactive, toRefs, ref, watch, watchEffect } from 'vue'
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
  setup (props, context){
    let person = reactive({
      name: 'react body',
      age: 18
    })
    let watchObj = ref({
      name: 'watch body',
      age: 20
    })

    let { name } = toRefs(person);
    name.value = "new People";
    /**
     * person: {
     *  name: 'new People',
     *  age: 18
     * }
     */

    watch(watchObj, (newValue, oldValue) => {

    }, {deep: true});

    watchEffect(() => {
      watchObj.value;
    })

    // 生命周期钩子 组件挂载之后调用
    onMounted(() => {

    });

    // 组件卸载之后
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
