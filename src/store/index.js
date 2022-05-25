import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../core/module/menu'

Vue.use(Vuex);

const modules = {
  Menu
}

export default new Vuex.Store({  
  modules
});
