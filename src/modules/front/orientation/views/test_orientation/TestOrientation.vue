<template>
  <div class="container0">
  <breadcumb :page="'Test d\'orientation'" :folder="'test-orientation'" /> 
    <div class="imgBx" width="50%" >
            <!--img class="img-fluid" alt="Responsive image" src="../assets/img/orient.jpg" width="50%" -->
        </div>
    <Test></Test>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/modules/front/orientation/components/orientation/test-orientation/test-orientation.vue'

export default {
  name: 'test-orientation',
  components: {
    Test,
  }
}
</script>
