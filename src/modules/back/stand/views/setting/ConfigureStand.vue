<template>
    <div id="app">
      <h1>Page de configuration du stand</h1>
        <router-link :to="{ name: 'stand-details'}"><!--, params: { username: 'user' }}"-->
            <i class="i-Eye apercu-icon"></i>
        </router-link>
        <GeneralInformation></GeneralInformation>
        tokony afaka asiana sary sy lien ny parcours ao @ profile -> expérience
fa ny cv pdf tsotra, de base ihany


https://www.citysearch-api.com/fr/widgets

https://sumry.me/#work

    </div>
</template>

<script>
    
import GeneralInformation from "@/modules/back/stand/components/setting/general_information/GeneralInformation"
import StandImages from "@/modules/back/stand/components/setting/images/StandImages"
import StandDocuments from "@/modules/back/stand/components/setting/documents/StandDocuments"


export default {
    name: 'generalInformation',
    components: {
        GeneralInformation,
        StandDocuments,
        StandImages
    },

    data() {
        return {

        };
    }
}
</script>

<style scoped>
    .apercu-icon{
        height: 50px;
        width: 50px;
    }
</style>
