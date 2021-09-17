import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
const idToken = 'AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken:localStorage.getItem('idToken') || null,
    localId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken,
      state.localId = userData.localId,
      state.user = userData.displayName 
    },
    clearAuth(state){
      state.idToken = null,
      state.localId = null,
      state.user = null
    }
  },
  actions: {
    //register user
    async register({commit}, userData) {
      try {
        let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${idToken}`, userData)
        commit('authUser', response.data)
        localStorage.setItem('idToken',response.data.idToken )
        localStorage.setItem('localId', response.data.localId),
        localStorage.setItem('userName', response.data.displayName)
        router.push('/dashboard')
        return response.data
      }
      catch(e) {
        throw new Error(e.message)
      }
    },
    //login user
    async login({commit}, userData) {
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${idToken}`, userData)
      commit('authUser', response.data)
      localStorage.setItem('idToken',response.data.idToken)
      localStorage.setItem('localId', response.data.localId)
      localStorage.setItem('userName', response.data.displayName)
      router.push('/dashboard')
      return response.data
    } catch(e) {
      throw new Error(e.message)
    }
  },
    //logout user
  async logout({commit}) {
    try {
      commit('clearAuth')
      localStorage.removeItem('idToken')
      localStorage.removeItem('localId')
      localStorage.removeItem('userName')
      router.push('/')
    } catch(e) {
      throw new Error(e.message)
    }
  },
},
  getters: {
    isLoggedIn: state => {
      return state.idToken !== null
    }
  }
})
