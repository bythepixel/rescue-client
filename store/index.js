import Vuex from 'vuex'
// import { setPets, getPets, getPet } from '../assets/js/services/dbindexService'
import { getDogs } from '../assets/js/services/httpService'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pets: [],
    },

    mutations: {
      setPets(state, pets) {
        state.pets = pets
      },
    },

    actions: {
      async getPets({ commit }) {
        await getDogs().then(resp => {
          commit('setPets', resp)
        })
      },
      async nuxtServerInit({ dispatch }) {
        await dispatch('getPets')
      },
    },
  })
}

export default createStore
