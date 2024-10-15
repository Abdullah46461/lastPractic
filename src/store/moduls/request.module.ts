export default {
    namespaced: true,
    state(){

        return{
            requests: []
        }
    },
    mutations:{
        setRequest(state, requests){
            state.requests = requests
        }
    },
    actions
}
