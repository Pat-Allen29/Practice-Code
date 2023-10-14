import user from '@/api/modules/users/index'

export default {
    state: {
      USER_DETAILS: {}
    },
    
    getters: {
      USER_DETAILS:(state) => state.USER_DETAILS,
    },

    mutations: {
      USER_DETAILS:(state, data)=>{state.USER_DETAILS = data},
    },

    actions: {
        Logout(){
            return new Promise((resolve,reject)=>{
            user.Logout().then((response)=>{
                resolve(response.data)
              }).catch((error)=>{
                  reject(error)
              });
            })
          },
        LOGIN({commit}, payload){
            return new Promise((resolve,reject)=>{
            user.LOGIN(payload).then((response)=>{
                resolve(response.data)
              }).catch((error)=>{
                  reject(error)
              });
            })
          },
    }
}