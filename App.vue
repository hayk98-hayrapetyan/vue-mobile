<template>
  <view class="container">
    <HomeScreen 
      v-if="activeScreen == 'homeScreen'" 
      :testingData="testingData" 
      :navigate="navigate"
    />
    <Screen1 
      v-if="activeScreen == 'screen1'" 
      :navigate="navigate" 
    />
  </view>
</template>

<script>
import HomeScreen from "./src/screens/HomeScreen";
import Screen1 from "./src/screens/Screen1";

export default {
  components: {HomeScreen, Screen1},
  data: () => ({
    activeScreen: 'homeScreen',
    testingData: "hello from app component"
  }),
  methods: {
    navigate(screen){
      this.activeScreen = screen;
    }
  }
}
</script>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
