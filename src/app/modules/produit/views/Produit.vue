<template>
  <div class="container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4 mb-4">
          <div class="card-title">
            <h6>Fiche Produit - {{ produit.reference }}</h6>
          </div>
          <div class="card-content">
            <h3>
              Produit : {{ produit.libelle }}
              <button class="btn btn-primary float-end" @click="router.push('/list-produits')">Tous les produits</button>
            </h3>
            <hr>
            <p>
              <strong>Référence : </strong> {{ produit.reference }} <br>
              <strong>Libellé : </strong> {{ produit.libelle }} <br>
              <strong>Prix : </strong> {{ produit.prix }} Ariary <br>
              <strong>Description : </strong> {{ produit.description }} <br>
              <hr>
              <strong>Catégorie : </strong> <a role="button" @click="router.push({name: 'detail-categorie', params: {uuid: categorie.uuid }})"> {{ categorie.categorie }} </a> <br>
              <hr>
            </p>
            <h6>Fournisseur</h6>
              <strong>Nom du fournisseur : </strong> <a role="button" @click="router.push({name: 'detail-fournisseur', params: {uuid: fournisseur.uuid }})"> {{ fournisseur.nomFournisseur }} </a>

          </div>
        </div>
      </div>

      <div class="card p-4 mb-4">
        <div class="card-title">
          <h6>Stocks</h6>
        </div>      
        <div class="card-content">
          <strong>Stock actuel : </strong> 150 <br>
           <div class="row">
            <div class="col-12">
              <button class="btn btn-primary float-end ml-3" @click="router.push('/list-stocks')">Historique des mouvements</button>
              <button type="button" class="btn btn-primary ml-3 float-end" data-bs-toggle="modal" data-bs-target="#stockModal">
                <i class="fa fa-plus"></i> Ajouter un mouvement (entrée/sortie)
              </button>
            </div> 
           </div> 

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="stockModal" tabindex="-1" aria-labelledby="stockModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Ajout d'un mouvement</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h6><strong>Produit : {{produit.reference}} - {{produit.libelle}}</strong></h6>
            <form @submit.prevent="soumettreProduit">
              <div class="mb-3">
                <label for="selectType" class="form-label">Type</label>
                <select id="SelectType" class="form-select form-select-sm" v-model="mouvement.type" aria-label=".form-select-sm">
                  <option value="entree"> Entrée </option>
                  <option value="sortie"> Sortie </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="prixInput" class="form-label">Quantité</label>
                <input id="prixInput" class="form-control" v-model.number="mouvement.quantite" type="number" placeholder="Quantité" required>
              </div>
              <div class="mb-3">
                <label for="commentaireInput" class="form-label">Commentaire</label>
                <textarea id="commentaireInput" class="form-control" v-model="mouvement.commentaire" placeholder="Commentaire"></textarea>
              </div>
              <!--button type="submit">{ { modificationProduit ? 'Modifier' : 'Ajouter' } }</button>
              <button type="button" @click="fermerModal">Annuler</button -->
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="submit" @click="ajouterMouvement()" data-bs-dismiss="modal" class="btn btn-primary">Ajouter</button>
          </div>
        </div>
      </div>
    </div>

  <div class="card">
    <div class="card-header pb-0">
      <h5>Mouvement des stocks <span class="badge badge-sm btn-primary float-end">({{listStocks.length}})</span></h5>
      <p>Mila asiana test, raha négatif dia tsy afaka manao sortie</p>
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
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stock, index) in listStocks">
              <td role="button">
                <div class="d-flex px-2 py-1"> <!-- @click="router.push({ name: 'detail-stock', params: { uuid: stock.uuid } })"-->
      
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ stock.date }}</h6>
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

              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{stock.referenceProduit}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer pb-0">

    </div>

  </div>


  </div>
</template>
<script>
  import { ref, onBeforeMount, computed } from '@vue/runtime-core';
  import { useRouter, useRoute } from 'vue-router';
  
  /****** stores*******/
  import { useProduitStore } from '@/stores/produit';
  import { useFournisseurStore } from '@/stores/fournisseur';
  import { useCategorieStore } from '@/stores/categorie';
  import { useStockStore } from '@/stores/mouvementStock';


  export default{
    name: 'produit',
    components: {
    },
    setup(){

      let storeProduit = useProduitStore();
      let storeFournisseur = useFournisseurStore();
      let storeCategorie = useCategorieStore();
      let storeStock = useStockStore();
      let route = useRoute();
      let router = useRouter();

      let listStocks = ref(null);
      let mouvement = ref({
        id: null,
        date: "2023-09-30",
        type: "entree",
        quantite: 0,
        commentaire: "",
        referenceProduit: ""
      });
      let produit = ref(null);
      let fournisseur = ref(null);
      let categorie = ref(null);

      onBeforeMount(() => {
        //window.addEventListener('scroll', handleScroll());

        produit.value = storeProduit.produitByUuid(route.params.uuid);

        const frnId = produit.value.fournisseurId * 1
        if (frnId >0 ){
          fournisseur.value = storeFournisseur.fournisseurById(frnId);
        }
        else{
          console.log('Produit ou fournisseur non trouvé.')
        }

        const catId = produit.value.categorieId * 1
        if (catId >0 ){
          categorie.value = storeCategorie.categorieById(catId);
        }
        else{
          console.log('Produit ou catégorie non trouvé.')
        }

        listStocks.value = storeStock.stockByReferenceProduit(produit.value.reference);

      });


      function ajouterMouvement(){
        const nouveauMouvement = {
          id: null,
          date: mouvement.value.date,
          type: mouvement.value.type,
          quantite: mouvement.value.quantite,
          commentaire: mouvement.value.commentaire,
          referenceProduit: produit.value.reference
        };
        storeStock.addStock(nouveauMouvement);

        listStocks.value = storeStock.stockByReferenceProduit(produit.value.reference);

        console.log("listStocks");
        console.log(listStocks);

        mouvement.value.id = null;
        mouvement.value.date = '2023-09-30';
        mouvement.value.type = 'entree';
        mouvement.value.quantite = 0;
        mouvement.value.commentaire = '';
      }



      return {
        route, router,
        storeProduit, storeFournisseur, storeCategorie, storeStock,
        produit, fournisseur, categorie, mouvement, listStocks, 
        ajouterMouvement,
      };
    }
  }
</script>