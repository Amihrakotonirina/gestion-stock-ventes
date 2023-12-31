import { defineStore } from "pinia";
//import axios from "axios";
import { fournisseurs } from "@/app/data/listFournisseurs.js";
import { uuid } from 'vue3-uuid';

export const useFournisseurStore = defineStore({
  id: 'fournisseur',

  state: () => ({
    //fournisseurs: [],
    fournisseurs: fournisseurs,
    fournisseurConnecte: null,
    fournisseurEnCours: null,
  }),

  getters: {
    getAllFournisseurs: (state) => {
      return state.fournisseurs
    },
  },

  actions: {
    async fetchFournisseur(){
      try {
        /*const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.fournisseurs = data.data
        const data = await fournisseurs
      */
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    fournisseurById(id){
      return this.getAllFournisseurs.find(fournisseur => fournisseur.id === id);
    },

    fournisseurByUuid(uuid){
      return this.getAllFournisseurs.find(fournisseur => fournisseur.uuid === uuid);
    },


    addFournisseur(fournisseur){
      fournisseur.id = Math.floor(Math.random()*1000000)
      fournisseur.uuid = uuid.v1();
      this.fournisseurs.push(fournisseur)
    },

    deleteFournisseur(fournisseur){
      const index = this.fournisseurs.indexOf(fournisseur);

        if (index !== -1) {
          this.fournisseurs.splice(index, 1);
          return true
        } else {
          return false
        }
    },

/*
    nomFournisseurById(id){
      console.log(id)
      let fournisseur = this.getFournisseurs.filter(fournisseur => fournisseur.id == id);
      console.log("fournisseur = ")
      console.log(this.fournisseur)
      if (fournisseur.length > 0) {
        return fournisseur[0].nomFournisseur;
      }
    },

    updateFournisseurConnecte(id) { 
      const fournisseur = this.getFournisseurs.filter(fournisseur => fournisseur.id == id);
      this.fournisseurConnecte = fournisseur[0];
      return this.fournisseurConnecte
    },

*/

  },

})