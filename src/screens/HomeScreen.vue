<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <Hello />
  </view>
</template>

<script>
import Hello from "@/components/Hello.vue";

export default {
  components: {Hello},
  data: () => ({
    title: "Home Screen"
  })
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
