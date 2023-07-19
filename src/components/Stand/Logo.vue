<template>
  <div class="box-logo">
        <div class="front">
          <img v-if="expo" class="logo" :src="'/img/logo-largeur-500/' + expo.Logo"/>
        </div>
  </div>
</template>


<script>
	import Vue from 'vue'
  	import store from '../../store'
  	import Vuex from 'vuex'
  	import router from '../../router'
  	Vue.use(router)
export default {
  name: 'Logo',
  data(){
    return{
      idExpo:null,
      expo: [],
    }
  },
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),


        // exposant() {
        //     return this.$store.getters.exposantById(this.idExpo)
        // },

        

    },

    // beforeMount(){
    //     let idFromRoute = parseInt(this.$route.params.id) + 1
    //     this.idExpo = idFromRoute - 1
    //     let url = `/api/exposants/${this.idExpo}`
    //     axios.get(url , {headers:{'Accept': 'application/json'}})
    //     .then(response => { 
    //       this.expo = response.data
    //       console.log(this.expo.documents);
    //     } );
    // }
    
    beforeMount(){
    let acronymeFromRoute = this.$route.params.acronyme
      //console.log('params =')
      //console.log(acronymeFromRoute)

    let url = `/api/exposants?AcronymeExpo=${acronymeFromRoute.toString()}`
    axios.get(url , {headers:{'Accept': 'application/json'}})
    .then(response => { 
      this.expo = response.data[0]
      //console.log('expo =')
      //console.log(this.expo)
    } );
  },

}
</script>