<template>
  <li class="dropdown-option" :class="{'is_disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.dropdown-option.is_disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
