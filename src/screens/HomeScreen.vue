<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="meetup in meetups" :key="meetup.title">
        <nb-text>{{meetup.title}}</nb-text>
      </nb-list-item>
    </nb-list>
  </scroll-view>
</template>

<script>

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => ({
    title: "Home Screen",
  }),
  computed: {
    todos(){
      return this.$store.state.todos;
    },
    meetups(){
      return this.$store.state.meetups.items;
    }
  },
  async created(){
    await this.$store.dispatch('fetchTodos')
    await this.$store.dispatch('meetups/fetchMeetups')
  },
  methods: {
    goToScreen1(){
      this.navigation.navigate('ScreenOne');
    }
  }
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
