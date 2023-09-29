<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Liste des fournisseurs ({{listFournisseurs.length}})</h3>
      <p>todo: tokony asiana test hoe vide vao afaka supprimer-na</p>
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#fournisseurModal">
       <i class="fa fa-plus-square" aria-hidden="true"></i> Ajouter un fournisseur
      </button>
    </div>
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
            <input id="libelleInput" class="form-control" v-model="nouveauFournisseur.nomFournisseur" placeholder="Nom du fournisseur" required>
          </div>
          <div class="mb-3">
            <label for="referenceInput" class="form-label">Code</label>
            <input id="referenceInput" class="form-control" v-model="nouveauFournisseur.codeFournisseur" placeholder="Attribuer un code" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Contact</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.contactFournisseur" placeholder="033 33 333 33" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Email</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.emailFournisseur" placeholder="test@fournisseur.com" required>
          </div>
          <div class="mb-3">
            <label for="prixInput" class="form-label">Adresse</label>
            <input id="prixInput" class="form-control" v-model.number="nouveauFournisseur.adresseFournisseur" placeholder="Adresse du fournisseur" required>
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" @click="ajouterFournisseur()" data-bs-dismiss="modal" class="btn btn-primary">{{ modificationFournisseur ? 'Modifier' : 'Ajouter' }}</button>
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
              <td role="button">
                <div class="d-flex px-2 py-1" @click="router.push({name: 'detail-fournisseur', params: {uuid: fournisseur.uuid }})">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ fournisseur.nomFournisseur }}</h6>
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
                <button
                  href="javascript:;"
                  class="btn btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Modifier fournisseur"
                > <i class="fas fa-edit"></i> </button>
                <button
                  @click="this.storeFournisseur.deleteFournisseur(fournisseur)"
                  class="btn btn-danger btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Supprimer fournisseur"
                > <i class="fas fa-trash-alt"></i> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer pb-0">
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#fournisseurModal">
        <i class="fa fa-plus-square" aria-hidden="true"></i>  Ajouter un fournisseur
      </button>
    </div>
  </div>
</template>

<script>


/****** stores*******/
import { useFournisseurStore } from '@/stores/fournisseur';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: "table-fournisseur",
  components:{
  },

  setup(){
      const storeFournisseur = useFournisseurStore();
      const router = useRouter();

      let listFournisseurs = storeFournisseur.getAllFournisseurs;

      let ajoutFournisseur = ref(false)
      let modificationFournisseur = ref(false)
      let nouveauFournisseur = ref({
        id: null,
        nomFournisseur: "",
        codeFournisseur: "",
        contactFournisseur: "",
        emailFournisseur: "",
        adresseFournisseur: "",
        description: ""
      })

      function ajouterFournisseur() {
        const fournisseur = {
          id: null,
          nomFournisseur: nouveauFournisseur.value.nomFournisseur,
          codeFournisseur: nouveauFournisseur.value.codeFournisseur,
          contactFournisseur: nouveauFournisseur.value.contactFournisseur,
          emailFournisseur: nouveauFournisseur.value.emailFournisseur,
          adresseFournisseur: nouveauFournisseur.value.adresseFournisseur,
          description: nouveauFournisseur.value.description
        };
        storeFournisseur.addFournisseur(fournisseur);

        nouveauFournisseur.value.id = null;
        nouveauFournisseur.value.nomFournisseur = '';
        nouveauFournisseur.value.codeFournisseur = '';
        nouveauFournisseur.value.contactFournisseur = '';
        nouveauFournisseur.value.emailFournisseur = '';
        nouveauFournisseur.value.adresseFournisseur = '';
        nouveauFournisseur.value.description = '';
      }


      return{
        router,
        storeFournisseur,
        ajouterFournisseur,
        listFournisseurs,
        ajoutFournisseur,
        modificationFournisseur,
        nouveauFournisseur,
      }
  }
};
</script>
