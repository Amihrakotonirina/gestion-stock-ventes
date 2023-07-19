<template>
  <div class="main-content">
    <breadcumb :page="'Business plan'" :folder="'Kits entreprises'" />

    <b-row class="">
        <b-col md="12 mb-30">
          <b-card title="" class="m-5 mt-0 pt-0 p-5">
            <h3 class="mb-2">Votre profile</h3>
              <label class="radio radio-outline-primary">
                <input type="radio" name="radio" formcontrolname="radio" />
                <span>Etudiant</span>
                <span class="checkmark"></span>
              </label>
              <label class="radio radio-outline-primary">
                <input type="radio" name="radio" formcontrolname="radio" />
                <span>Professionnel</span>
                <span class="checkmark"></span>
              </label>
              <label class="radio radio-outline-primary">
                <input type="radio" name="radio" formcontrolname="radio" />
                <span>Consultant</span>
                <span class="checkmark"></span>
              </label>
              <label class="radio radio-outline-primary">
                <input type="radio" name="radio" formcontrolname="radio" />
                <span>Association</span>
                <span class="checkmark"></span>
              </label>
              <label class="radio radio-outline-primary">
                <input type="radio" name="radio" formcontrolname="radio" />
                <span>Autre</span>
                <span class="checkmark"></span>
              </label>
              

            <h2>Configuration de l'entreprise</h2>
            <h4>Type d'entreprise</h4>

            <label class="radio radio-outline-primary">
              <input type="radio" name="radio" formcontrolname="radio" />
              <span>Idée d'entreprise (création)</span>
              <span class="checkmark"></span>
            </label>
            <label class="radio radio-outline-primary">
              <input type="radio" name="radio" formcontrolname="radio" />
              <span>Entreprise en activité</span>
              <span class="checkmark"></span>
            </label>


            <h4>A propos de l'entreprise</h4>

            <b-form> 
              <b-row>
                  <b-form-group
                      label="Nom de votre entreprise"
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
                      label="Pays :"
                      label-for="inputPays"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Pays"
                      ></b-form-input>
                  </b-form-group>
                  <b-form-group
                      label="Symbole monétaire :"
                      label-for="selectCurrency"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="MGA"
                      ></b-form-input>
                  </b-form-group>
                  <h6 class="mb-2">Assujétie à la TVA ? (OUI = payant)</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>OUI</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>NON</span>
                    <span class="checkmark"></span>
                  </label>
                  <b-form-group
                      label="Taux TVA :"
                      label-for="inputTvaRate"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="XX.XXX %"
                      ></b-form-input>
                  </b-form-group>

                  <b-form-group
                      label="Forme juridique"
                      label-for="selectCurrency"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="EI SARL SARLU"
                      ></b-form-input>
                  </b-form-group>

                  <b-form-group
                      label="Effectif des employés :"
                      label-for="selectCurrency"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="1 - 9; 10 - 50; plus de 50"
                      ></b-form-input>
                  </b-form-group>

              </b-row>
                <h4>Le plan d'affaires</h4>
                <b-form-group
                      label="Titre du plan d'affaires"
                      label-for="inputBpTitle"
                      class="col-md-8"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Mon premier plan d'affaires"
                      ></b-form-input>
                  </b-form-group>
                  <b-form-group
                      label="Date de départ du prévisionnel financier :"
                      label-for="inputDateBegin"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Date"
                      ></b-form-input>
                  </b-form-group>
                  <b-form-group
                      label="Projection : (3 ans par défaut)"
                      label-for="selectProjectionDuration"
                      class="col-md-4"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="3 ans - 5 ans"
                      ></b-form-input>
                  </b-form-group>
              <b-row>
              </b-row>


            </b-form>

            <b-button  @click="saveSettings" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i> Valider </b-button>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>
<script>
  
</script>