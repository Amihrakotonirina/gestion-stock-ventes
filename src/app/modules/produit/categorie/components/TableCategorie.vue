<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>Toutes les catégories ({{listCategories.length}})</h3>
      <p>todo: tokony asiana test hoe vide vao afaka supprimer-na</p>
      
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#categorieModal">
        <i class="fa fa-plus"></i> Ajouter une categorie
      </button>
    </div>

<!-- Modal -->
<div class="modal fade" id="categorieModal" tabindex="-1" aria-labelledby="categorieModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5>{{ modificationCategorie ? 'Modifier' : 'Ajouter' }} une categorie</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="soumettreCategorie">

          <div class="mb-3">
            <label for="libelleInput" class="form-label">Catégorie</label>
            <input id="libelleInput" class="form-control" v-model="nouvelCategorie.categorie" placeholder="Catégorie" required>
          </div>
          <div class="mb-3">
            <label for="descriptionInput" class="form-label">Description</label>
            <textarea id="descriptionInput" class="form-control" v-model="nouvelCategorie.description" placeholder="La description peut être vide"></textarea>
          </div>
          <!--button type="submit">{ { modificationCategorie ? 'Modifier' : 'Ajouter' } }</button>
          <button type="button" @click="fermerModal">Annuler</button -->
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
        <button type="submit" @click="ajouterCategorie()" data-bs-dismiss="modal" class="btn btn-primary">{{ modificationCategorie ? 'Modifier' : 'Ajouter' }}</button>
      </div>
    </div>
  </div>
</div>


    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Catégorie</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Description</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Actions</th>
   
            </tr>
          </thead>
          <tbody>
            <tr v-for="(categorie, index) in listCategories">
              <td role="boutton">
                <div class="d-flex px-2 py-1" @click="router.push({ name: 'detail-categorie', params: { uuid: categorie.uuid } })">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ categorie.categorie }}</h6>
                    <p class="text-xs text-secondary mb-0"></p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{categorie.description}}</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle">
                <button
                  href="javascript:;"
                  class="btn btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Modifier categorie"
                > <i class="fas fa-edit"></i> </button>
                <button
                  @click="this.storeCategorie.deleteCategorie(categorie)"
                  class="btn btn-danger btn-icon-only btn-xs align-items-center justify-content-center ms-auto"
                  data-toggle="tooltip"
                  data-original-title="Supprimer catégorie"
                > <i class="fas fa-trash-alt"></i> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer pb-0">
      <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#categorieModal">
        <i class="fa fa-plus"></i> Ajouter une categorie
      </button>
    </div>
  </div>
</template>

<script>


/****** stores*******/
import { useCategorieStore } from '@/stores/categorie';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "table-categorie",
  components:{
  },

  setup(){
      const storeCategorie = useCategorieStore();
      const router = useRouter();

      let listCategories = storeCategorie.getAllCategories;

      let ajoutCategorie = ref(false)
      let modificationCategorie = ref(false)
      let nouvelCategorie = ref({
        id: null,
        categorie: '',
        description: '',
      })

      function ajouterCategorie() {
      const categorie = {
        id: null,
        categorie: nouvelCategorie.value.categorie,
        description: nouvelCategorie.value.description,
      };
      storeCategorie.addCategorie(categorie);

      nouvelCategorie.value.id = null;
      nouvelCategorie.value.categorie = '';
      nouvelCategorie.value.description = '';
    }

      return{
        router,
        storeCategorie,
        ajouterCategorie,
        listCategories,
        ajoutCategorie,
        modificationCategorie,
        nouvelCategorie,
      }
  }
};
</script>
