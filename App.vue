<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <image
      :source="require(`./assets/icon.png`)"
      :style="{width: 200, height: 200}"
    />
  </view>
</template>

<style>
.container {
  background-color: blue;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
