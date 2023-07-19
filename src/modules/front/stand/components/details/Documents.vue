<template>
  <div class="">
        <div class="document icon-bouton-container">

          <!--div class="ring-deposer icon-buton" v-b-tooltip.hover.v-danger title="Lire les documents"-->
          <div class="ring-document icon-buton" title="Cliquez ici pour lire les documents">
              <!--b-icon v-show="expo" v-b-modal.modal-prevent-closing class="icn" animation="throb" icon="file-earmark-richtext-fill" aria-hidden="true"></b-icon-->
              <i 
                  v-b-popover.hover.righttop="'Cliquez ici pour lire les documents'"
                  title="e-rohy"
                  class="i-Newspaper icn" v-b-modal.modal-document animation="throb" aria-hidden="true"></i>

          </div>

          <b-modal id="modal-document" no-close-on-backdrop ref="modal" centered title="Documents" ok-title="Fermer" size="lg" ok-only @ok="">
          <h4 class="mt-3">Documents téléchargeables</h4>
           <!--b-form-file v-model="file1" :state="Boolean(file1)" accept=".jpg, .png" placeholder=""></b-form-file>
           <b-form-file accept=".jpg, .png" placeholder=""></b-form-file -->

              <!--div v-for="document in expo.documents" :key='document.id'>
                <div class="fly">
                  <span> <strong> Document: </strong> <a class="pub10" :href="'/uploads/' + document.cheminDoc">: {{ document.titreDoc }}</a></span>
                </div>
            </div-->

          </b-modal>
        </div>
  </div>
</template>


<script>
 /* import Vue from 'vue'
  import store from '../../store';
  import Vuex from 'vuex'
  import router from '../../router'
  Vue.use(router)
*/

export default {
  name: 'Documents',

  data(){
    return{
      idExpo:null,
      expo: [],
      media: [],
  }
},
/*computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),

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
    }*/
}

</script>