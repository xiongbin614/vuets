<template>
  <div class="index-page">
    <router-view/>
    <van-tabbar v-model="active" route  @change="change">
      <van-tabbar-item icon="home-o"  to="/home/index">笔记</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  active = 0
  change() {
    console.log(this.active)
  }
}
</script>
<style>
.index-page {
  height: 100%;
  overflow: hidden;
}

</style>
