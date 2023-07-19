<template>
     <div class="container">
      <div class="card-deck d-flex justify-content-center">

        <!--div v-for='exposant in exposants' :key='exposant.id' class="flip-card"-->
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <!--img v -if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" alt="Card image" class="card-img-top">
              <img v -if='!exposant.Logo' src="../assets/img/votrelogoici.jpg" alt="Card image" class="card-img"-->
              <img :src="require('@/assets/images/exposition/stands/logos/logo-amikalproject.png')" alt="Card image" class="card-img-top">
              <h5 class="nom-exposant text-center">{ {exposant.nom} }</h5>
            </div>

            <div class="flip-card-back">
                <h4>{ {exposant.nom} }</h4>
                <p>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                <!--p v-if='exposant.catch_phrase' class="card-text">{ {exposant.catch_phrase} }</p-->
                <router-link class="btn btn-primary" :to="{ name: 'stand-details'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-Eye"></i> Visiter le stand
                </router-link>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <!--img v -if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" alt="Card image" class="card-img-top">
              <img v -if='!exposant.Logo' src="../assets/img/votrelogoici.jpg" alt="Card image" class="card-img"-->
              <img :src="require('@/assets/images/exposition/stands/logos/logo-erohy.png')" alt="Card image" class="card-img-top">
              <h5 class="nom-exposant text-center">{ {exposant.nom} }</h5>
            </div>

            <div class="flip-card-back">
                <h4>{ {exposant.nom} }</h4>
                <p>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                <!--p v-if='exposant.catch_phrase' class="card-text">{ {exposant.catch_phrase} }</p-->
                <router-link class="btn btn-primary" :to="{ name: 'stand-details'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-Eye"></i> Visiter le stand
                </router-link>
            </div>
          </div>
        </div> 

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <!--img v -if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" alt="Card image" class="card-img-top">
              <img v -if='!exposant.Logo' src="../assets/img/votrelogoici.jpg" alt="Card image" class="card-img"-->
              <img :src="require('@/assets/images/exposition/stands/logos/logo-amikalproject.png')" alt="Card image" class="card-img-top">
              <h5 class="nom-exposant text-center">{ {exposant.nom} }</h5>
            </div>

            <div class="flip-card-back">
                <h4>{ {exposant.nom} }</h4>
                <p>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                <!--p v-if='exposant.catch_phrase' class="card-text">{ {exposant.catch_phrase} }</p-->
              <button class="btn btn-primary">
                <router-link :to="{ name: 'stand-details'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-Eye"></i> Visiter le stand
                </router-link>
              </button>
            </div>
          </div>
        </div>



      </div>

  </div>
</template>

<script>

    //import store from '@/store';
    import Vuex from 'vuex'

export default {
  name: 'ExpoSimple',
  data(){
    return {
    }
  },
  /*computed: {
        ...Vuex.mapGetters([
            'allSimpleExposant'
            ]),
        exposants() {
            return this.$store.getters.allSimpleExposant
        },

    },*/

};

</script>

<style scoped>
.container{
    text-align:center; 
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2%;
}

.btn{
  position: absolute;
  background-color: #28a745;
  border:0;
  bottom:0;
  margin-bottom: 10%;
  margin-right: 10%
}
  
.card-deck{
  margin: auto;
}

.flip-card {
  margin: 2%; 
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #fff;
  color: #183669;
}

.flip-card-back {
  background-color: #0009f9;
  color: white;
  padding: 5%;
  transform: rotateY(180deg);
}


.nom-exposant{
  display: block;
  margin-top: 40px;
  padding-top: 30px;
  font-weight: bolder;
  color: #fff;
  background-color: #183669;
  height: 37%;
  width: 100%;
}

</style>