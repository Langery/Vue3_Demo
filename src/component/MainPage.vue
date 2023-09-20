<template>
  <div>
    This is main page.
    <p>This is {{mainObj.name}}</p>
  </div>
  <!-- 传送门 -->
  <Teleport to="body">
    <div>
      
    </div>
  </Teleport>
  <Fragment>

  </Fragment>
</template>


<script>
import { reactive, Fragment } from 'vue'
export default {
  name: 'main page',
  components: {
    Fragment
  },
  data() {
    return {

    }
  },
  setup(){
    let mainObj = reactive({
      name: 'main body',
      age: 17
    })
    return {
      mainObj
    }
  }
}
</script>
