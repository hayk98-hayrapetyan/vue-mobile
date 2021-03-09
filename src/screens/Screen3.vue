<template>
  <ScreenWithDrawer 
    :navigation="navigation" 
    :headertitle="title"
  >
    <view>
      <text class="text-color-primary">{{title}}</text>
    </view>
  </ScreenWithDrawer>
</template>

<script>
export default {
    props: {
      navigation: Object
    },
    data: () => ({
        title: "I am Screen 3"
    }),
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
