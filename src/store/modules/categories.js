import axiosInstance from "@/services/axios";

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
            axiosInstance.get(`/categories`).then(res => {
                commit('setItems', {items: res.data, resources: 'categories'}, {root: true});
            })
        },
    }
}