<template>
  <form class="validate-form-container" @click="SubmitForm">
    <slot name="default"></slot>
    <div class="submit-area">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>

  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter: any = mitt()

type ValidateFn = () => boolean

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    // 定义一个数组 用来存放子组件传来的数据
    const fnArr: ValidateFn[] = []

    const SubmitForm = () => {
      // 使用map 得到两个布尔值数组, 在进行 every
      const result = fnArr.map(item => item()).every(i => i)
      context.emit('form-submit', result)
    }
    // 回调, 监听子元素发送过来的数据
    const callback = (fn: ValidateFn) => {
      fnArr.push(fn)
    }
    // mitt监听子元素发送过来的
    emitter.on('form-item-created', callback)
    // 销毁
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      SubmitForm
    }
  }
})
</script>

<style scoped>

</style>
