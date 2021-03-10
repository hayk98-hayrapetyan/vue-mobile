<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="todo in todos" :key="todo.id">
        <nb-text>{{todo.title}}</nb-text>
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
    }
  },
  async created(){
    await this.$store.dispatch('fetchTodos')
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
