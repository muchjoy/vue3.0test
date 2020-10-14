<template>
  <div class="container">
    <!--头部-->
    <global-header :user="user"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 引入 bootstrap css 文件
import 'bootstrap/dist/css/bootstrap.min.css'

// 引入组件 和 接口
import GlobalHeader, { UserProps } from '@/components/Header/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'Muchjoy'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      user: currentUser
    }
  }
})
</script>

<style>

</style>
