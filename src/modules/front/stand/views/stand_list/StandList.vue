<template>
  <div class="main-content page">
        <breadcumb :page="'Liste des exposants'" :folder="'Stand list'" />
        <div class="card2">
            <h3 style="color:#fff;">Stands d'exposition</h3>  
        </div>

          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section lien-active"> Expo_simple </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>
            
        <h2 id="expo-simple" class="big_title"> EXPO SIMPLE<br><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon></h2>
            <ExpoSimple></ExpoSimple>

          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section lien-active" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>
            
        <h2 id="sponsors-officiels" class="big_title">Sponsors Officiels<br><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon></h2>
            <SponsorsOfficiels></SponsorsOfficiels>


          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section lien-active" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>

        <h2 id="exposant-premium" class="big_title" style="margin-top:5%">Sponsors<br><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon></h2>
            <sponsors></sponsors>


          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section lien-active" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>
        
        <h2 id="partenaires" class="big_title">Partenaires <br><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon></h2>
            <partenaire></partenaire>
            


          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section lien-active" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>

        <h2 id="exposant-premium" class="big_title" style="margin-top:5%">Volamena<br></h2>
            <volamena></volamena>

          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section lien-active" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>

        <h2 id="exposant-premium" class="big_title" style="margin-top:5%">Kypreso<br></h2>
            <kypreso></kypreso>


          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section lien-active" > Sedera </a>
              <a href="#organisateurs" class="lien-section"> Organisateur </a>
          </div>

        <h2 id="simple-exposants" class="big_title" style="margin-top:5%">Exposants<br></h2>
            <sedera></sedera>



          <div class="menu-section">
              <a href="#sponsors-officiels" class="lien-section" > Sponsors officiels </a>
              <a href="#exposant-premium" class="lien-section" > Sponsors </a>
              <a href="#partenaires" class="lien-section" > Partenaires </a>
              <a href="#simple-exposants" class="lien-section" > Volamena </a>
              <a href="#simple-exposants" class="lien-section" > Kypreso </a>
              <a href="#simple-exposants" class="lien-section" > Sedera </a>
              <a href="#organisateurs" class="lien-section lien-active"> Organisateur </a>
          </div>
        
        <h2 id="organisateurs" class="big_title">Organisateur<br><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon><b-icon icon="star" variant="warning" font-scale="0.5"></b-icon></h2>
            <Organisateurs></Organisateurs>

  </div>
</template>

<script>
import Partenaire from '@/modules/front/stand/components/stand_list/Partenaire.vue'
import Sponsors from '@/modules/front/stand/components/stand_list/Sponsors.vue'
import Volamena from '@/modules/front/stand/components/stand_list/Volamena.vue'
import Kypreso from '@/modules/front/stand/components/stand_list/Kypreso.vue'
import Sedera from '@/modules/front/stand/components/stand_list/Sedera.vue'
import Organisateurs from '@/modules/front/stand/components/stand_list/Organisateurs.vue'
import SponsorsOfficiels from '@/modules/front/stand/components/stand_list/SponsorsOfficiels.vue'
import ExpoSimple from '@/modules/front/stand/components/stand_list/Expo_simple.vue'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'StandList',
  components: {
    ExpoSimple,Partenaire,Sponsors,SponsorsOfficiels,Organisateurs, Volamena, Kypreso, Sedera
  },
  data(){
    return{
    }
  },
    computed: {
  ...mapGetters([
    "getAllExposants",
  ]),

  /*filterContacts() {
    return this.getEnterpriseList.filter((contact) => {
      return contact.name.toLowerCase().match(this.search.toLowerCase());
    });
  },*/
},


  created:function(){
    console.log("getAllExposants");
    console.log(this.getAllExposants);
  },


};
</script>

<style scoped>
.exposant{
    
    justify-content: center;
    justify-items: center;
    text-align: center;
    
}

.lien-section{
    margin: 15px;
    padding: 15px;
    text-decoration: none;
    padding-bottom: 5px;
    color: #a20e0e;
}

.menu-section{
    margin-top: 50px;
}

.lien-section:hover{
    color: #c41212;
    border-bottom: solid #c41212 2px;
}

.lien-active{
    color: #c41212;
    border-bottom: solid #c41212 2px;
}
</style>