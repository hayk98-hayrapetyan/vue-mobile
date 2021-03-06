import axios from 'axios';
import { Platform } from "react-native";


const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default {
    namespaced: true,
    state: {
        items: [],
        item: {}
    },
    getters: {

    },
    mutations: {
        setMeetup(state, meetup){
            state.item = meetup
        }
    },
    actions: {
        fetchMeetups({commit}){
            axios.get(`${BASE_URL}/meetups`).then(res => {
                commit('setItems', {items: res.data, resources: 'meetups'}, {root: true});
            })
        },
        fetchMeetupById({commit}, meetupId){
            commit('setMeetup', {})
            axios.get(`${BASE_URL}/meetups/${meetupId}`).then(res => {
                commit('setMeetup', res.data)
            })
        }
    }
}