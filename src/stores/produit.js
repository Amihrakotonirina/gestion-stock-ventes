import { defineStore } from "pinia";
//import axios from "axios";
import { produits } from "@/app/data/listProduits.js";

export const useProduitStore = defineStore({
  id: 'produit',

  state: () => ({
    //produits: [],
    produits: produits,
    produitConnecte: null,
    produitEnCours: null,
  }),

  getters: {
    getAllProduits: (state) => {
      return state.produits
    },
  },

  actions: {
    async fetchProduit(){
      try {
        /*const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.produits = data.data
        const data = await produits
      */
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    produitById(id){
      return this.getAllProduits.filter(produit => produit.id == id);
    },


    allProduitsByType(type){
      return this.getAllProduits.filter(produit => produit.typeProduitText == type);
    },

    updateProduitEnCours(id) {
      const produitEC = this.getProduits.filter(produit => produit.id == id);
      this.produitEnCours = produitEC[0];
    },

    addProduit(produit){
      produit.id = "".concat(Math.floor(Math.random()*1000000000000)).concat(Math.floor(Math.random()*1000000000000))
      this.produits.push(produit)
    },

    deleteProduit(produit){
      const index = this.produits.indexOf(produit);

        if (index !== -1) {
          this.produits.splice(index, 1);
          return true
        } else {
          return false
        }
    },


/*
    nomProduitById(id){
      console.log(id)
      let produit = this.getProduits.filter(produit => produit.id == id);
      console.log("produit = ")
      console.log(this.produit)
      if (produit.length > 0) {
        return produit[0].nomProduit;
      }
    },

    updateProduitConnecte(id) { 
      const produit = this.getProduits.filter(produit => produit.id == id);
      this.produitConnecte = produit[0];
      return this.produitConnecte
    },

*/

  },

})