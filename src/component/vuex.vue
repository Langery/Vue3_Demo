<template>
  <div>
    {{ countAlias }} <br>
    {{ countPlusLocalState }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  },
  mounted(){

  }
}
</script>