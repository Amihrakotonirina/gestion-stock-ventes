<template>
  <div class="Depot">
        <div class="deposer icon-bouton-container">

          <!--div class="ring-deposer icon-buton" v-b-tooltip.hover.v-danger title="Lire les documents"-->
          <div class="ring-deposer icon-buton" title="Lire nos documents">
              <b-icon v-show="expo" v-b-modal.modal-prevent-closing class="icn" animation="throb" icon="briefcase" aria-hidden="false"></b-icon>
          </div>

          <b-modal id="modal-prevent-closing" no-close-on-backdrop ref="modal" centered title="" ok-only @ok="">
          <h4 class="mt-3">Documents téléchargeables</h4>
           <!--b-form-file v-model="file1" :state="Boolean(file1)" accept=".jpg, .png" placeholder=""></b-form-file>
           <b-form-file accept=".jpg, .png" placeholder=""></b-form-file -->

              <div v-for="document in expo.documents" :key='document.id'>
                <div class="fly">
                  <span> <strong> Document: </strong> <a class="pub10" target="_blank" :href="'/uploads/' + document.cheminDoc">: {{ document.titreDoc }}</a></span>
                </div>
            </div>

          </b-modal>
        </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  import store from '../../store';
  import Vuex from 'vuex'
  import router from '../../router'
  Vue.use(router)

export default {
  name: 'Dépot',

  data(){
    return{
      idExpo:null,
      expo: [],
      media: [],
  }
},
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),


        // exposant() {
        //     this.expo = this.$store.getters.exposantById(this.idExpo)
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
        } );
    },

    updated(){
      console.log(`niova aaii : ${this.expo}`);
    }
}

</script>