<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4">
          <div class="card-title">
          </div>
          <div class="card-content">

            <TableProduit />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TableProduit from "../components/TableProduit.vue"

  export default{
    name: 'list-produits',
    components: {
      TableProduit
    },
    setup(){

      
      return {

      };
    }
  }
</script>