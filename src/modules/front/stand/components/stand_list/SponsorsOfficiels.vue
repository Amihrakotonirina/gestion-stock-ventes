<template>
<!--     <div class="container expo">
        <div v-for='exposant in exposants' :key='exposant.id' class="col-md-4 card sors" style="height:65%">
            <div class="imgBx" >
                <img :src="'/img/logo-500x500/' + exposant.Logo" >
            </div>
            <h4 class="titre">{{exposant.NomExpo}}</h4>
                <div class="content">
                     <p v-if='exposant.phraseAccroche'>{{ cut_text(exposant.phraseAccroche) }}</p>
                     <p v-if='!exposant.phraseAccroche'>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                    <a :href="'/virtuel/stands/' + exposant.id" class="btn btn-lg"> Visiter le stand ></a>
                </div>
        </div>
    </div> -->


  <div class="container">

    <div class="card-deck d-flex justify-content-center">

      <div v-for='exposant in exposants' :key='exposant.id' class="flip-card">

        <div class="flip-card-inner">

          <div class="flip-card-front">
            <img v-if='exposant.Logo' :src="require('@/assets/images/logo_500x500.png')" alt="Card image" class="card-img-top">
            <img v-if='!exposant.Logo' :src="require('@/assets/images/logo_500x500.png')" alt="Card image" class="card-img">
            <h5 class="nom-exposant text-center">{{exposant.NomExpo}}</h5>
          </div>

          <div class="flip-card-back">
              <h4>{{exposant.NomExpo}}</h4>
              <div class="container-text-accrocheur">
                  <p v-if='!exposant.phraseAccroche' class="card-text">Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                  <p v-if='exposant.phraseAccroche' style="height: 333px;" class="card-text">{{exposant.phraseAccroche}}</p>
              </div>
              <a :href="'/virtuel/stands/' + exposant.id + '/' + exposant.AcronymeExpo" class="btn btn-primary"> Visiter le stand</a>
              <!--a v-if="exposant.id==33" href="/virtuel/exposant/2"title="Visiter le village Qualitropic" class="btn btn-primary"> Village Qualitropic</a-->
              
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import store from '@/store'
import Vuex from 'vuex'


export default {
  name: 'SponsorsOfficiels',
  data() {
        return {
          msg: 'Tous les stands'
        }

    },

    computed: {
        ...Vuex.mapGetters([
            'allSponsorsOfficiels',
            'exposantById'
            ]),

        exposants() {
            //console.log(this.$store.getters.allSponsorsOfficiels)
            return this.$store.getters.allSponsorsOfficiels
        },
        currentExposant() {
            //console.log(this.$store.getters.allSponsorsOfficiels)
            return this.$store.getters.exposantById(this.$route.params.num)
        },

    },


    mounted() {
    //this.$store.dispatch("getExposants");
    /*let parametreRoute = parseInt(this.$route.params.num) + 1
    let valeur = parametreRoute - 1
    console.log(this.$store.getters.exposantById(valeur))
    console.log(valeur)*/
    },

/*    methods: {
        cut_text: function(desc){
            if (desc.length > 120) {
                desc = desc.substring(0, desc.lastIndexOf(" ")) + "...";
            }
            return desc
        }
   }*/
}
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
  color: black;
}

.flip-card-back {
  background-color: #183669;
  color: white;
  padding: 5%;
  transform: rotateY(180deg);
} 

.container-text-accrocheur {
  display: flex;
  min-height: 100px;
}

.card-text {
  margin: auto;
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