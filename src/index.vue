<template>
  <view class="container">
    <Navigation v-if="isAuthResolved" />
    <nb-container v-else class="spinner-container">
      <nb-spinner color="blue" />
    </nb-container>
  </view>
</template>

<script>
import Navigation from "./navigation.vue";
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import store from '@/store/';
import ScreenWithDrawer from "@/components/ScreenWithDrawer";
import moment from "moment";
import Vuelidate from 'vuelidate';
import AppMessage from "@/components/AppMessage";
import InputWithError from "@/components/InputWithError";
import AppNavigationEvents from '@/react-components/appNavigationEvents';
import AppHeader from "@/components/AppHeader";
 
Vue.use(VueNativeBase);
Vue.use(Vuelidate);

Vue.component('ScreenWithDrawer', ScreenWithDrawer);
Vue.component('AppMessage', AppMessage);
Vue.component('InputWithError', InputWithError);
Vue.component('AppNavigationEvents', AppNavigationEvents);
Vue.component('AppHeader', AppHeader);
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
  created(){
    this.$store.dispatch('auth/verifyUser')
        .catch(() => {});
  },
  computed: {
    isAuthResolved(){
      return this.$store.state.auth.isAuthResolved;
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
}
.spinner-container {
  display: flex;
  justify-content: center;
}
</style>