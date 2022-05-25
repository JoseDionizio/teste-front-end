import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
    erro: undefined,    
    menu: {},
    listMenu:[]
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
