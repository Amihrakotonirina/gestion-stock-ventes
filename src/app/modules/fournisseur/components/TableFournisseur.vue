<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Liste des fournisseurs ({{listFournisseurs.length}})</h3>
      
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#fournisseurModal">
        Ajouter un fournisseur
      </button>

<!-- Modal -->
<div class="modal fade" id="fournisseurModal" tabindex="-1" aria-labelledby="fournisseurModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5>{{ modificationFournisseur ? 'Modifier' : 'Ajouter' }} un fournisseur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="soumettreFournisseur">

          <div class="mb-3">
            <label for="libelleInput" class="form-label">Fournisseur</label>
            <input id="libelleInput" class="form-control" v-model="nouveauFournisseur.libelle" placeholder="Nom du fournisseur" required>
          </div>
          <div class="mb-3">
            <label for="referenceInput" class="form-label">Code</label>
            <input id="referenceInput" class="form-control" v-model="nouveauFournisseur.codeFournisseur" placeholder="Attribuer un code" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Contact</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.contactFournisseur" type="number" placeholder="033 33 333 33" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Email</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.emailFournisseur" type="number" placeholder="test@fournisseur.com" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Adresse</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.adresseFournisseur" type="number" placeholder="Adresse du fournisseur" required>
          </div>
          <div class="mb-3">
            <label for="descriptionInput" class="form-label">Description</label>
            <textarea id="descriptionInput" class="form-control" v-model="nouveauFournisseur.description" placeholder="La description peut être vide"></textarea>
          </div>

          <!--button type="submit">{ { modificationFournisseur ? 'Modifier' : 'Ajouter' } }</button>
          <button type="button" @click="fermerModal">Annuler</button -->
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
        <button type="submit" @click="storeFournisseur.addFournisseur(nouveauFournisseur)" class="btn btn-primary">{{ modificationFournisseur ? 'Modifier' : 'Ajouter' }}</button>
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
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fournisseur</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Code Fournisseur</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Contact</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Email</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Adresse</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fournisseur, index) in listFournisseurs">
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
                    <h6 class="mb-0 text-sm">{{ fournisseur.fournisseur }}</h6>
                    <p class="text-xs text-secondary mb-0"></p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{fournisseur.codeFournisseur}}</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{fournisseur.contactFournisseur}}</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-secondary text-xs font-weight-bold">{{fournisseur.emailFournisseur}}</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-secondary text-xs font-weight-bold">{{fournisseur.adresseFournisseur}}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Modifier fournisseur"
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
import { useFournisseurStore } from '@/stores/fournisseur';
import { ref } from 'vue';

export default {
  name: "table-fournisseur",
  components:{
  },

  setup(){
      const storeFournisseur = useFournisseurStore();

      let listFournisseurs = storeFournisseur.getAllFournisseurs;

      let ajoutFournisseur = ref(false)
      let modificationFournisseur = ref(false)
      let nouveauFournisseur = ref({
        id: null,
        libelle: '',
        reference: '',
        prix: 0,
        description: '',
      })

      return{
        storeFournisseur,
        listFournisseurs,
        ajoutFournisseur,
        modificationFournisseur,
        nouveauFournisseur,
      }
  }
};
</script>
