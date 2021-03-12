import Vuex from 'vuex';
import Vue from "vue-native-core";
import axios from 'axios';
import { Platform } from "react-native";

import meetups from "./modules/meetups";
import threads from "./modules/threads";

Vue.use(Vuex);

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default new Vuex.Store({
    state: {
        
    },
    getters: {

    },
    mutations: {
        setItems(state, {items, resources}){
            state[resources].items = items;
        },
    },
    actions: {
        
    },
    modules: {
        meetups,
        threads
    }
})