<template>
  <div class="information">
        <div class="info">
          <!--b-icon v-b-modal.my-modal class="icn" icon="link45deg" font-scale="5" animation="throb" aria-hidden="true"></b-icon-->
          <div class="ring-info icon-buton" title="Visiter notre site web et nos réseaux sociaux ">
            <b-icon v-b-modal.my-modal class="icn" icon="link45deg" font-scale="5" animation="throb" aria-hidden="true"></b-icon>
          </div>
          <b-modal id="my-modal" title="Liens" no-close-on-backdrop centered size="lg" cancel-title="Fermer" ok-only ok-title="Fermer">
            <ul>
              <li>
                  <b-icon icon="globe" aria-hidden="true"> </b-icon><strong> Site web : </strong>
                  <a v-if="exposant.SiteWeb" target="_blank" :href="exposant.SiteWeb">{{exposant.SiteWeb}}</a>
              </li>
              
              <li>
                <b-icon icon="facebook" aria-hidden="true"></b-icon><strong> Facebook : </strong>
                <a v-if="exposant.Facebook" target="_blank" :href="exposant.Facebook"> {{exposant.Facebook}}</a>
              </li>

              <li>
                <b-icon icon="linkedin" aria-hidden="true"></b-icon><strong> LinkedIn : </strong>
                <a v-if="exposant.LinkedIn" target="_blank" :href="exposant.LinkedIn"> {{exposant.LinkedIn}}</a>
              </li>
                
              <li>
                <b-icon icon="skype" aria-hidden="true"> </b-icon><strong> Skype : </strong>
                <a v-if="exposant.Skype" target="_blank" :href="exposant.Skype">{{exposant.Skype}}</a>
              </li>

            </ul>
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
  name: 'Info',

  data(){
    return{
      idExpo:null,
      expo:null,

  }
},
computed: {
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
        
    }
}
</script>