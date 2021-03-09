<template>
  <App v-if="isAppReady" />
</template>

<script>
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import App from "./src";

export default {
  components: {App},
  data: () => ({
    isAppReady: false
  }),
  async created(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.isAppReady = true;
  },
}
</script>
