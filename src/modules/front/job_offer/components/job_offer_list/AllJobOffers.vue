<template>
  <div style="background-color: white !important" class="main-content">
  <b-row class="row  ">
    <b-col class="col" >

    <main  class="page projects-page" id="projets">
                        <div class="row">
                            <!--div style="margin-bottom: 15px;" class="col-md-6" v-for='offre  in offres' :key='offre .id'-->
                            <div style="margin-bottom: 15px;" class="col-md-4">
                                <!--div class="card text-center border-0 shadow" :class="'type-' + offre.poste"-->
                                <div class="card text-center border-0 shadow">
                                    
                                    <!--img class="img-bourse card-img-top img-fluid  thumbnails" :src="'/uploads/' + offre.chemin" alt="image"-->
                                    <img class="img-bourse card-img-top img-fluid thumbnails" :src="require('@/assets/images/exposition/stands/logos/logo-erohy.png')" alt="image">

                                    <div class="card-body">

                                        <h5 style="display: block; min-height: 100px;" class="card-title00"><strong>Poste : { { offre.poste }}</strong></h5>
                                        
                                        <div style="text-align: left;">
                                          <p>
                                              <span>Secteur : { { offre.secteur.secteur }}</span>
                                          </p>
                                          <p>
                                              <span>Région : { { offre.region.NomRegion }}</span>
                                          </p>
                                          <p>
                                            Type de contrat : <span>CDI </span>
                                            <!--
                                              Type de contrat : <span v-if="offre.typeContrat==1">CDI </span> <span v-if="offre.typeContrat==2">CDD </span> <span v-if="offre.typeContrat==3">Consultant </span> <span v-if="offre.typeContrat==4">Freelance </span> <span v-if="offre.typeContrat==5">Stage </span>  - <span v-if="offre.lieuTravail==1"> En locale</span><span v-if="offre.lieuTravail==2"> Télétravail</span>
                                            -->
                                          </p>
                                        </div>
                                          
                                         <!-- 
                                          <p v-html="offre.description" style="display: block; min-height: 150px;" class="card-text"></p>
                                        -->
                                          <hr>
                                        <div style="min-height: 75px;">
                                            <!--h6 style="font-size: small; text-align: right;" v-if="offre.exposant">Entité : { { offre.exposant.NomExpo }}</h6-->
                                            <h6 style="font-size: small; text-align: right;">Entité : { { offre.exposant.NomExpo }}</h6>
                                        </div>
                                        <router-link class="btn-lg btn-block btn-primary" to="/job-offer">Détails</router-link>
                                    </div>
                                </div>
                            </div>





                            <div style="margin-bottom: 15px;" class="col-md-4">
                                <div class="card text-center border-0 shadow">
                                    <img class="img-bourse card-img-top img-fluid thumbnails" :src="require('@/assets/images/exposition/stands/logos/logo-erohy.png')" alt="image">

                                    <div class="card-body">

                                        <h5 style="display: block; min-height: 100px;" class="card-title00"><strong>Poste : { { offre.poste }}</strong></h5>
                                        
                                        <div style="text-align: left;">
                                          <p>
                                              <span>Secteur : { { offre.secteur.secteur }}</span>
                                          </p>
                                          <p>
                                              <span>Région : { { offre.region.NomRegion }}</span>
                                          </p>
                                          <p>
                                            Type de contrat : <span>CDI </span>
                                          </p>
                                        </div>
                                          
                                         <!-- 
                                          <p v-html="offre.description" style="display: block; min-height: 150px;" class="card-text"></p>
                                        -->
                                          <hr>
                                        <div style="min-height: 75px;">
                                            <!--h6 style="font-size: small; text-align: right;" v-if="offre.exposant">Entité : { { offre.exposant.NomExpo }}</h6-->
                                            <h6 style="font-size: small; text-align: right;">Entité : { { offre.exposant.NomExpo }}</h6>
                                        </div>
                                        <router-link class="btn-lg btn-block btn-primary" to="/job-offer">Détails</router-link>
                                    </div>
                                </div>
                            </div>








                            <div style="margin-bottom: 15px;" class="col-md-4">
                                <div class="card text-center border-0 shadow">
                                    <img class="img-bourse card-img-top img-fluid thumbnails" :src="require('@/assets/images/exposition/stands/logos/logo-erohy.png')" alt="image">

                                    <div class="card-body">

                                        <h5 style="display: block; min-height: 100px;" class="card-title00"><strong>Poste : { { offre.poste }}</strong></h5>
                                        
                                        <div style="text-align: left;">
                                          <p>
                                              <span>Secteur : { { offre.secteur.secteur }}</span>
                                          </p>
                                          <p>
                                              <span>Région : { { offre.region.NomRegion }}</span>
                                          </p>
                                          <p>
                                            Type de contrat : <span>CDI </span>
                                          </p>
                                        </div>
                                          
                                         <!-- 
                                          <p v-html="offre.description" style="display: block; min-height: 150px;" class="card-text"></p>
                                        -->
                                          <hr>
                                        <div style="min-height: 75px;">
                                            <!--h6 style="font-size: small; text-align: right;" v-if="offre.exposant">Entité : { { offre.exposant.NomExpo }}</h6-->
                                            <h6 style="font-size: small; text-align: right;">Entité : { { offre.exposant.NomExpo }}</h6>
                                        </div>

                                        <router-link class="btn-lg btn-block btn-primary" to="/job-offer">Détails</router-link>
                                    </div>
                                </div>
                            </div>




                        </div>
    </main>
        
      
    </b-col>

  </b-row>
  </div>
      
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  
export default {
  name: 'AllJobOffers',

  components: {
  },

  data(){
    return{
      offres: [],
      message: '',
      img: '',  // Img Url , string or Array of string
      visible: false,
    }
  },
    computed: {
  ...mapGetters([
    "getEnterpriseList",
    "getJobList",
  ]),

  /*filterContacts() {
    return this.getEnterpriseList.filter((contact) => {
      return contact.name.toLowerCase().match(this.search.toLowerCase());
    });
  },*/
},


  created:function(){
    console.log("getEnterpriseList");
    console.log(this.getEnterpriseList);
  },


  methods: {
    chemin_image(chemin) {
      return "/uploads/" + chemin
    },

    scrollMeTo() {
      window.location = '#' + this.message
    },

    showImg(index) {
     // this.img = this.chemin_image(this.offres[index].Chemin)
     // this.visible = true
    },

    handleHide() {
      //this.visible = false
    }
  

  },
  
  beforeMount(){
   /* axios.get(`/api/offre_emplois/`, {headers:{'Accept': 'application/json'}})
    .then(response => { 
      this.offres = response.data
    } );*/
  },

}
</script>

