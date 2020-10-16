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
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import PostList from '@/views/PostList.vue'

export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    // 跳转路由传过来的id
    const currentId = +route.params.id
    // 找出对应id的内容 使用vuex管理
    const column = computed(() => store.getters.getColumnById(currentId))
    // 找出对应分类列表的数据 使用vuex管理
    const list = computed(() => store.getters.getPostById(currentId))
    return {
      column,
      list
    }
  }
})
</script>

<style scoped>

</style>
