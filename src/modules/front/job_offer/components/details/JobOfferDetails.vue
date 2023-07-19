<template>
  <div class="offre0 page">
    <div class="container-img-top">
        <h3 style="color: #fff;">Plus de détails sur l'offre d'emploi</h3>
        <h5>Vous devez vous connecter pour pouvoir postuler</h5>
    </div>

    <!--b-container class="details-container">
      <b-row>
        <b-col cols="4">
          <div v-if="!isPdf()"  v-for="(image, index) in media"
                    :key="index"
                    style="display: inline-block; margin: 0 5px 5px 0">

              <img style="height : 100%; cursor: pointer;" class="img-offre card-img-top img-fluid  thumbnails" 
                  @click="openGallery(index)" 
                  :src="image.thumb">
          </div>
          <LightBox v-if="!isPdf()"
                  ref="lightbox"
                  :media="media"
                  :show-caption="false"
                  :show-light-box="false"
                />

          <a v-if="isPdf()" class="btn btn-light btn-xs" target="_blank" :href="'/uploads/' + offre.cheminDoc"><i class="fas fa-download"></i> Télécharger la fiche</a>
        </b-col>
        <b-col cols="8">
          <h5 style="display: block; margin-bottom: 30px"><strong> {{ offre.poste }}</strong></h5>
          <h6 v-if="offre.listeUsersInteresses"><i class="fas fa-star"></i><strong> {{offre.listeUsersInteresses.length}} personne(s) : Intéréssée(s)</strong></h6-->
          <!--h6 v-if="!offre.listeUsersInteresses"><i class="fas fa-star"></i><strong> 0 personne : Intéréssée</strong></h6-->
          <!--h6>{{offre.exposant.NomExpo}} <strong> : Entité</strong></h6>
          <h6>{{offre.secteur.secteur}}<strong> : Secteur</strong></h6>
          <h6>{{offre.region.NomRegion}}<strong> : Région</strong></h6>
          <hr>

          <b-button v-if="utilisateur" variant="info" href="" :click="postuler(offre.id)"> <i class="far fa-bookmark"></i> Postuler</b-button>
          <b-button href="/virtuel/offres" variant="light"> <i class="far fa-list-alt"></i> Toutes les offres</b-button>
          <b-button :href="'/virtuel/stands/' + offre.exposant.id + '/' + offre.exposant.AcronymeExpo" variant="light"> <i class="far fa-comment-dots"></i> Visiter le stand</b-button>


          <p v-html="offre.description" style="display: block; min-height: 150px;" class="card-text details-text"></p>
          <hr>
          <b-button v-if="utilisateur" variant="info" href="" :click="postuler(offre.id)"> <i class="far fa-bookmark"></i> Postuler</b-button>
          
        </b-col>
      </b-row>
    </b-container-->

    <b-container class="details-container">
      <b-row>
        <b-col cols="4">
          <div v-if="!isPdf()"  v-for="(image, index) in media"
                    :key="index"
                    style="display: inline-block; margin: 0 5px 5px 0">

              <img style="height : 100%; cursor: pointer;" class="img-offre card-img-top img-fluid  thumbnails" 
                  @click="openGallery(index)" 
                  alt="image offre"
                  :src="image.thumb">
          </div>
          <LightBox v-if="!isPdf()"
                  ref="lightbox"
                  :media="media"
                  :show-caption="false"
                  :show-light-box="false"
                />

          <a class="btn btn-light btn-xs" target="_blank" href="'/uploads/' + offre.cheminDoc"><i class="fas fa-download"></i> Télécharger la fiche</a>
        </b-col>
        <b-col cols="8">
          <h5 style="display: block; margin-bottom: 30px"><strong> { { offre.poste }}</strong></h5>
          <h6><i class="fas fa-star"></i><strong> { {offre.listeUsersInteresses.length}} personne(s) : Intéréssée(s)</strong></h6>
          <!--h6 v-if="!offre.listeUsersInteresses"><i class="fas fa-star"></i><strong> 0 personne : Intéréssée</strong></h6-->
          <h6>{ {offre.exposant.NomExpo}} <strong> : Entité</strong></h6>
          <h6>{ {offre.secteur.secteur}}<strong> : Secteur</strong></h6>
          <h6>{ {offre.region.NomRegion}}<strong> : Région</strong></h6>
          <hr>

          <b-button  variant="info" href=""> <i class="far fa-bookmark"></i> Postuler</b-button>
          <b-button class="btn-primary" variant="light"> <i class="far fa-list-alt"></i> 
           <router-link  to="/jobs">Toutes les offres</router-link>
          </b-button>
          <b-button class="btn-primary" variant="light"> <i class="far fa-list-alt"></i> 
           <router-link  to="/stands/details">Visiter le stand</router-link>
          </b-button>

          <p style="display: block; min-height: 150px;" class="card-text details-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p style="display: block; min-height: 150px;" class="card-text details-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr>
          <b-button variant="info" href=""> <i class="far fa-bookmark"></i> Postuler</b-button>
          
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>

  import Vue from 'vue'
  //import router from '../router'
  import LightBox from 'vue-it-bigger'
  import('vue-it-bigger/dist/vue-it-bigger.min.css')

  //Vue.use(router)


