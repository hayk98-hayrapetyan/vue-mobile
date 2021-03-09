<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
import Navigation from "./navigation.vue";
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import ScreenWithDrawer from "@/components/ScreenWithDrawer"

Vue.use(VueNativeBase);
Vue.component('ScreenWithDrawer', ScreenWithDrawer)

export default {
  components: {Navigation},
}
</script>

<style scoped>
.container {
  flex: 1;
  padding: 10px;
}
</style>