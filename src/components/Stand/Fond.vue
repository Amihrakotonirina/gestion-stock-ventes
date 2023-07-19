<template>
  <div class="video">
          <div class="Fond">
            <img class="poster" :src="require('../../assets/img/video-play.png')" alt="Fluid-grow image"/>
          </div>
          <div class="box-video icon-bouton-container">
            <!--div class="ring-box-video icon-buton" v-b-tooltip.hover.v-danger title="Regarder les vidéos"-->
            <div class="ring-box-video icon-buton" title="Visualiser nos vidéos ">
              <b-icon v-b-modal.modal-multi-1 class="icn" icon="play-btn-fill" aria-hidden="true"></b-icon>
            </div>
        
          <b-modal class="back" id="modal-multi-1" size="xl" no-close-on-backdrop ok-only ok-title="Fermer" no-stacking title="Vidéo" centered>
            
              <div>
                <ul
                  style="margin: 0; padding: 0"
                >
                  <li
                    v-for="(image, index) in media"
                    :key="index"
                    style="display: inline-block; margin: 0 5px 5px 0"
                  >
                    <img
                      :src="image.thumb"
                      style="height: 100px; cursor: pointer"
                      @click="openGallery(index)"
                    >
                  </li>
                </ul>

                <LightBox
                  ref="lightbox"
                  :media="media"
                  :show-caption="true"
                  :show-light-box="false"
                />
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
  import LightBox from 'vue-it-bigger'
  import('vue-it-bigger/dist/vue-it-bigger.min.css')
  Vue.use(router)

export default {
  name: 'Fond',
  components: {
    LightBox,
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    extractYoutubeId(url){
           var match = url.match(/v=([0-9a-z_-]{1,20})/i)
           return (match ? match['1'] : false)
    },

    listeVideos(){

        for (const video in this.expo.Videos ){
          /*console.log('video lien = ')
          console.log(`${video}.Lien: ${this.expo.Videos[video].Lien}`);*/
          const idYoutube = this.extractYoutubeId(`${this.expo.Videos[video].Lien}`)
          /*let idYoutube = this.extractYoutubeId('https://www.youtube.com/watch?v=qga4wQf4YFc')
          console.log(idYoutube)*/
          const tempVideo = {
            type:'youtube',
            thumb:'https://img.youtube.com/vi/'+ idYoutube +'/hqdefault.jpg',
            caption: `${this.expo.Videos[video].Description}`,
            id: idYoutube
          }
          this.media.push(tempVideo)
        }
      
    }
  },


data(){
  return{
    idExpo:null,
    expo: [],
    media : []
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
          let idFromRoute = parseInt(this.$route.params.id) + 1
            this.idExpo = idFromRoute - 1
            this.expo = this.$store.getters.exposantById(this.idExpo)
            this.listeVideos()
            return this.$store.getters.exposantById(this.idExpo)
        }*/
  }, 
  // beforeMount(){
  //       let idFromRoute = parseInt(this.$route.params.id) + 1
  //       this.idExpo = idFromRoute - 1
  //       let url = `/api/exposants/${this.idExpo}`
  //       axios.get(url , {headers:{'Accept': 'application/json'}})
  //       .then(response => { 
  //         this.expo = response.data
  //         this.listeVideos();
  //       } );


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
      this.listeVideos()
    } );
  },
    
}
</script>