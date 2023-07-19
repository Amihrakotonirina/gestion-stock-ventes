<template>

      <div class="photo">
          <div class="image icon-bouton-container">
              <!--div class="ring-fly icon-buton" v-b-tooltip.hover.v-danger title="Visualiser les photos"-->
              <div class="ring-image icon-buton icn" title="Cliquez ici pour visualiser les photos">
                <!--b-icon v-b-modal.modal-tall class="icn" icon="camera-fill" animation="throb" aria-hidden="true"></b-icon-->
                <i 
                  v-b-popover.hover.righttop="'Cliquez ici pour visualiser les photos'"
                  title="e-rohy"
                  class="i-Landscape " v-b-modal.modal-galery animation="throb" aria-hidden="true"></i>
              </div>
            <b-modal id="modal-galery" no-close-on-backdrop ok-only ok-title="Fermer" centered size="lg" title="Galerie photos">
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
            <!--div v-for="image in expo.Images" :key='image.id'-->
                <div class="fly">
                  <img class="pub1" :src="require('@/assets/images/logo_500x500.png')" alt=""/>
                  <!--img v-if="image.role=='rollup'" class="pub1" :src="'/uploads/' + image.Chemin" alt=""/-->
                </div>
                <div class="fly">
                  <!--img v-if="image.role=='decoration1'" class="pub2" :src="'/uploads/' + image.Chemin" alt=""/-->
                  <img class="pub2" :src="require('@/assets/images/logo_500x500.png')" alt=""/>
                </div>
                <div class="fy">
                  <!--img v-if="image.role=='decoration2'" class="pub3" :src="'/uploads/' + image.Chemin" alt=""/-->
                  <img class="pub3" :src="require('@/assets/images/logo_500x500.png')" alt=""/>
                </div>
                <div class="fy">
                  <!--img v-if="image.role=='decoration3'" class="pub4" :src="'/uploads/' + image.Chemin" alt=""/-->
                  <img class="pub4" :src="require('@/assets/images/logo_500x500.png')" alt=""/>
                </div>
            <!--/div-->
      </div>
</template>


<script>
//  import Vue from 'vue'
//  import store from '../../store';
//  import Vuex from 'vuex'
//  import router from '../../router'
  import LightBox from 'vue-it-bigger'
  import('vue-it-bigger/dist/vue-it-bigger.min.css')
//  Vue.use(router)

export default {
  name: 'Images',
  components: {
    LightBox,
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    listeImages(){
      this.media.length = 0
       /* for (const image in this.expo.Images){
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
          */

          let tempImage = {
            type:'image',
            thumb: "https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732",
            caption: "galerie 001",
            src: "https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732"
          }
        this.media.push(tempImage)
          
    },

      


  },
  data(){
    return{
      idExpo:null,
      expo: null,
      media : []
    }
  },
  /*
computed: {
        ...Vuex.mapGetters([
            'theCurrentExposant',
            'allSponsorsOfficiels',
            'exposantById'
            ]),
 
    },


  beforeMount(){
    let acronymeFromRoute = this.$route.params.acronyme

    let url = `/api/exposants?AcronymeExpo=${acronymeFromRoute.toString()}`
    axios.get(url , {headers:{'Accept': 'application/json'}})
    .then(response => { 
      this.expo = response.data[0]
      this.listeImages()
    } );
  },

 */

 beforeMount(){
  this.listeImages()
  console.log(this.media)
 }

}
</script>

<style scoped>


</style>