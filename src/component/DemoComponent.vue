<template>
  <div id="demo">
    <!-- count -->
    <div class="count_class">
      <button class="btn_count" @click="count++">Add</button>
      {{ count }}
      <button class="btn_count" @click="count--">minus</button>
    </div>

    <!-- 自定义指令 -->
    <input v-focus />
    <br />
    <!-- Transition -->
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Hello & Bonjour!</p>
    </Transition>

    <!-- 传送门 -->
    <button @click="open = true">Open Modal</button>
    <!-- :disabled -->
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data (){
    return {
      count: 0,
      open: Boolean
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
/* common */
.btn_count{
  border-radius: 5px;
}
</style>

<style>
/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
