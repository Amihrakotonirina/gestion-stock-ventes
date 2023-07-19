//import fake datas
import {exposants} from '@/data/stand_fixtures';

import axios from 'axios'

const state = {
  currentStand: null,
  standList:[],

  exposants: exposants
};

const getters = {
  getStandList: state => state.standList,
  getCurrentStand: state => state.currentStand,



  //OLD
  getAllExposants: state => state.exposants,
  /*allSponsorsOfficiels: state => state.exposants*/
  getAllOrganisateurs: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==0
  }),
  /*allSponsorsOfficiels: state => state.exposants*/
  allParrains: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==1
  }),
  allSponsorsOfficiels: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==2
  }),
  /*allSponsorsOfficiels: state => state.exposants*/
  allSponsors: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==3
  }),
  allPartenaires: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==4
  }),
  /*allSponsorsGolds: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==5
  }),*/ 
  allVolamena: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==5
  }), 
  allKypreso: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==6
  }),
  allSedera: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==7
  }),
  allSimpleExposant: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo>=8
  }),
  allPartenaireDiffusions: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==9
  }),
  allGiz: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==-7
  }),
  allPartenaires_Village: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==-1
  }),
  allSponsorsOfficiels_Village: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==-2
  }),
  allSponsors_Village: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==-3
  }),
  allExposantSimples_Village: state => state.exposants.filter(function(exposant) {
    return exposant.TypeExpo==-4
  }),
  exposantById: (state) => (id) => {
    return state.exposants.find(exposant => exposant.id==id)
  },
  theCurrentExposant: (state) => state.currentExposant
};





const actions = {
  changeSelectedUser({commit}, id) {
    commit("updateSelectedUser", id);
  },

  getFixtures({commit}){
    commit('SET_EXPOSANTS', listExpoDatas);
  },

//OLD
  getExposants({ commit }) {
    
    axios.get('/api/exposants', {
    //axios.get('https://forum-sesame.com/api/exposants', {
      headers:{
              'Accept': 'application/json',
          }
    })
    .then(response => {
    commit('SET_EXPOSANTS', response.data)
    //console.log(response.data)
    })
  }

  // ,

  // getCurrentExposant(context, {id}){
  //  let url = `/api/exposants/${id}`
  //  console.log('url = ' + url)
  //  axios.get(url , {
  //    headers:{
  //            'Accept': 'application/json'
  //        }
  //  })
  //  .then(response => {
  //  context.commit('SET_CURRENT_EXPOSANT', response.data)
  //  //console.log(response.data)
  //  })
  // } 
};




const mutations = {
  updateSelectedUser: (state, id) => {
    const sUser = state.contactList.filter(user => user.id == id);
    state.selectedUser = sUser[0];
    // console.log(state.selectedUser);
  },

//OLD
  SET_EXPOSANTS(state, exposants) {
    state.exposants = exposants
  },
  SET_CURRENT_EXPOSANT(state, exposant){
    state.currentExposant = exposant
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
