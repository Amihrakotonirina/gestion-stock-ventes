<template>
  <div class="accueil page">
    <div class="general">
      <b-img :src="require('@/assets/images/exposition/fond_accueil_erohy_temp.jpg')" fluid-grow alt=""></b-img>
      <div class="text-center">
        <img id="animation-image-accueil" src="@/assets/images/exposition/animation-image-accueil.gif" fluid-grow></img>
      </div>
        
        <div class="text-mural">
          <div class="grand-text">
            <router-link class="text-expo txt" to="/lobby/stands">HALL D'EXPOSITION</router-link>
          </div>

          <div class="text-haut1">
            <router-link class="position1 txt" to="/lobby">CONFERENCES</router-link>
          </div>

          <div class="text-haut2">
            <router-link class="position2 txt" to="/jobs">OFFRES D'EMPLOI</router-link>
          </div>
          
          <div class="text-secondaire1">
              <router-link class="gauche txt" to="/lobby">FICHES METIERS</router-link>
          </div>
          <div class="text-secondaire2">
              <router-link class="droite txt" to="/test-orientation">TEST D'ORIENTATION</router-link>
          </div>

        </div>

        <!--div class="button-area">
          <router-link id="btn-cartographie" class="lien" to="/lobby">Cartographie <br> des acteurs</router-link>
          <router-link id="btn-exposition-virtuelle" class="lien" to="/lobby">Hall <br> d'expostition</router-link>
          <router-link id="btn-conference" class="lien" to="/lobby">Conférences <br> et pitch</router-link>
          <router-link id="btn-bourse" class="lien" to="/lobby">Bourse aux <br> partenariats</router-link>
          <router-link id="btn-exposition-photo" class="lien" to="/lobby">Exposition <br> photos</router-link>
          <router-link id="btn-village-qualitropic" class="lien" to="/lobby"> Village <br> Qualitropic </router-link>
        </div-->
    </div>
  </div>
</template>


<script>
export default {
  name: 'Lobby'
}
</script>
<style scoped>

  #btn-cartographie{
    /*background-color: #cdde00;*/
    background-color: rgba(205, 222, 0, 0.85);
  }
  #btn-conference{
    /*background-color: #0009f9;*/
    background-color: rgba(0, 9, 249, 0.85);
  }
  #btn-exposition-virtuelle{
    /*background-color: #ff9e18;*/
    background-color: rgba(255, 158, 24, 0.85);
  }
  #btn-bourse{
    /*background-color: #f5333f;*/
    background-color: rgba(245, 51, 63, 0.85);
  }
  #btn-exposition-photo{
    /*background-color: #0009f9;*/
    background-color:rgba(255, 158, 24, 0.85);
  }
  #btn-village-qualitropic{
    /*background-color: #0009f9;*/
    background-color: rgba(205, 222, 0, 0.85);
  }
</style>
