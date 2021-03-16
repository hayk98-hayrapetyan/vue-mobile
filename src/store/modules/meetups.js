import axiosInstance from "@/services/axios";
import { AsyncStorage } from "react-native";

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
        },
        addMeetup(state, meetup){
            state.items.unshift(meetup);
        }
    },
    actions: {
        async fetchSecret(){
            return axiosInstance.get(`/meetups/secret`).then(() => {
                //
            })
        },
        fetchMeetups({commit}){
            axiosInstance.get(`/meetups`).then(res => {
                commit('setItems', {items: res.data, resources: 'meetups'}, {root: true});
            })
        },
        fetchMeetupById({commit}, meetupId){
            commit('setMeetup', {})
            axiosInstance.get(`/meetups/${meetupId}`).then(res => {
                commit('setMeetup', res.data)
            })
        },
        createMeetup({rootState, commit}, meetupData){
            meetupData.processedLocation = meetupData.location.toLowerCase().replace(/[\s,]+/g, '').trim();
            meetupData.meetupCreator = rootState.auth.user;

            return axiosInstance.post(`/meetups`, meetupData)
            .then(res => {
                commit('addMeetup', res.data);
                return res.data;
            });
        }
    }
}