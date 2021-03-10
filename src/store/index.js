import Vuex from 'vuex';
import Vue from "vue-native-core";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {

    },
    mutations: {
        setTodos(state, todos){
            state.todos = todos;
        }
    },
    actions: {
        fetchTodos({commit, state}){
            axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
                commit('setTodos', res.data);
            })
        }
    }
})