import api from '@/api/index'

export default {
    authenticated(){
        return api.get('api/authenticate');
    },
    LOGIN(params){
        return api.post('api/Login',params);
    },
    Logout(){
        return api.get('api/Logout');
    },
}