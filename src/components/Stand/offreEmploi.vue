<template>
  <div class="OffreEmploi">
        <div class="offre icon-bouton-container">

          <!--div class="ring-deposer icon-buton" v-b-tooltip.hover.v-danger title="Lire les documents"-->
          <div class="ring-offre icon-buton" title="Nos offres d'emploi en cours">
              <b-icon v-show="expo" v-b-modal.modal-offre-emploi class="icn" animation="throb" icon="inboxes-fill" aria-hidden="false"></b-icon>
          </div>

          <b-modal id="modal-offre-emploi" size="lg" no-close-on-backdrop centered title="Nos offres d'emploi en cours" ok-only @ok="Fermer">
          <h4 class="mt-3"></h4>
           <!--b-form-file v-model="file1" :state="Boolean(file1)" accept=".jpg, .png" placeholder=""></b-form-file>
           <b-form-file accept=".jpg, .png" placeholder=""></b-form-file-->


            <div class="row">
                            <div style="margin-bottom: 15px;" class="col-md-6" v-for='offre in expo.offreEmplois' :key='offre.id'>
                                <div class="card text-center border-0 shadow" :class="'type-' + offre.poste">
                                    
                                    <!--img class="img-bourse card-img-top img-fluid  thumbnails" :src="'/uploads/' + offre.chemin" alt="image"-->

                                    <div class="card-body">

                                        <h6 style="display: block; min-height: 100px;" class="card-title00"><strong>Poste : {{ offre.poste }}</strong></h6>
                                        
                                        <div style="text-align: left;">
                                          <p><small>
                                              Type de contrat : <span v-if="offre.typeContrat==1">CDI </span> <span v-if="offre.typeContrat==2">CDD </span> <span v-if="offre.typeContrat==3">Consultant </span> <span v-if="offre.typeContrat==4">Freelance </span> <span v-if="offre.typeContrat==5">Stage </span>  <br>
                                              Lieu de travail : <span v-if="offre.lieuTravail==1"> En locale</span><span v-if="offre.lieuTravail==2"> Télétravail</span>
                                              </small>
                                          </p>
                                        </div>
                                          
                                         <!-- 
                                          <p v-html="offre.description" style="display: block; min-height: 150px;" class="card-text"></p>
                                        -->
                                          <hr>
                                        <div style="min-height: 75px;">
                                            <h6 style="font-size: small; text-align: right;"></h6>
                                        </div>
                                        <a :href="'/virtuel/offre/' + offre.id" class="btn-lg btn-block btn-primary">Détails</a>
                                    </div>
                                </div>
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
  import OffreEmploisExposant from '../../components/OffreEmploisExposant.vue'
  Vue.use(router)

export default {
  name: 'OffreEmploisExposant',
  components: {
    OffreEmploisExposant
  },

  data(){
    return{
      idExpo:null,
      expo: null,
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

    updated(){
      console.log(`niova aaii : ${this.expo}`);
    }
}

</script>