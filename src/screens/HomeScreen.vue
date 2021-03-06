<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <Hello />
    <button title="Go to Screen 1" :on-press="() => navigate('screen1')" />
  </view>
</template>

<script>
import Hello from "@/components/Hello.vue";

export default {
  components: {Hello},
  props: {
      testingData: {
          type: String,
          required: false
      },
      navigate: {
          type: Function,
          required: true
      }
  },
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
