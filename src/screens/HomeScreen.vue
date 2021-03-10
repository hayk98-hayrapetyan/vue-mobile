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
import axios from "axios";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => ({
    title: "Home Screen",
    todos: []
  }),
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      this.todos = res.data;
    })
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
