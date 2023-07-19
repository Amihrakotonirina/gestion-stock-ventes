JobOfferDetails
<template>
  <div class="main-content">
    <div class="container-img-top">
        <h3 style="color:  #fff; text-shadow:black 1px 0 5px;">Détails OE</h3> 
    </div>

      <h4></h4>


        <JobOfferDetails></JobOfferDetails>

  </div>
</template>

<script>
import JobOfferDetails from '@/modules/front/job_offer/components/details/JobOfferDetails.vue'

export default {
  name: 'Offres',
  components: {
    JobOfferDetails
  }
};
</script>

<style scoped>

</style>
