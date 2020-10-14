<template>
  <div class="post-list">
    <article class="card mb-3 shadow-sm">
      <div class="card-body" v-for="item in list" :key="item.id">
        <h4>{{ item.title }}</h4>
        <div class="row my-3 align-items-center">
          <div class="col-3">
            <img :src="item.image" :alt="item.title" class="rounded-lg">
          </div>
          <p :class="{'col-9': item.image }">{{ item.content }}</p>
        </div>
        <span class="text-muted">{{ item.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  }

})
</script>

<style scoped>

</style>
