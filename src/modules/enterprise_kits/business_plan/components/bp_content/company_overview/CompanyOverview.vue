
<template>
  <div class="main-content">

  </div>
</template>
<script>
  
</script>


<template>
  <div class="main-content">
    <b-row>

      <b-col md="3">
        <b-list-group>
          <b-list-group-item class="border-0" href="#">
            <a href="#presentation">
              <i class="icon-regular i-Next1 mr-2"></i>
              Présentation
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#history">
              <i class="icon-regular i-Next1 mr-2"></i>
              Historique
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#keyMetric">
              <i class="icon-regular i-Next1 mr-2"></i>
              Équipe de direction
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#structure">
              <i class="icon-regular i-Next1 mr-2"></i>
              Structure
            </a>
          </b-list-group-item>
          <!-- b-list-group-item class="border-0" href="#">
            <a href>
              <i class="icon-regular i-Next1 mr-2"></i>
              Locaux, installations et équipements
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href>
              <i class="icon-regular i-Next1 mr-2"></i>
              Partenaires commerciaux et relations d'affaires
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href>
              <i class="icon-regular i-Next1 mr-2"></i>
              Certifications et accréditations
            </a>
          </b-list-group-item -->
          <b-list-group-item class="border-1 btn" href="#" title="Cette fonctionnalité n'est disponible que pour les utilisateurs premium.">
            <a href>
              <i class="icon-regular i-Add mr-2"></i>
              Ajouter
            </a>
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col md="9">
        <b-card class="p-4">
          <h1 class="section-title">Description de l'entreprise</h1>

          <b-row>
            <div class="p-4 notice"> 
              <b-col lg="2" class="pull-left float-left">
                <i class="notice-icon i-Information"></i>
              </b-col>
              <b-col>
              <p>
                La description de l'entreprise est une section d'un business plan qui fournit une vue d'ensemble de l'entreprise, de ses produits ou services, de son marché cible, de son histoire, de son équipe de direction et de sa situation actuelle. Il s'agit d'un résumé des informations clés sur l'entreprise qui donne aux lecteurs une idée de ce à quoi ils peuvent s'attendre en termes de produits, de services, de marché et d'objectifs futurs. Il permet également aux investisseurs et aux prêteurs potentiels de comprendre les antécédents et les ambitions de l'entreprise et de déterminer si elle est un bon investissement ou un bon risque de prêt. La description de l'entreprise peut également inclure une analyse de la situation actuelle de l'entreprise, y compris les forces, les faiblesses, les opportunités et les menaces, ainsi que les locaux, installations et équipements de l'entreprise et les partenaires commerciaux et relations d'affaires clés.
              </p>

              </b-col>
            </div>
          </b-row>

<!-- ********************** presentation section ****************** -->            
          <b-row>
            <b-col id="presentation" md="12" class="mb-5">      
              <h3 class="sub-section-title">Présentation de l'entreprise <i @click="toggleEditPresentation" v-if="!showEditPresentation" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="presentationValue==''">
                <div v-if="!showEditPresentation">
                  <p>
                   une introduction générale de l'entreprise, de ses produits ou services et de son marché cible.
                   <br><br>
                   Voici quelques éléments que vous pouvez inclure dans la partie "Présentation de l'entreprise" :
                  </p>
                  <ul>
                    <li>  Nom de l'entreprise </li>
                    <li>  Description générale de l'entreprise et de ses produits ou services </li>
                    <li>  Marché cible </li>
                  </ul>


                  <h6>Voici un modèle : </h6>

                  <p>
                    Notre entreprise, [Nom], est une entreprise de vente au détail en ligne qui propose une gamme de produits de mode pour les femmes. Nous ciblons les femmes de 25 à 45 ans qui cherchent à se tenir à la mode tout en restant abordables.
                  </p>

                </div>
              </div>

              <div v-if="!showEditPresentation">
                <p v-html="presentationValue" v-if="presentationValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditPresentation" @click="toggleEditPresentation" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditPresentation">
                <ckeditor :editor="editor" v-model="presentationValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="savePresentation" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelPresentation"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end presentation section ****************** -->            


<!-- ********************** history section ****************** -->            
<!-- ********************** history section ****************** -->            

            <b-col id="history" md="12" class="mb-5">      
              <h3 class="sub-section-title">Historique de l'entreprise <i @click="toggleEdithistory" v-if="!showEdithistory" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="historyValue==''">
                <div v-if="!showEdithistory">
                  <p>
                    Une description détaillée de l'historique de l'entreprise, y compris sa création, son développement et ses réalisations passées.
                    <br><br>
                    Voici quelques éléments que vous pouvez inclure dans la partie "Historique de l'entreprise" :
                  </p>
                  <ul>
                    <li>
                      Date de création de l'entreprise
    
                    </li>

                    <li>
                      Évolution de l'entreprise au fil du temps
    
                    </li>

                    <li>
                      Réalisations passées
                    </li>
                  </ul>

                  <h6>Voici un modèle :</h6>
                  <p>Notre entreprise a été fondée en [année] par [nom des fondateurs]. Au cours des [nombre] dernières années, nous avons considérablement augmenté notre chiffre d'affaires en développant notre gamme de produits et en élargissant notre base de clientèle</p>

                </div>
              </div>
              <div v-if="!showEdithistory">
                <p v-html="historyValue" v-if="historyValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEdithistory" @click="toggleEdithistory" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEdithistory">
                <ckeditor :editor="editor" v-model="historyValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="savehistory" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelhistory"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end history section ****************** -->            


