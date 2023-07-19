<template>
  <div class="">
    <b-img class="fnd" src="/img/fond_stand/fond-stand-with-hostesssss.jpg" fluid-grow alt=""></b-img>
  </div>
</template>


<script>
	import Vue from 'vue'
  	import store from '../../store'
  	import Vuex from 'vuex'
  	import router from '../../router'
  	Vue.use(router)
export default {
  name: 'Fondstand',
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

    beforeMount(){
        let idFromRoute = parseInt(this.$route.params.id) + 1
        this.idExpo = idFromRoute - 1
        let url = `/api/exposants/${this.idExpo}`
        axios.get(url , {headers:{'Accept': 'application/json'}})
        .then(response => { 
          this.expo = response.data
          console.log(this.expo.documents);
        } );
    }
    
// mounted:function(){
//     this.$nextTick(function () {
//             let idFromRoute = parseInt(this.$route.params.id) + 1
//             this.idExpo = idFromRoute - 1
//             this.exposant()
//       })
//     }
}
</script>