<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Liste des produits ({{listProduits.length}})</h3>
      
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#produitModal">
        Ajouter un produit
      </button>

<!-- Modal -->
<div class="modal fade" id="produitModal" tabindex="-1" aria-labelledby="produitModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5>{{ modificationProduit ? 'Modifier' : 'Ajouter' }} un Produit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="soumettreProduit">

          <div class="mb-3">
            <label for="libelleInput" class="form-label">Libellé</label>
            <input id="libelleInput" class="form-control" v-model="nouveauProduit.libelle" placeholder="Libellé" required>
          </div>
          <div class="mb-3">
            <label for="referenceInput" class="form-label">Référence</label>
            <input id="referenceInput" class="form-control" v-model="nouveauProduit.reference" placeholder="Référence" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Prix</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauProduit.prix" type="number" placeholder="Prix" required>
          </div>
          <div class="mb-3">
            <label for="descriptionInput" class="form-label">Description</label>
            <textarea id="descriptionInput" class="form-control" v-model="nouveauProduit.description" placeholder="Description"></textarea>
          </div>
          <div class="mb-3">
            <label for="imageProduitFile" class="form-label">Image du produit</label>
            <input class="form-control" type="file" id="imageProduitFile">
          </div>

          <!--button type="submit">{ { modificationProduit ? 'Modifier' : 'Ajouter' } }</button>
          <button type="button" @click="fermerModal">Annuler</button -->
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
        <button type="submit" @click="storeProduit.addProduit(nouveauProduit)" class="btn btn-primary">{{ modificationProduit ? 'Modifier' : 'Ajouter' }}</button>
      </div>
    </div>
  </div>
</div>


    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Produit</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Référence</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Prix (Ariary)</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Status</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(produit, index) in listProduits">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="@/assets/img/temp_image.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ produit.libelle }}</h6>
                    <p class="text-xs text-secondary mb-0"></p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{produit.reference}}</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{produit.prix}}</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">en stock</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Modifier produit"
                >Modifier</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>


/****** stores*******/
import { useProduitStore } from '@/stores/produit';
import { ref } from 'vue';

export default {
  name: "table-produit",
  components:{
  },

  setup(){
      const storeProduit = useProduitStore();

      let listProduits = storeProduit.getAllProduits;

      let ajoutProduit = ref(false)
      let modificationProduit = ref(false)
      let nouveauProduit = ref({
        id: null,
        libelle: '',
        reference: '',
        prix: 0,
        description: '',
      })

      return{
      	storeProduit,
      	listProduits,
        ajoutProduit,
        modificationProduit,
        nouveauProduit,
      }
  }
};
</script>
