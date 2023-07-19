<template>
  <div class="box-description">
    <div class="description icon-bouton-container">
      <div class="ring-description icon-buton" title="Cliquez ici pour connaitre l'entité">
        <!--b-icon v-show="expo" v-b-modal.modal-lg class="icn" icon="house-door-fill" animation="throb" aria-hidden="true"></b-icon-->
        <i 
            v-b-popover.hover.righttop="'Cliquez ici pour connaitre l\'entité'"
            title="e-rohy"
            class="i-Home1 icn" v-b-modal.modal-lg animation="throb" aria-hidden="true"></i>
      </div>
      <b-modal id="modal-lg" size="lg" no-close-on-backdrop ok-only ok-title="Fermer" centered title="Présentation">
        <!--p v-html="expo.PresentationGenerale" class="presentation"></p-->
        <p>Présentation de l'entité</p>
      </b-modal>
    </div>

  </div>
</template>


<script>
  //import Vue from 'vue'
  //import store from '../../store';
  //import Vuex from 'vuex'
  //import router from '../../router'
  //Vue.use(router)

export default {
  name: 'Description',

  data(){
    return{
      expo : null
    }
  },
  
  beforeMount(){
    //let acronymeFromRoute = this.$route.params.acronyme

    //let url = `/api/exposants?AcronymeExpo=${acronymeFromRoute.toString()}`
    //axios.get(url , {headers:{'Accept': 'application/json'}})
    //.then(response => { 
    //  this.expo = response.data[0]

    //} );
  },
}
</script>