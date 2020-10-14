<template>
  <div class="home">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ColumnList, { ColumnProps } from '@/components/ColumnList/ColumnList.vue'
import { testData } from '@/testDate.ts'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style scoped>

</style>
