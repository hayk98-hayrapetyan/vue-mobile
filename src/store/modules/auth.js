import axios from 'axios';
import { Platform } from "react-native";
import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";
import axiosInstance from '@/services/axios';

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
        user: null,
        isAuthResolved: false
    },
    getters: {
        isAuth: state => !!state.user
    },
    mutations: {
        setAuthUser(state, user){
            state.user = user
        },
        resloveAuth(state){
            state.isAuthResolved = true
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
        register({commit}, userData){
            return axios.post(`${BASE_URL}/users/register`, userData);
        },
        logout({commit}){
            return new Promise((resolve) => {
                AsyncStorage.removeItem('meetuper-jwt');
                commit('setAuthUser', null);
                resolve();
            })
        },
        fetchCurrentUser({commit, state}){
            return axiosInstance.get(`${BASE_URL}/users/me`).then(res => {
                AsyncStorage.setItem('meetuper-jwt', res.data.token);
                commit('setAuthUser', res.data);
                return state.user;
            }).catch(() => undefined);
        },
        async verifyUser({dispatch, commit}){
            const jwt = await AsyncStorage.getItem('meetuper-jwt');

            if(jwt && isTokenValid(jwt)){
                const user = await dispatch('fetchCurrentUser');
                commit('resloveAuth');
                return user ? Promise.resolve(jwt) : Promise.reject('Cannot fetch user');
            } else {
                commit('resloveAuth');
                return Promise.reject('Token is not valid!');
            }
        }
    }
}