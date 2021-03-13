<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
import Navigation from "./navigation.vue";
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import store from '@/store/';
import ScreenWithDrawer from "@/components/ScreenWithDrawer";
import moment from "moment";
import AppMessage from "@/components/AppMessage";

Vue.use(VueNativeBase);
Vue.component('ScreenWithDrawer', ScreenWithDrawer);
Vue.component('AppMessage', AppMessage);
Vue.prototype.$store = store;

Vue.filter('uppercase', (value) => {
  if(!value) return '';

  return value.toUpperCase();
})

Vue.filter('formatDate', (value, formatType = "LL") => {
  if(!value) return '';

  return moment(value).format(formatType);
})

Vue.filter('fromNow', (value) => {
  if(!value) return '';

  return moment(value).fromNow();
})

export default {
  components: {Navigation},
}
</script>

<style scoped>
.container {
  flex: 1;
}
</style>