<template>
<!--     <div class="container expo">
        <div v-for='exposant in exposants' :key='exposant.id' class="col-md-4  card sors row">
                <div class="imgBx" >
                    <a :href="'/virtuel/stands/' + exposant.id"><img v-if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" ></a>
                    <a :href="'/virtuel/stands/' + exposant.id"><img v-if='!exposant.Logo' src="../assets/img/votrelogoici.jpg" ></a>
                </div>
                    <h4 class="titre">{{exposant.NomExpo}}</h4>
                        <div class="content">
                             <p v-if='exposant.phraseAccroche'>{{exposant.phraseAccroche}}</p>
                             <p v-if='!exposant.phraseAccroche'>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand</p>
                            <a :href="'/virtuel/stands/' + exposant.id" class="btn"> Visiter le stand ></a>
                        </div> -->
                  


                     <!--div id="all-exposants" class="flip-card col-md-3" style="margin:30px;">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img v-if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" >
                            <img v-if='!exposant.Logo' src="../assets/img/votrelogoici.jpg" >

                          <div class="card-body text-center">
                              <a class="btn btn-warning btn-block btn-xs" :href="'/virtuel/stands/' + exposant.id"> {{exposant.AcronymeExpo}} </a>
                          </div>
                      </div> 
                      <div class="flip-card-back">
                        <div class="container-flip-card-back">

                  <h5 class="nom-expo"><strong> {{ exposant.AcronymeExpo }} </strong></h5>
                  <br>
                    <p v-if="exposant.phraseAccroche" class="small">{{ exposant.phraseAccroche }}</p>
                    <p v-if="!exposant.phraseAccroche"  class="small">Bienvenu sur le stand de {{ exposant.NomExpo }}</p>
              </div>

                <a :href="'/virtuel/stands/' + exposant.id" class="btn"> Visiter le stand ></a>
                
              </div> 
                    </div!-->
<!--                 </div> 
        </div>

    </div> -->
  <div class="container">
    <div class="card-deck d-flex justify-content-center">

      <div v-for='exposant in exposants' :key='exposant.id' class="flip-card">

        <div class="flip-card-inner">

          <div class="flip-card-front">
            <img v-if='exposant.Logo' :src="'/img/logo-largeur-500/' + exposant.Logo" alt="Card image" class="card-img-top">
            <img v-if='!exposant.Logo' style="height: 333px;" src="../assets/img/votrelogoici.jpg" alt="Card image" class="card-img">
            <h5 class="nom-exposant text-center">{{exposant.NomExpo}}</h5>
          </div>

          <div class="flip-card-back text-center">
              <h4>{{exposant.NomExpo}}</h4>
              <div class="container-text-accrocheur">
                <p v-if='!exposant.phraseAccroche'>Veuillez cliquer sur le bouton ci-dessous pour visiter le stand.</p>
                <p v-if='exposant.phraseAccroche' class="card-text">{{exposant.phraseAccroche}}</p>
              </div>
              <a v-if="exposant.id!=33" :href="'/virtuel/stands/' + exposant.id + '/' + exposant.AcronymeExpo" class="btn btn-primary"> Visiter le stand</a>
              <a v-if="exposant.id==33" href="/virtuel/exposant/2"title="Visiter le village Qualitropic" class="btn btn btn-primary"> <small>Visiter le Village</small></a>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>

    import store from '../store';
    import Vuex from 'vuex'

export default {
  name: 'Partenaire',
  computed: {
        ...Vuex.mapGetters([
            'allPartenaires'
            ]),
        exposants() {
            console.log(this.$store.getters.allPartenaires)
            return this.$store.getters.allPartenaires
        },

    },

};

</script>

<style scoped>
.container{
    text-align:center; 
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2%;
    background-color: #fff;
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