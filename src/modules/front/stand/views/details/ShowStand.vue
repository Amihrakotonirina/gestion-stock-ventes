<template>
  <div class="main-content">
    <breadcumb :page="'détails  '" :folder="'stand'" />
    
    <div class="stand">
      <div class="general">
         <!--b-img class="fnd" :src="require('../assets/img/fond-stand.jpg')" fluid-grow alt="Fluid-grow image"></b-img-->
         <b-img class="fnd" src="/img/fond_stand/fond-stand-erohy-temp.jpg" fluid-grow alt=""></b-img>
        <Logo></Logo>
        <Description></Description>
        <Images></Images>
        <Documents></Documents>
        <Links></Links>

        <!--Fondstand></Fondstand-->
        <!--flyers></flyers-->
        <!--div class="car">
                  <caroussel></caroussel>
              </div-->
        <!--logo></logo>
        <OffreEmploi></OffreEmploi>
        <fond ></fond>
        <conseil></conseil>
        <depot></depot>
        <info></info>
        <phrase></phrase>
        <chat></chat -->
         <!--a href="/virtuel/exposant/1" class="btn btn-block"> Tous les exposants</a-->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Logo from '@/modules/front/stand/components/details/Logo.vue'
import Description from '@/modules/front/stand/components/details/Description.vue'
import Images from '@/modules/front/stand/components/details/Images.vue'
import Documents from '@/modules/front/stand/components/details/Documents.vue'
import Links from '@/modules/front/stand/components/details/Links.vue'

/*
import Conseil from '../components/Stand/Conseil.vue'
import OffreEmploi from '../components/Stand/offreEmploi.vue'
//import Caroussel from '../components/Caroussel.vue'
//import Fondstand from '../components/Stand/Fondstand.vue'
import Flyers from '../components/Stand/Flyers.vue'
import Fond from '../components/Stand/Fond.vue'
import Info from '../components/Stand/Info.vue'
import Logo from '../components/Stand/Logo.vue'
import Phrase from '../components/Stand/Phrase.vue'
import Depot from '../components/Stand/Depot.vue'
//import Chat from '../components/Stand/Chat.vue'

*/


export default {
  name: 'show-stand',
  components: {
    Logo,
    Description,
    Images,
    Documents,
    Links
    /*Fond,
    //Fondstand,
    Flyers,
    Logo,
    Conseil,
    Info,
    Phrase,
    Depot,
    //Chat,
    //Caroussel,
    OffreEmploi*/
  },
}
</script>

<style scoped>
.stand{
  display: block;
  padding-top: 5%;
}
</style>
