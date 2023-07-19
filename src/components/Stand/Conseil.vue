<template>
  <div class="box-conseil">
        <!-- Conseil -->
        <div class="conseil icon-bouton-container">
          <!--div class="ring-conseil icon-buton" v-b-tooltip.hover.v-danger title="Connaitre l'entité"-->
          <div class="ring-conseil icon-buton" title=" Qui sommes-nous ? ">
            <b-icon v-show="expo" v-b-modal.modal-lg class="icn" icon="house-door-fill" animation="throb" aria-hidden="false"></b-icon>
          </div>
          <b-modal id="modal-lg" size="lg" no-close-on-backdrop ok-only ok-title="Fermer" centered title="Présentation">
            <!--b-card no-body>
              <b-tabs card>
              <b-tab title="Picture 1">
                <b-card-text>
                  <img src="../../assets/img/fli.jpg" class="img-fluid sary"/>
                </b-card-text>
              </b-tab>

              <b-tab title="Picture 2">
                <b-card-text>
                  <img src="../../assets/img/fli.jpg" class="img-fluid sary"/>
                </b-card-text>
              </b-tab>

              <b-tab title="Picture 3">
                <b-card-text>
                  <img src="../../assets/img/fli.jpg" class="img-fluid sary"/>
                </b-card-text>
              </b-tab>

              <b-tab title="Picture 4">
                <b-card-text>
                  <img src="../../assets/img/fli.jpg" class="img-fluid sary"/>
                </b-card-text>
              </b-tab>

              <b-tab title="Picture 5">
                <b-card-text>
                  <img src="../../assets/img/fli.jpg" class="img-fluid sary"/>
                </b-card-text>
              </b-tab>
              </b-tabs>
          </b--->  
            <p v-html="expo.PresentationGenerale" class="presentation"></p>

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
  name: 'Conseil',

  data(){
    return{
      expo : null
  }
  },
   // beforeMount(){
   //      let idFromRoute = parseInt(this.$route.params.id) + 1
   //      this.idExpo = idFromRoute - 1
   //      let url = `/api/exposants/${this.idExpo}`
   //      axios.get(url , {headers:{'Accept': 'application/json'}})
   //      .then(response => { 
   //        this.expo = response.data
   //      } );
   //  }

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
  /*
  data(){
    return{
  }
},
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),

/*
        exposant() {
            this.expo = this.$store.getters.exposantById(this.idExpo)
            return this.$store.getters.exposantById(this.idExpo)
        },



    },
    
mounted(){

            let idFromRoute = parseInt(this.$route.params.id) + 1
            this.idExpo = idFromRoute - 1
            //console.log(this.$store.getters.exposantById(this.idExpo))
            this.expo = this.$store.getters.exposantById(this.idExpo)
        
    }*/

</script>