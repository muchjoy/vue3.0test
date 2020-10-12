<template>
  <div class="container">
    <!--头部-->
    <global-header :user="user"></global-header>
    <!--内容列表-->
<!--    <column-list :list="list"></column-list>-->
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

// 引入 bootstrap css 文件
import 'bootstrap/dist/css/bootstrap.min.css'

// 引入组件 和 接口
import ColumnList, { ColumnProps } from '@/components/ColumnList/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/Header/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/Login/ValidateInput.vue'
import ValidateForm from '@/components/Login/ValidateForm.vue'

// 测试数据
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }

]

const currentUser: UserProps = {
  isLogin: true,
  name: 'Muchjoy'
}

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    const emailRef = ref('292')
    const passwordRef = ref('123456')
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
      console.log(result)
    }

    return {
      list: testData,
      user: currentUser,
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

<style>

</style>
