<template>
  <div id="demo">
    <!-- count -->
    <div class="count_class">
      <button @click="count++">Add</button>
      {{ count }}
      <button @click="count--">minus</button>
    </div>

    <!-- 自定义指令 -->
    <input v-focus />
    <!-- Transition -->
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Hello & Bonjour!</p>
    </Transition>
  </div>
</template>

<script>
export default {
  data (){
    return {
      count: 0
    }
  }
}

</script>

<script setup>
import {ref} from 'vue'
// 自定义指令
const vFocus = {
  mounted:(el) => el.focus()
}

const show = ref(true)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
