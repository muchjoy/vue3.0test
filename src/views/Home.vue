<template>
  <div class="home">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import ColumnList, { ColumnProps } from '@/components/ColumnList/ColumnList.vue'
import { GlobalDataProps } from '@/store/store'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>

<style scoped>

</style>
