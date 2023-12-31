import { defineStore } from "pinia";
//import axios from "axios";
import { categories } from "@/app/data/listCategories.js";
import { uuid } from 'vue3-uuid';

export const useCategorieStore = defineStore({
  id: 'categorie',

  state: () => ({
    //categories: [],
    categories: categories,
    categorieConnecte: null,
    categorieEnCours: null,
  }),

  getters: {
    getAllCategories: (state) => {
      return state.categories
    },
  },

  actions: {
    async fetchCategorie(){
      try {
        /*const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.categories = data.data
        const data = await categories
      */
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    categorieById(id){
      return this.getAllCategories.find(categorie => categorie.id === id);
    },

    categorieByUuid(uuid){
      return this.getAllCategories.find(categorie => categorie.uuid === uuid);
    },


    addCategorie(categorie){
      categorie.id = Math.floor(Math.random()*1000000)
      categorie.uuid = uuid.v1()
      this.categories.push(categorie)
    },
    
    deleteCategorie(categorie){
      const index = this.categories.indexOf(categorie);

        if (index !== -1) {
          this.categories.splice(index, 1);
          return true
        } else {
          return false
        }
    },
/*
    nomCategorieById(id){
      console.log(id)
      let categorie = this.getCategories.filter(categorie => categorie.id == id);
      console.log("categorie = ")
      console.log(this.categorie)
      if (categorie.length > 0) {
        return categorie[0].nomCategorie;
      }
    },

    updateCategorieConnecte(id) { 
      const categorie = this.getCategories.filter(categorie => categorie.id == id);
      this.categorieConnecte = categorie[0];
      return this.categorieConnecte
    },

*/

  },

})