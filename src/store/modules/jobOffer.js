import {Enterprises, JobOffers} from "../../data/jobOfferFixtures";

const state = {
  enterpriseList: Enterprises,
  jobList: JobOffers,

};

const getters = {
  /*getContactLists: state => state.contactList,
  getCurrentUser: state => state.currentUser,
  getRecentUser: state => state.recentUsers,
  getSelectedUser: state => state.selectedUser*/
	getEnterpriseList: state => state.enterpriseList,
	getJobList: state => state.jobList
};

const actions = {
  /*changeSelectedUser({commit}, id) {
    commit("updateSelectedUser", id);
  }*/

};

const mutations = {
  /*updateSelectedUser: (state, id) => {
    const sUser = state.contactList.filter(user => user.id == id);
    state.selectedUser = sUser[0];
    // console.log(state.selectedUser);
  }*/
};

export default {
  state,
  getters,
  actions,
  mutations
};
