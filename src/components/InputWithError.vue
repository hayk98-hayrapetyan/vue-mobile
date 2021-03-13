<template>
  <view>
    <nb-item>
        <slot />
    </nb-item>
    <nb-text :style="{color: 'red', padding: 10, fontSize: 14}" v-if="error">{{msg}}</nb-text>
  </view>
</template>

<script>
export default {
    props: ['error', 'msg']
}
</script>

<style>

</style>