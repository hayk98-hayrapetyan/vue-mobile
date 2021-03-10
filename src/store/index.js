import Vuex from 'vuex';
import Vue from "vue-native-core";
import axios from 'axios';
import { Platform } from "react-native";

import meetups from "./modules/meetups";

Vue.use(Vuex);

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default new Vuex.Store({
    state: {
        todos: [],
    },
    getters: {

    },
    mutations: {
        setTodos(state, todos){
            state.todos = todos;
        },
    },
    actions: {
        fetchTodos({commit}){
            axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
                commit('setTodos', res.data);
            })
        },
    },
    modules: {
        meetups
    }
})