<template>
      <div class="photo">
          <div class="Fly icon-bouton-container">
              <!--div class="ring-fly icon-buton" v-b-tooltip.hover.v-danger title="Visualiser les photos"-->
              <div class="ring-fly icon-buton" title="Découvrir notre galerie photo">
                <b-icon v-b-modal.modal-tall class="icn" icon="camera-fill" animation="throb" aria-hidden="true"></b-icon>
              </div>
            <b-modal id="modal-tall" no-close-on-backdrop ok-only ok-title="Fermer" centered size="lg" title="Galerie Photos">
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
          <!--div v-if="idExpo!=7"> <!- différent de cnam -->
		        <div v-for="image in expo.Images" :key='image.id'>
			          <div class="fly">
			            <img v-if="image.role=='rollup'" class="pub1" :src="'/uploads/' + image.Chemin" alt=""/>
			          </div>
			          <div class="fly">
			            <img v-if="image.role=='decoration1'" class="pub2" :src="'/uploads/' + image.Chemin" alt=""/>
			          </div>
			          <div class="fy">
			            <img v-if="image.role=='decoration2'" class="pub3" :src="'/uploads/' + image.Chemin" alt=""/>
			          </div>
                <div class="fy">
                  <img v-if="image.role=='decoration3'" class="pub4" :src="'/uploads/' + image.Chemin" alt=""/>
                </div>
	          </div>
        <!--/div>
          <!-div v-if="idExpo==7">  <!- expo = cnam ->
		        <div v-for="image in expo.Images" :key='image.id'>
			          <div class="fly">
			            <img v-if="image.role=='rollup'" class="pub1" :src="'/uploads/' + image.Chemin" alt=""/>
			          </div>
			          <div class="fly">
			            <img v-if="image.role=='decoration1'" class="pub2-cnam" :src="'/uploads/' + image.Chemin" alt=""/>
			          </div>
	          </div>
        </div-->
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
  name: 'Flyers',
  components: {
    LightBox,
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    listeImages(){
      /*this.expo = this.$store.getters.exposantById(this.idExpo)*/
      this.media.length = 0
        for (const image in this.expo.Images){
          if(`${this.expo.Images[image].role}`=='galerie'){
              let tempImage = {
                type:'image',
                thumb: `/uploads/${this.expo.Images[image].Chemin}`,
                caption: `Galerie d'images : ${this.expo.NomExpo}`,
                src: `/uploads/${this.expo.Images[image].Chemin}`
              }
              this.media.push(tempImage)
            }
          } 
    },

      // 


  },
  data(){
    return{
      idExpo:null,
      expo: null,
      media : []
    }
  },
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),

        /*exposant() {
          console.log(`nande e ${this.media}`)
          
            // return this.$store.getters.exposantById(this.idExpo)
          return this.media
        },*/


      
    },

  // beforeMount(){
  //   let idFromRoute = parseInt(this.$route.params.id) + 1
  //   this.idExpo = idFromRoute - 1
  //   let url = `/api/exposants/${this.idExpo}`
  //   axios.get(url , {headers:{'Accept': 'application/json'}})
  //   .then(response => { 
  //     this.expo = response.data
  //     this.listeImages()
  //   } );
  // },

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
      this.listeImages()
    } );
  },

 

}
</script>

<style scoped>


</style>