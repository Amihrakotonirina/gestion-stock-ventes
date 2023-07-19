<template>
  <div class="main-content">
  <breadcumb :page="'Carte de visite'" :folder="'CV'" /> 
    <div class="imgBx" width="50%" >
            <!--img class="img-fluid" alt="Responsive image" src="../assets/img/orient.jpg" width="50%" -->
        </div>
    <VisitCard></VisitCard>
  </div>
</template>

<script>
// @ is an alias to /src
import VisitCard from '@/modules/back/user/components/visit_card/VisitCard.vue'

export default {
  name: 'visit-card',
  components: {
    VisitCard,
  }
}
</script>