import axios from 'axios';
import { Platform } from "react-native";


const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';

export default {
    namespaced: true,
    state: {
        user: {},
        isAuth: false
    },
    getters: {

    },
    mutations: {
        setAuthUser(state, user){
            state.user = user
        }
    },
    actions: {
        login({commit, state}, userData){
            return axios.post(`${BASE_URL}/users/login`, userData).then(res => {
                commit('setAuthUser', res.data);
                return state.user;
            })
        },
    }
}