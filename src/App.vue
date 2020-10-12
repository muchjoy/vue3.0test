<template>
  <div class="container">
    <!--头部-->
    <global-header :user="user"></global-header>
    <!--内容列表-->
<!--    <column-list :list="list"></column-list>-->
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailRef" type="text" placeholder="请输入邮箱地址"></validate-input>
        {{ emailRef }}
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input type="password" :rules="passwordRules" placeholder="请输入密码"></validate-input>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// 引入 bootstrap css 文件
import 'bootstrap/dist/css/bootstrap.min.css'

// 引入组件 和 接口
import ColumnList, { ColumnProps } from '@/components/ColumnList/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/Header/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/confirmation/ValidateInput.vue'

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
    ValidateInput
  },
  setup () {
    const emailRef = ref('muchjoy')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'email', message: '请输入正确的密码格式' }
    ]

    return {
      list: testData,
      user: currentUser,
      emailRules,
      passwordRules,
      emailRef
    }
  }
})
</script>

<style>

</style>
