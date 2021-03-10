<template>
<view>
  <text>MeetUpDetail</text>
  <text>{{meetupId}}</text>
</view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    },
    data: () => ({
        meetupId: ''
    }),
    created(){
        this.meetupId = this.navigation.getParam('meetupId', 'undefined');
    }
}
</script>

<style>

</style>