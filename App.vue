<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <Hello />
  </view>
</template>

<script>
import Hello from "./src/components/Hello";

export default {
  components: {Hello},
  data: () => ({
    title: "My App"
  })
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