export default {

  name: 'JobOfferDetails',

  components: {
    LightBox,
  },
  data(){
    return{
      offre:null,
      utilisateur: null,
      media : []
    }
  },

  methods:{
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    listeImages(){
/*      this.media.length = 0
      if(this.isPdf){
              let tempImage = {
                type:'image',
                thumb: `/uploads/${this.offre.cheminDoc}`,
                caption: `Fiche de projet : ${this.offre.exposant.NomExpo}`,
                src: `/uploads/${this.offre.cheminDoc}`
              }
              this.media.push(tempImage)
        }    
*/
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


    isPdf(){
      if(this.offre){
        return false
        /*let tempType = this.offre.cheminDoc.substr(-4).toLowerCase()
          if (tempType==".pdf")
            return true
          else return false*/
      }
    },

    postuler(idoffre){

      if(this.utilisateur!=null){
        /*axios.post(`/offre-api/inscription/${idoffre}`, {
                    })
                    .then(response => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error.response.data);
                    })
      }*/
      console.log("postuler")
      }
    },


    /*favorisoffre(idoffre){

      if(this.utilisateur!=null){
        axios.post(`/offre-api/inscription/${idoffre}`, {
                    })
                    .then(response => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error.response.data);
                    })
      }
    }*/
  },

  mounted(){

    this.listeImages();
    
          var appVar = document.querySelector('#user-info');
        //console.log(appVar.dataset.userInfo)

        if(appVar.dataset.userInfo=="" || appVar.dataset.userInfo==null){
          console.log("utilisateur non connecté")
        }
        else{
          var utilisateur = JSON.parse(appVar.dataset.userInfo);
          this.utilisateur = utilisateur
        }
            axios.get(`/api/offre_emplois/${parseInt(this.$route.params.id)*1}`, {headers:{'Accept': 'application/json'}})
            .then(response => { 
              this.offre = response.data
              /*console.log("offre = ")
              console.log(this.offre)*/
              this.listeImages()
            } );
          },
};
</script>

<style scoped>
.offre{
         justify-content: center;
        justify-items: center;
        text-align: center;

    }

    .container-img-top{
        border: solid 1px transparent;
        position:relative;
        margin-left: auto;
        margin-right: auto;
        padding: 3%;
        background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25));/*,url('@/assets/images/cover-profile/qg-amikal.jpg');*/
        background-size: cover;
        background-position: center;
        box-shadow: none;
        text-align: center;
        min-height: 150px;
        margin-bottom: 15px;
        color: #fff;
}
  .details-container{
    padding: 15px;
    box-shadow: darkgray 7px 7px 7px;
    text-align: right;
    margin-top: 30px;
    margin-bottom: 100px;
  }
  .details-text{
    text-align: justify;
    margin-top: 30px;
  }

  .img-intervenant{
    height: 150px;
    display: block;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
  }

  .fa-star{
    color: yellow;
  }
</style>