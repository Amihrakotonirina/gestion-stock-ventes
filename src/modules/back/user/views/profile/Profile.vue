<template>
  <div class="main-content">
    <breadcumb :page="'Profile'" :folder="'Profile'" />
      <b-row class="">
        <b-col md="12 mb-30">
          <b-card title="" class="m-5 mt-0 pt-0 p-5">
            <form-wizard
              title
              subtitle
              @on-complete="onComplete"
              shape="circle"
              color="#e30347"
            >
              <tab-content title="Informations personnelles" icon="i-Administrator">
                <b-form>
                  <b-row>
                    <b-form-group
                      label="Titre ou poste :"
                      label-for="input-1"
                      class="col-md-12"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre titre ou poste"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Photo d'identité :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-file
                        placeholder="Ajouter une photo ou placer ici"
                        drop-placeholder="Placer votre image ici"
                        ></b-form-file>
                    </b-form-group>
                    <b-form-group
                      label="Prénoms :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre(vos) prénom(s)"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Nom de famille :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre nom"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Email :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="email"
                        required
                        placeholder="Ajouter votre adresse email"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Contact :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre contact"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="2ème contact :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter un deuxième contact"
                      ></b-form-input>
                    </b-form-group>



                    <b-form-group
                      label="Adresse :"
                      label-for="input-1"
                      class="col-md-4"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre adresse"
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
                        placeholder="Ajouter votre ville"
                      ></b-form-input>                
                    </b-form-group>
                      <b-form-group
                      label="Code postal :"
                      label-for="input-1"
                      class="col-md-2"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter le code postal"
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
                        placeholder="Ajouter votre pays"
                      ></b-form-input>
                    </b-form-group>
                  </b-row>


                  <b-row>
                    <b-col>
                      <b-form-group class="col-md-4">
                        <label class="mb-2">Sexe :</label>
                        <b-form-radio-group
                        id="radio-group-sex"
                        name="radio-group-sex"
                        >
                          <b-form-radio value="man">Homme</b-form-radio>
                          <b-form-radio value="woman">Femme</b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </b-col>

                    <b-col>
                      <b-form-group class="col-md-4">
                        <label class="mb-2">Etat civil :</label>
                        <b-form-radio-group
                        id="radio-group-etat-civil"
                        name="radio-group-etat-civil"
                        >
                          <b-form-radio value="single">Célibataire</b-form-radio>
                          <b-form-radio value="maried">Marié(e)</b-form-radio>
                          <b-form-radio value="divorced">Divorcé(e)</b-form-radio>
                          <b-form-radio value="widow">Veu(f/ve)</b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </b-col>
                    <b-col>

                      <b-form-group
                        id="input-group-nationality"
                        label="Nationalité :"
                        label-for="input-1"
                      >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Ajouter votre Nationalité"
                      ></b-form-input>
                    </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col class="col-md-4">
                        <b-form-group
                        label="Date de naissance :"
                        label-for="input-1"
                      >
                        <b-form-input
                          type="date"
                          required
                        ></b-form-input>
                        </b-form-group>

                        <b-form-group
                        label="Lieu de naissance :"
                        label-for="input-1"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Ajouter votre lieu de naissance"
                        ></b-form-input>
                      </b-form-group>

                    </b-col>
                    <b-col class="col-md-8">
                      <b-form-group
                          label="A propos :"
                          label-for="input-1"
                        >
                          <b-form-textarea
                            required
                            rows="5"
                            placeholder="Ajouter une description courte à votre propos ou votre objectif ou autre"
                          ></b-form-textarea>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form>
              </tab-content>





              <tab-content title="Expériences professionnelles" icon="i-Reverbnation">
                  <!--b-row>
                      <b-col md="6">
                        <b-form>
                          <b-row>
                              <b-form-group
                              label="Poste :"
                              label-for="input-post"
                              class="col-md-12"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Poste occupé"
                                name="input-post"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Employeur :"
                              label-for="input-employer"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Employeur"
                                name="input-employer"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              id="input-group-1"
                              label="Adresse :"
                              label-for="input-employer-address"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Ajouter l'adresse de l'employeur"
                                name="input-employer-address"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>
                          <b-row>
                              <b-form-group
                              label="Date de début :"
                              label-for="begin-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="begin-date"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Date de fin :"
                              label-for="end-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="end-date"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>
                          <b-form-group
                              label="Description du poste :"
                              label-for="post-decription"
                            >
                              <b-form-textarea
                                required
                                rows="5"
                                placeholder="Ajouter une courte description"
                                name="post-decription"
                              ></b-form-textarea>
                          </b-form-group>
                          <b-row>
                          </b-row>



                          <b-row>
                            <b-button variant="primary">Ajouter</b-button>
                          </b-row>
                      </b-form>
                    </b-col>


                    <b-col md="6">
                      <h4 class="mb-2">Expériences professionnelles ajoutées :</h4>
                      <b-row>
                          <b-card>
                            <b-col class="col-md-10">
                              1ère expérience professionnelle
                            </b-col>
                            <b-col class="col-md-2">
                              
                            </b-col>                        
                          </b-card>
                          <b-card>
                            <b-col class="col-md-10">
                              2ème expérience professionnelle
                            </b-col>
                            <b-col class="col-md-2">
                              
                            </b-col>                          
                          </b-card>
                          <b-card>
                            <b-col class="col-md-10">
                              3ème expérience professionnelle
                            </b-col>
                            <b-col class="col-md-2">
                              
                            </b-col>                     
                          </b-card>
                      </b-row>
                    </b-col>
                  </b-row-->


              <ProfessionalEperience></ProfessionalEperience>
              </tab-content>





              <tab-content title="Diplômes et formations" icon="i-Student-Hat-2">
                  <!--b-row>
                      <b-col md="6">
                        <b-form>
                          <b-row>
                              <b-form-group
                              label="Formation :"
                              label-for="input-formation"
                              class="col-md-12"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Formation"
                                name="input-formation"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Etablissement :"
                              label-for="input-etablissement"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Etablissement"
                                name="input-etablissement"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              id="input-group-1"
                              label="Adresse :"
                              label-for="input-etablissement-address"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Ajouter l'adresse de l'établissement"
                                name="input-etablissement-address"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>
                          <b-row>
                              <b-form-group
                              label="Date de début :"
                              label-for="begin-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="begin-date"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Date de fin :"
                              label-for="end-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="end-date"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>
                          <b-form-group
                              label="Description du poste :"
                              label-for="formation-decription"
                            >
                              <b-form-textarea
                                required
                                rows="5"
                                placeholder="Ajouter une courte description"
                                name="formation-decription"
                              ></b-form-textarea>
                          </b-form-group>
                          <b-row>
                          </b-row>



                          <b-row>
                            <b-button variant="primary">Ajouter</b-button>
                          </b-row>
                      </b-form>
                    </b-col>


                    <b-col md="6">
                      <h4 class="mb-2">Formations ou diplômes ajoutées :</h4>
                      <b-row>
                          <b-card>
                            <b-row>                  
                              <b-col class="col-md-10">
                                1ère formation
                              </b-col>
                              <b-col class="col-md-2">
                                
                              </b-col>                         
                            </b-row>                      
                          </b-card>
                          <b-card>
                            <b-row>                              
                              <b-col class="col-md-10">
                                2ème formation
                              </b-col>
                              <b-col class="col-md-2">
                                
                              </b-col> 
                            </b-row>                         
                          </b-card>
                          <b-card>
                            <b-row>
                              <b-col class="col-md-10">
                                3ème formation
                              </b-col>
                              <b-col class="col-md-2">
                                
                              </b-col>
                            </b-row>                    
                          </b-card>
                      </b-row>
                    </b-col>
                  </b-row-->
                  <Education></Education>
              </tab-content>





              <tab-content title="Compétences" icon="i-Tag-5">
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>





              <tab-content title="Compétences linguistiques" icon="i-Letter-Close">
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>





              <tab-content title="Centres d'intérêts" icon="i-Dribble">
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>




            </form-wizard>
          </b-card>
        </b-col>

        <!--b-col md="4 mb-30">
          <b-card>
            <h3>Aperçu</h3>
          </b-card>
        </b-col-->
      </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

//import Logo from '@/components/app/templates/front/stand/details/Logo.vue'
  import ProfessionalEperience from '@/modules/back/user/components/profile/professional_experience/ProfessionalExperience.vue'
  import Education from '@/modules/back/user/components/profile/education/Education.vue'




export default {
  name: 'profile',
  components: {
    ProfessionalEperience,
    Education
  },
}
</script>

<style scoped>

</style>
