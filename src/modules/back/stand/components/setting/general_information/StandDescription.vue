<template>
    <div id="app">
        <h5>Description : </h5>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

    </div>
</template>

<script>
    
    import Vue from 'vue';
    import CKEditor from '@ckeditor/ckeditor5-vue2';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    Vue.use( CKEditor );


    export default {
        name: 'StandDescription',
        components: {
            ckeditor: CKEditor.component
        },

        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Ajouter votre texte ici...</p>',
                editorConfig: {
                    // la configuration de CKEditor doit être par rapport au type d'abonnement
                    // les plus importants peuvent ajouter des liens vidéo
                }

            };
        }
    }
</script>
<style scoped>

</style>
