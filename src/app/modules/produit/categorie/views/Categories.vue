<template>
  <div class="container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4">
          <div class="card-title">
          </div>
          <div class="card-content">

            <TableCategorie />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TableCategorie from "../components/TableCategorie.vue"

  export default{
    name: 'list-categories',
    components: {
      TableCategorie
    },
    setup(){

      
      return {

      };
    }
  }
</script>