import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    // 先判断elementRef是否存在
    if (elementRef.value) {
      // 判断一个节点是否存在另一个节点 .contains  返回布尔值   e.target 断言 成标签元素
      elementRef.value.contains(e.target as HTMLElement) ? isClickOutside.value = false : isClickOutside.value = true
      // if (elementRef.value.contains(e.target as HTMLElement)) {
      //   isClickOutside.value = false
      // } else {
      //   isClickOutside.value = true
      // }
    }
  }
  // 命周期 mounted
  onMounted(() => {
    document.addEventListener('click', handler)
  })

  // 销毁时
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
export default useClickOutside
// // 定义点击事件处理函数
// const handle = (e: MouseEvent) => {
//   // 先判断dropdownRef是否存在
//   if (dropdownRef.value) {
//     // 判断一个节点是否存在另一个节点 .contains  返回布尔值   e.target 断言 成标签元素
//     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
//       isOpen.value = false
//     }
//   }
// }
//
// // 命周期 mounted
// onMounted(() => {
//   document.addEventListener('click', handle)
// })
//
// // 销毁时
// onUnmounted(() => {
//   document.removeEventListener('click', handle)
// })
