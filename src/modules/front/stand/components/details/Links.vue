<template>
  <div class="information">
        <div class="link">
          <!--b-icon v-b-modal.my-modal class="icn" icon="link45deg" font-scale="5" animation="throb" aria-hidden="true"></b-icon-->
          <div class="ring-link icon-buton" title="Cliquez ici pour visiter les liens externes">
            <!--b-icon v-b-modal.modal-link class="icn" icon="link45deg" font-scale="5" animation="throb" aria-hidden="true"></b-icon-->
            <i  
                  v-b-popover.hover.righttop="'Cliquez ici pour visiter les liens externes'"
                  title="e-rohy"
                  class="i-Link-2 icn" v-b-modal.modal-link animation="throb" aria-hidden="true"></i>
          </div>
          <b-modal id="modal-link" title="Liens" no-close-on-backdrop centered size="lg" cancel-title="Fermer" ok-only ok-title="Fermer">
            <ul>
              <!--li>
                  <b-icon icon="globe" aria-hidden="true"> </b-icon><strong> Site web : </strong>
                  <a v-if="exposant.SiteWeb" :href="exposant.SiteWeb">{{exposant.SiteWeb}}</a>
              </li>
              
              <li>
                <b-icon icon="facebook" aria-hidden="true"></b-icon><strong> Facebook : </strong>
                <a v-if="exposant.Facebook" :href="exposant.Facebook"> {{exposant.Facebook}}</a>
              </li>

              <li>
                <b-icon icon="linkedin" aria-hidden="true"></b-icon><strong> LinkedIn : </strong>
                <a v-if="exposant.LinkedIn" :href="exposant.LinkedIn"> {{exposant.LinkedIn}}</a>
              </li>
                
              <li>
                <b-icon icon="skype" aria-hidden="true"> </b-icon><strong> Skype : </strong>
                <a v-if="exposant.Skype" :href="exposant.Skype">{{exposant.Skype}}</a>
              </li-->

            </ul>
          </b-modal>
        </div>
  </div>
</template>


<script>
  /*
  import Vue from 'vue'
  import store from '../../store';
  import Vuex from 'vuex'
  import router from '../../router'
  Vue.use(router)
*/
export default {
  name: 'Links',

  data(){
    return{
      idExpo:null,
      expo:null,

  }
},
/*computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),


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
}
</script>