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
        fetchThreads({commit}, meetupId){
            axiosInstance.get(`/threads?meetupId=${meetupId}`).then(res => {
                commit('setItems', {items: res.data.threads, resources: 'threads'}, {root: true});
            })
        },
    }
}