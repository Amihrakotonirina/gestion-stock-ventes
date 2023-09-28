<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4">
          <div class="card-title">
          </div>
          <div class="card-content">

            <TableFournisseur />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TableFournisseur from "../components/TableFournisseur.vue"

  export default{
    name: 'list-fournisseurs',
    components: {
      TableFournisseur
    },
    setup(){

      
      return {

      };
    }
  }
</script>