<template>

  <div class="Accueil" :style="cssProps">
    <MastHead />
    <SalonInfo />
    <Features />
    <Contact />
    <Partner />
    <!--Caroussel /-->
    <!-- FooterAccueil / -->
    
  </div>
</template>

<script>

// @ is an alias to /src
import MastHead from '@/modules/home/components/MastHead.vue'
import SalonInfo from '@/modules/home/components/SalonInfo.vue'
import Features from '@/modules/home/components/Features.vue'
import Contact from '@/modules/home/components/Contact.vue'
//import Caroussel from '../components/Caroussel.vue'
//import FooterAccueil from '../components/FooterAccueil.vue'

export default {
  name: 'Home',
  components: {
    MastHead,
    SalonInfo,
    Features,
    Contact,
    //Caroussel,
    //FooterAccueil
  },
  data() {
    return {
      cssProps: {
            backgroundImage: `url(${require('@/assets/images/cover-profile/qg-amikal.jpg')})`,
        }
    }
  }
}
</script>

<style lang="scss">
.Accueil{
  /*background-image: url('../assets/erohy/img/cover-profile/qg-amikal.jpg');*/
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
   margin: 0 ;
padding: 0;
outline: 0;
 
}
</style>