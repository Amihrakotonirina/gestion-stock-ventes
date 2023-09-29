<template>
  <div class="container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4 mb-4">
          <div class="card-title">
            <h6>Fiche Fournisseur - {{ fournisseur.codeFournisseur }}</h6>
          </div>
          <div class="card-content">
            <h3>
              Fournisseur : {{ fournisseur.nomFournisseur }}
              <button class="btn btn-primary float-end" @click="router.push('/list-fournisseurs')">Tous les fournisseurs</button>
            </h3>
            <hr>
            <p>
              <strong>Code : </strong> {{ fournisseur.codeFournisseur }} <br>
              <strong>Nom du fournisseur : </strong> {{ fournisseur.nomFournisseur }} <br>
              <strong>Contact : </strong> {{ fournisseur.contactFournisseur }} <br>
              <strong>Email : </strong> {{ fournisseur.emailFournisseur }} <br>
              <strong>Adresse : </strong> {{ fournisseur.adresseFournisseur }} <br>
              <strong>Description : </strong> {{ fournisseur.description }} <br>
            </p>

          </div>

          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <h4>Liste des produits</h4>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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


  export default{
    name: 'fournisseur',
    components: {
    },
    setup(){

      let storeProduit = useProduitStore();
      let storeFournisseur = useFournisseurStore();
      let route = useRoute();
      let router = useRouter();

      let listProduits = ref(null);
      let fournisseur = ref(null);

      onBeforeMount(() => {
        //window.addEventListener('scroll', handleScroll());

        //produit.value = storeProduit.produitByUuid(route.params.uuid);
        fournisseur.value = storeFournisseur.fournisseurByUuid(route.params.uuid);

        const frnId = fournisseur.value.id * 1
        if (frnId >0 ){
          listProduits.value = storeProduit.allProduitByFournisseurId(frnId);
        console.log(listProduits)
        }
        else{
          console.log('Produit ou fournisseur non trouvé.')
        }

      });

      return {
        route, router,
        storeProduit, storeFournisseur,
        listProduits, fournisseur,
      };
    }
  }
</script>