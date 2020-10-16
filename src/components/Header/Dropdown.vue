<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggle">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const store = useStore()
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    // 可以通过dropdownRef.value可以访问到对应的节点
    const dropdownRef = ref< null | HTMLElement >(null)

    // 导入使用useClickOutside
    const isClickOutside = useClickOutside(dropdownRef)

    // 监听isClickOutside的变化
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
        store.commit('login')
      }
    })
    return {
      isOpen,
      toggle,
      dropdownRef
    }
  }
})
</script>

<style scoped>

</style>
