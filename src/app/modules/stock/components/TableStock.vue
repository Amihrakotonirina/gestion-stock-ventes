<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Mouvement des stocks <span class="badge btn-primary">({{listStocks.length}})</span></h3>
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Type</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Quantité</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Référence produit</th>
              <th 
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Produit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stock, index) in listStocks">
              <td>
                <div class="d-flex px-2 py-1"> <!-- @click="router.push({ name: 'detail-stock', params: { uuid: stock.uuid } })"-->
      
                  <div class="d-flex flex-column justify-content-center">
                    <span class="text-secondary text-xs font-weight-bold">{{stock.date}}</span>
                    <p class="text-xs text-secondary mb-0"></p>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{stock.type}}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{stock.quantite}}</span>
              </td>
              <td role="button" class="align-middle text-center" @click="router.push({name: 'detail-produit', params: {uuid: storeProduit.produitByReference(stock.referenceProduit).uuid }})">
                  <h6 class="mb-0 text-sm">{{ stock.referenceProduit }}</h6>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{storeProduit.produitByReference(stock.referenceProduit).libelle}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer pb-0">

    </div>

  </div>
</template>

<script>
//import { ref } from 'vue';
import { ref, onBeforeMount, computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';


/****** stores*******/
import { useStockStore } from '@/stores/mouvementStock';
import { useProduitStore } from '@/stores/produit';

export default {
  name: "table-stock",
  components:{
  },

  setup(){
      const storeStock = useStockStore();
      const storeProduit = useProduitStore();
      const router = useRouter();

      let listStocks = storeStock.getAllStocks;

      return{
        storeStock, storeProduit,
        router,
        listStocks,
      }
  }
};
</script>
