import { defineStore } from "pinia";
//import axios from "axios";
import { mouvementStocks } from "@/app/data/listMouvementStocks.js";
import { uuid } from 'vue3-uuid';

export const useStockStore = defineStore({
  id: 'stock',

  state: () => ({
    //stocks: [],
    stocks: mouvementStocks,
    stockConnecte: null,
    stockEnCours: null,
  }),

  getters: {
    getAllStocks: (state) => {
      return state.stocks
    },
  },

  actions: {
    async fetchStock(){
      try {
        /*const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.stocks = data.data
        const data = await stocks
      */
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    stockById(id){
      return this.getAllStocks.find(stock => stock.id === id);
    },

    stockByUuid(uuid){
      return this.getAllStocks.find(stock => stock.uuid === uuid);
    },

    stockByReferenceProduit(refProduit){
      return this.getAllStocks.filter(stock => stock.referenceProduit === refProduit);
    },


    addStock(stock){
      stock.id = Math.floor(Math.random()*1000000)
      stock.uuid = uuid.v1();
      this.stocks.push(stock)
      //console.log(this.stocks)
    },

    deleteStock(stock){
      const index = this.stocks.indexOf(stock);

        if (index !== -1) {
          this.stocks.splice(index, 1);
          return true
        } else {
          return false
        }
    },

/*
    nomStockById(id){
      console.log(id)
      let stock = this.getStocks.filter(stock => stock.id == id);
      console.log("stock = ")
      console.log(this.stock)
      if (stock.length > 0) {
        return stock[0].nomStock;
      }
    },

    updateStockConnecte(id) { 
      const stock = this.getStocks.filter(stock => stock.id == id);
      this.stockConnecte = stock[0];
      return this.stockConnecte
    },

*/

  },

})