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
        fetchCategories({commit}){
            axios.get(`${BASE_URL}/categories`).then(res => {
                commit('setItems', {items: res.data, resources: 'categories'}, {root: true});
            })
        },
    }
}