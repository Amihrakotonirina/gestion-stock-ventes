<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Liste des produits <span class="badge btn-primary">({{listProduits.length}})</span></h3>
      
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#produitModal">
        <i class="fa fa-plus-square" aria-hidden="true"></i>  Ajouter un produit
      </button>
    </div>

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
            <label for="selectCategorie" class="form-label">Catégorie</label>
            <select id="selectCategorie" class="form-select form-select-sm" v-model="nouveauProduit.categorieId" aria-label=".form-select-sm">
              <option v-for="categorie in listCategories" :value="categorie.id"> {{ categorie.categorie }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Prix</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauProduit.prix" type="number" placeholder="Prix" required>
          </div>
          <div class="mb-3">
            <label for="selectFournisseur" class="form-label">Fournisseur</label>
            <select id="selectFournisseur" class="form-select form-select-sm" v-model="nouveauProduit.fournisseurId" aria-label=".form-select-sm">
              <option v-for="fournisseur in listFournisseurs" :value="fournisseur.id"> {{ fournisseur.nomFournisseur }}</option>
            </select>
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" @click="ajouterProduit()" data-bs-dismiss="modal" class="btn btn-primary">{{ modificationProduit ? 'Modifier' : 'Ajouter' }}</button>
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
              <td role="button">
                <div class="d-flex px-2 py-1" @click="router.push({ name: 'detail-produit', params: { uuid: produit.uuid } })">
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
                <button
                  
                  class="btn btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Modifier produit"
                >  <i class="fas fa-edit"></i> </button>
                <button
                  @click="this.storeProduit.deleteProduit(produit)"
                  class="btn btn-danger btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Supprimer produit"
                > <i class="fas fa-trash-alt"></i> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer pb-0">
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#produitModal">
        <i class="fa fa-plus-square" aria-hidden="true"></i>  Ajouter un produit
      </button>
    </div>

  </div>
</template>

<script>
//import { ref } from 'vue';
import { ref, onBeforeMount, computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';


/****** stores*******/
import { useProduitStore } from '@/stores/produit';
  import { useFournisseurStore } from '@/stores/fournisseur';
  import { useCategorieStore } from '@/stores/categorie';

export default {
  name: "table-produit",
  components:{
  },

  setup(){
      const storeProduit = useProduitStore();
      let storeFournisseur = useFournisseurStore();
      let storeCategorie = useCategorieStore();
      const router = useRouter();

      let listProduits = storeProduit.getAllProduits;
      let listCategories = storeCategorie.getAllCategories;
      let listFournisseurs = storeFournisseur.getAllFournisseurs;

      let ajoutProduit = ref(false)
      let modificationProduit = ref(false)
      let nouveauProduit = ref({
        id: null,
        libelle: '',
        reference: '',
        prix: 0,
        categorieId: null,
        description: '',
        fournisseurId: null,
      })



    function ajouterProduit() {
      const produit = {
        id: null,
        libelle: nouveauProduit.value.libelle,
        reference: nouveauProduit.value.reference,
        prix: nouveauProduit.value.prix,
        categorieId: nouveauProduit.value.categorieId,
        fournisseurId: nouveauProduit.value.fournisseurId,
        description: nouveauProduit.value.description,
      };
      storeProduit.addProduit(produit);
      //console.log(listProduits);

      nouveauProduit.value.id = null;
      nouveauProduit.value.libelle = '';
      nouveauProduit.value.reference = '';
      nouveauProduit.value.prix = 0;
      nouveauProduit.value.description = '';
    }


      return{
        storeProduit, storeFournisseur, storeCategorie,
        router,
      	listProduits, listCategories, listFournisseurs,
        ajoutProduit,
        ajouterProduit,
        modificationProduit,
        nouveauProduit,
      }
  }
};
</script>
