<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
     <MeetupCard 
        v-for="meetup in meetups"
        :meetup="meetup"
        :navigateToDetail="goToMeetupDetail"
        :key="meetup._id"
     />
  </scroll-view>
</template>

<script>
import MeetupCard from "@/components/MeetupsCard.vue";

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