<!-- ********************** management team member section ****************** -->            
<!-- ********************** management team member section ****************** -->            

            <b-col id="team" md="12" class="mb-5">      
              <h3 class="sub-section-title">Équipe de direction <i @click="toggleEditKeyMetric" v-if="!showEditKeyMetric" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="keyMetricValue==''">
                <div v-if="!showEditKeyMetric">
                  <p>
                    Une présentation des propriétaires et des membres clés de l'équipe de direction, avec leurs qualifications et leur expérience pertinente.
                    <br><br>
                    Voici quelques éléments que vous pouvez inclure dans la partie "Equipe de direction" :
                    <br>
                  </p>
                  <ul>
                    <li> 
                          Nom et fonction de chaque membre clé de l'équipe de direction
                    </li>
                    <li>
                      Expérience professionnelle et qualifications de chaque membre de l'équipe
                    </li>
                    <li>
                      Rôle et responsabilités de chaque membre de l'équipe
                    </li>
                  </ul>

                  <h6>Voici un modèle :</h6>
                  <p>
                    Notre équipe de direction est dirigée par [nom], qui est également le fondateur de l'entreprise. [nom] possède [nombre] années d'expérience dans le secteur de la vente au détail et est un expert en matière de stratégie d'entreprise.
                  </p>
                </div>
              </div>
              <div v-if="!showEditKeyMetric">
                <p v-html="keyMetricValue" v-if="keyMetricValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditKeyMetric" @click="toggleEditKeyMetric" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditKeyMetric">
                <ckeditor :editor="editor" v-model="keyMetricValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveKeyMetric" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelKeyMetric"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>
            
<!-- ********************** end management team member section ****************** -->


<!-- ********************** Structure section ****************** -->            
<!-- ********************** Structure section ****************** -->            

            <b-col id="structure" md="12" class="mb-5">      
              <h3 class="sub-section-title">Structure de l'entreprise <i @click="toggleEditStructure" v-if="!showEditStructure" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="structureValue==''">
                <div v-if="!showEditStructure">
                  <p>
                     Une description de la structure juridique de l'entreprise (par exemple, société à responsabilité limitée, société en nom collectif, etc.).
                     <br><br>
                    Voici quelques éléments que vous pouvez inclure dans la partie "Structure del'entreprise" :
                    <br>
                  </p>
                  <ul>
                    <li> 
                        Forme juridique (par exemple, société anonyme, société à responsabilité limitée, société individuelle, etc.)
                    </li>
                    <li>
                          Capital social

                    </li>
                    <li>
                          Actionnaires

                    </li>
                  </ul>

                  <h6>Voici un modèle :</h6>
                  <p>
                    Notre entreprise est une société à responsabilité limitée (SARL) avec un capital social de [montant]. Les actionnaires de l'entreprise sont [nom des actionnaires].
                  </p>
                  </p> 
                </div>
                
              </div>
              <div v-if="!showEditStructure">
                <p v-html="structureValue" v-if="structureValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditStructure" @click="toggleEditStructure" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditStructure">
                <ckeditor :editor="editor" v-model="structureValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveStructure" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelStructure"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>
            
<!-- ********************** end Structure section ****************** -->            


          </b-row>

        </b-card>
      </b-col>


      <!--b-col ms="2" class="text-center">
        Commentaires
      </b-col-->

    </b-row>
  </div>
</template>
<script>
    import Vue from 'vue';
    import CKEditor from '@ckeditor/ckeditor5-vue2';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    Vue.use( CKEditor );


    export default {
        name: 'CompanyOverview',
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
              },

              showEditPresentation: false,
              showEdithistory: false,
              showEditKeyMetric: false,
              showEditStructure: false,
              presentationValue: "",
              historyValue: "",
              keyMetricValue: "",
              structureValue: "",

            };
        },

        methods: {
          toggleEditPresentation(){
            this.showEditPresentation = true
          },
          savePresentation(){
            this.showEditPresentation = false
          },
          cancelPresentation(){
            this.showEditPresentation = false
          },



          toggleEdithistory(){
            this.showEdithistory = true
          },
          savehistory(){
            this.showEdithistory = false
          },
          cancelhistory(){
            this.showEdithistory = false
          },



          toggleEditKeyMetric(){
            this.showEditKeyMetric = true
          },
          saveKeyMetric(){
            this.showEditKeyMetric = false
          },
          cancelKeyMetric(){
            this.showEditKeyMetric = false
          },



          toggleEditStructure(){
            this.showEditStructure = true
          },
          saveStructure(){
            this.showEditStructure = false
          },
          cancelStructure(){
            this.showEditStructure = false
          }

          
        }
    }
</script>
<style>
  .notice {
    background-color: #eaeaea;
    color: #000;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .notice-icon{
    font-size:68px;
  }
  .edit-icon{
    cursor: pointer;
    font-size: 15px;
    transition: .3s;
  }
  .edit-icon:hover {
    color: #bb101f;
    transform: scale(1.5, 1.5);
  }

</style>