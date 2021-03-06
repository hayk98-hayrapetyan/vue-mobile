<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <button title="Go to Home" :on-press="() => navigate('homeScreen')" />
  </view>
</template>

<script>
export default {
    props: {
        navigate: {
            type: Function,
            required: true
        }
    },
    data: () => ({
        title: "I am Screen 1"
    })
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
