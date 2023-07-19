<template>
    <div id="app">
        <b-row>
    <b-col class="col-md-3">
    </b-col>
    <b-col class="col-md-6">
        <b-form> 
            <h3>General information : </h3>
            <b-row>
                <b-form-group
                    label="Entité / Organisation :"
                    label-for="inputEntite"
                    class="col-md-8"
                    >
                    <b-form-input
                      type="text"
                      required
                      placeholder="Raison social"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Acronyme :"
                    label-for="inputAcronyme"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                      placeholder="Acronyme"
                    ></b-form-input>
                </b-form-group>
            </b-row>
            <b-row>
                <b-form-group
                    label="Secteur d'activité :"
                    label-for="inputAcronyme"
                    class="col-md-12"
                    >
                    <b-form-input
                      type="text"
                      required
                      placeholder="Ajouter un texte et valider par la touche 'Entrée'"
                    ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-tag>Tourisme et Hôtellerie</b-tag>
                    <b-tag>AZERTY</b-tag>
                </b-form-group> 
            </b-row>
            <b-row>
                <b-form-group
                    label="Slogan :"
                    label-for="inputSlogan"
                    class="col-md-12"
                    >
                    <b-form-textarea
                      required
                      rows="3"
                      placeholder="Slogan"
                    ></b-form-textarea>
                </b-form-group>
            </b-row>
            <b-row>
                <b-form-group
                    label="Phrase d'accroche :"
                    label-for="inputPhraseAccroche"
                    class="col-md-12"
                    >
                    <b-form-textarea
                      required
                      rows="5"
                      placeholder="Phrase d'accroche"
                    ></b-form-textarea>
                </b-form-group>
            </b-row>
            <b-row>
                <b-form-group
                      label="Adresse :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="https://www.citysearch-api.com/fr/widgets"
                      ></b-form-input>                
                </b-form-group>
                <b-form-group
                      label="Ville :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Antananarivo"
                      ></b-form-input>                
                </b-form-group>
                <b-form-group
                      label="Code postal :"
                      label-for="input-1"
                      class="col-md-2"
                        placeholder="101"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>                
                </b-form-group>
                <b-form-group
                      label="Pays :"
                      label-for="input-1"
                      class="col-md-2"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Madagascar"
                      >
                </b-form-input>
                </b-form-group>
            </b-row>
            <b-row>
                <b-form-group
                    label="Adresse"
                    label-for="inputAdresse"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                      placeholder="Adresse"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Email 1 :"
                    label-for="inputEmail-1"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Email 2 :"
                    label-for="inputEmail-2"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                    ></b-form-input>
                </b-form-group>
            </b-row>
            <b-row>
                <b-form-group
                    label="Téléphone 1 :"
                    label-for="inputTelephone-1"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                      placeholder=""
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Téléphone 2 :"
                    label-for="inputTelephone-2"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Téléphone 3 :"
                    label-for="inputTelephone-3"
                    class="col-md-4"
                    >
                    <b-form-input
                      type="text"
                      required
                    ></b-form-input>
                </b-form-group>
            </b-row>
            <b-row>
                <StandDescription></StandDescription>
            </b-row>
            <b-row>
                <b-button type="submit">Enregistrer</b-button>
            </b-row>
        </b-form>
    </b-col>

    <b-col class="col-md-3">
    </b-col>
    </b-row>

    </div>
</template>

<script>
    
    import StandDescription from "@/modules/back/stand/components/setting/general_information/StandDescription"


export default {
    name: 'generalInformation',
    components: {
        StandDescription
    },

    data() {
        return {

        };
    }
}
</script>
