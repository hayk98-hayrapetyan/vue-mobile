import axios from 'axios';
import { Platform } from "react-native";
import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";

const isTokenValid = (token) => {
    if(token){
        const decodedToken = jwtDecode(token);
        return decodedToken && (decodedToken.exp * 1000) > new Date().getTime();
    }

    return false;
}


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
                AsyncStorage.setItem('meetuper-jwt', res.data.token)
                commit('setAuthUser', res.data);
                return state.user;
            })
        },
        async verifyUser(){
            const jwt = await AsyncStorage.getItem('meetuper-jwt');

            if(jwt && isTokenValid(jwt)){
                return Promise.resolve(jwt);
            } else {
                return Promise.reject('Token is not valid!');
            }
        }
    }
}