<template>
  <div class="main-content">
    <h1>Plan d'affaires</h1>
    <Settings></Settings>
  </div>
</template>
<script>

  import Settings from '@/modules/enterprise_kits/business_plan/components/settings/Settings'
    
    export default {
    name: 'BPSettings',
    components: {
      Settings
    },
  }

</script>