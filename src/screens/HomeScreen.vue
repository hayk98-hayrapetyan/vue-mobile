<template>
  <nb-container>
    <AppHeader screen="Home" />
    <scroll-view>
      <nb-text class="header-1">Featured Meetups</nb-text>
      <nb-text :style="{paddingLeft: 20}" v-if="user">Welcome {{user.username}}</nb-text>
      <nb-button :on-press="logout" transparent>
        <nb-text>Logout</nb-text>
      </nb-button>
      <MeetupCard 
          v-for="meetup in meetups"
          :meetup="meetup"
          :navigateToDetail="goToMeetupDetail"
          :key="meetup._id"
      />
    </scroll-view>
  </nb-container>
</template>

<script>
import MeetupCard from "@/components/MeetupsCard.vue";
import { AsyncStorage } from "react-native";

export default {
  components: {MeetupCard},
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => ({
    title: "Home Screen",
  }),
  computed: {
    meetups(){
      return this.$store.state.meetups.items;
    },
    user(){
      return this.$store.state.auth.user;
    }
  },
  async created(){
    await this.$store.dispatch('meetups/fetchMeetups')
  },
  methods: {
    goToScreen1(){
      this.navigation.navigate('ScreenOne');
    },
    goToMeetupDetail(meetupId){
      this.navigation.navigate('Meetup', {meetupId});
    },
    logout(){
      AsyncStorage.removeItem('meetuper-jwt');
    }
  }
}
</script>

<style scoped>
.header-1 {
  font-size: 23px;
  font-weight: bold;
  padding: 20px;
}
</style>
