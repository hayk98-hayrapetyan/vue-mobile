import axios from 'axios';
import axiosInstance from "@/services/axios";
import { Platform } from "react-native";
import { AsyncStorage } from "react-native";

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
        },
        addMeetup(state, meetup){
            state.items.unshift(meetup);
        }
    },
    actions: {
        async fetchSecret(){
            return axiosInstance.get(`${BASE_URL}/meetups/secret`).then(() => {
                //
            })
        },
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
        },
        createMeetup({rootState, commit}, meetupData){
            meetupData.processedLocation = meetupData.location.toLowerCase().replace(/[\s,]+/g, '').trim();
            meetupData.meetupCreator = rootState.auth.user;

            return axiosInstance.post(`${BASE_URL}/meetups`, meetupData)
            .then(res => {
                commit('addMeetup', res.data);
                return res.data;
            });
        }
    }
}