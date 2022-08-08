<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
// interface STATE {
//   topinset: number;
// }
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  nextTick,
  computed,
  watch
} from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "login-com",
  props: ["list"],
  emits: ["openAgain"],
  components: {},
  setup(prop, context) {
    const router = useRouter() // router必须写在setup里面
    // emit
    // context.emit("openAgain");
    // prop
    // prop.list
    const state = reactive({
      // topinset: 0,
      username: '',
      password: '',
    });
    const methods = {
      onSubmit () {
        console.log(state.username)
        console.log(state.password)
        router.push({name: 'about'})
      }
    }
    // const doubleCount = computed(() => state.topinset + "1");
    onMounted(() => {
      console.log("onMounted");
    });
    nextTick(() => {
      console.log("nextTick");
    });
    // setTimeout(() => {
    //   state.topinset = 3;
    // }, 1000);
    // watch(
    //   () => state.topinset,
    //   (newValue: any) => {
    //     console.log("watch");
    //   }
    // );
    return {
      // doubleCount,
      ...toRefs(state),
      ...methods
    };
  }
});
</script>
