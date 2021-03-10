import axios from 'axios';
import { Platform } from "react-native";


const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {

    },
    mutations: {
        setMeetups(state, meetups){
            state.items = meetups;
        }
    },
    actions: {
        fetchMeetups({commit}){
            axios.get(`${BASE_URL}/meetups`).then(res => {
                commit('setMeetups', res.data);
            })
        }
    }
}