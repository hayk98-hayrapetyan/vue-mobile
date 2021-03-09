<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <button title="Go To Screen 2" :on-press="goToScreen2" />
  </view>
</template>

<script>
export default {
    props: {
      navigation: Object
    },
    data: () => ({
        title: "I am Screen 1"
    }),
    methods: {
      goToScreen2(){
        this.navigation.navigate('Screen2');
      }
    }
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
