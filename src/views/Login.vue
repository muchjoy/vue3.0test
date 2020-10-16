<template>
  <div class="login">
    <validate-form @form-submit="onsubmitForm">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailRef"
          type="text"
          placeholder="请输入邮箱地址"
          ref="inputRef"
        />
        {{ emailRef }}
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          :rules="passwordRules"
          placeholder="请输入密码"
          v-model="passwordRef"
        />
        {{ passwordRef }}
      </div>
      <!--提交  # 是 v-slot 的缩写-->
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import ValidateInput, { RulesProp } from '@/components/form/ValidateInput.vue'
import ValidateForm from '@/components/form/ValidateForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    // 邮箱双向绑定数据
    const emailRef = ref('')
    // 密码双向绑定数据
    const passwordRef = ref('')
    // 跳转路由
    const router = useRouter()
    // 验证的规则内容
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'password', message: '请输入正确的密码格式' }
    ]

    // 通过 ref  可以访问到组件的实例方法
    const onsubmitForm = (result: boolean) => {
      if (result) {
        router.push('/home')
      }
    }
    return {
      emailRules,
      passwordRules,
      emailRef,
      passwordRef,
      onsubmitForm,
      inputRef
    }
  }
})
</script>

<style scoped>

</style>
