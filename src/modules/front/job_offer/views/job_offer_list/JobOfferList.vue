<template>
  <div class="main-content">
    <div class="container-img-top">
        <h3 style="color:  #fff; text-shadow:black 1px 0 5px;">Toutes les offres d'emploi</h3> 
    </div>

      <h4></h4>


        <AllJobOffers></AllJobOffers>

  </div>
</template>

<script>
import AllJobOffers from '@/modules/front/job_offer/components/job_offer_list/AllJobOffers.vue'

export default {
  name: 'Offres',
  components: {
    AllJobOffers
  }
};
</script>

<style scoped>
.offer{
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
        /*background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url(../assets/img/clustergreen/Bourse-aux-partenariats.png);*/
        background-size: cover;
        background-position: center;
        box-shadow: none;
        text-align: center;
        min-height: 150px;
}

</style>
