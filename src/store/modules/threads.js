import axios from 'axios';
import { Platform } from "react-native";


const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {

    },
    mutations: {
        
    },
    actions: {
        fetchThreads({commit}, meetupId){
            axios.get(`${BASE_URL}/threads?meetupId=${meetupId}`).then(res => {
                commit('setItems', {items: res.data.threads, resources: 'threads'}, {root: true});
            })
        },
    }
}