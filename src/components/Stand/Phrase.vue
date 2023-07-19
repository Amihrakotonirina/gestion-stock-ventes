<template>
  <div class="phrase-accroche">
        <div class="phrase">
          <div class="pub4">
            <!--h4 v-if="exposant" class="ph">{{exposant.NomExpo}}</h4-->
          </div>
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
  name: 'Phrase',
	data(){
    return{
      idExpo:null
    }
  },
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),


        exposant() {
            return this.$store.getters.exposantById(this.idExpo)
        },

        

    },
mounted(){

            let idFromRoute = parseInt(this.$route.params.id) + 1
            this.idExpo = idFromRoute - 1
        
    }
}
</script>