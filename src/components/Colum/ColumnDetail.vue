<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" alt="" class="rounded-circle border border-light w-25 my-3">
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list = 'list'></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import PostList from '@/views/PostList.vue'

import { testData, testPosts } from '@/testDate'

export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    // 跳转路由传过来的id
    const currentId = +route.params.id
    // 找出对应id的内容
    const column = testData.find(c => c.id === currentId)
    // 找出对应分类列表的数据
    const list = testPosts.filter(item => item.columnId === currentId)
    return {
      column,
      list
    }
  }
})
</script>

<style scoped>

</style>
