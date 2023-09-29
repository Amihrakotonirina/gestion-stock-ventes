<template>
  <div class="container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card p-4">
          <div class="card-title">
          </div>
          <div class="card-content">

            <TableStock />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TableStock from "../components/TableStock.vue"

  export default{
    name: 'list-stock',
    components: {
      TableStock
    },
    setup(){

      
      return {

      };
    }
  }
</script>