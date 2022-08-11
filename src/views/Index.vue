<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="160">
      <van-swipe-item v-for="(item, i) in swipeList" :key="i">{{i}}</van-swipe-item>
    </van-swipe>
    <van-tabs v-model:active="active" animated>
      <van-tab v-for="(item, i) in cregList" :title="'类别 ' + i" :key="i">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
          <div class="card">
            <div class="card-item" v-for="(item, i) in list" :key="i">
              <div class="card-left">img</div>
              <div class="card-right">img</div>
            </div>
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
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
export default class Home extends Vue {
  swipeList:Array<object> = [
    {url: '', name: '1'},
    {url: '', name: '1'},
    {url: '', name: '1'},
    {url: '', name: '1'}
  ]
  cregList:Array<object> = [
    {url: '', name: '1'},
    {url: '', name: '2'},
    {url: '', name: '3'},
    {url: '', name: '4'}
  ]
  list:Array<object> = [
    {url: '', name: '1'},
    {url: '', name: '2'},
    {url: '', name: '3'},
    {url: '', name: '3'},
    {url: '', name: '3'},
    {url: '', name: '3'},
    {url: '', name: '4'}
  ]

  loading = false
  onRefresh() {
    this.loading = true
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card {
  height: 1020px;
  overflow: auto;
  .card-item {
    display: flex;
    background: #f7f8fa;
    height: 200px;
    margin-bottom: 36px;
  }
  .card-left {
    width: 40%;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
