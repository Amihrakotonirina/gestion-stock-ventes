<template>
  <div class="main-content">
    <b-row>

      <b-col md="3">
        <b-list-group>
          <b-list-group-item class="border-0" href="#">
            <a href="#activity">
              <i class="icon-regular i-Next1 mr-2"></i>
              Activités
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#market">
              <i class="icon-regular i-Next1 mr-2"></i>
              Marchés
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#keyMetric">
              <i class="icon-regular i-Next1 mr-2"></i>
              Chiffres clés
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#need">
              <i class="icon-regular i-Next1 mr-2"></i>
              Besoins
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-1 btn" href="#" title="Cette fonctionnalité n'est disponible que pour les utilisateurs premium.">
            <a href>
              <i class="icon-regular i-Add mr-2"></i>
              Ajouter une section
            </a>
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col md="9">
        <b-card class="p-4">
          <h1 class="section-title">Résumé</h1>

          <b-row>
            <div class="p-4 notice"> 
              <b-col lg="2" class="pull-left float-left">
                <i class="notice-icon i-Information"></i>
              </b-col>
              <b-col>
              <p>
                Le résumé est une partie importante de votre business plan et il doit être rédigé de manière à susciter l'intérêt des investisseurs ou des partenaires potentiels. Il s'agit généralement de la première partie de votre business plan que les lecteurs vont lire, il est donc important de la rédiger de manière claire et concise.
              </p>
              </b-col>
            </div>
          </b-row>

<!-- ********************** Activity section ****************** -->            
          <b-row>
            <b-col id="activity" md="12" class="mb-5">      
              <h3 class="sub-section-title">Activités <i @click="toggleEditActivity" v-if="!showEditActivity" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="activityValue==''">
                <div v-if="!showEditActivity">
                  <p>
                    Les activités désignent les tâches ou les actions que votre entreprise effectue pour atteindre ses objectifs. Elles peuvent être liées à la production de biens ou de services, à la vente, au marketing, à la gestion des ressources humaines, etc. Les activités peuvent être réalisées par votre entreprise elle-même ou par des sous-traitants ou des partenaires.
                    <br><br>
                    Voici quelques exemples (ce ne sont que des exemples) d'activités qui peuvent être importantes pour une entreprise:
                  </p>
                  
                  <ul>
                    <li>
                      Production de biens: si votre entreprise produit des biens, vos activités peuvent inclure la conception, la production, l'emballage et la livraison de vos produits.
                    </li>

                    <li>
                      Prestation de services: si votre entreprise propose des services, vos activités peuvent inclure la consultation, la formation, l'assistance technique, etc.
                    </li>

                    <li>
                      Vente: si votre entreprise vend des produits ou des services, vos activités peuvent inclure la recherche de nouveaux clients, la présentation de produits, la négociation de contrats, etc.
                    </li>

                    <li>
                      Marketing: les activités de marketing peuvent inclure la recherche de marché, la création de campagnes publicitaires, le développement de stratégies de marketing en ligne, etc.
                    </li>

                    <li>
                      Gestion des ressources humaines: les activités de gestion des ressources humaines peuvent inclure la recherche et le recrutement de nouveaux employés, la formation des employés, la gestion des relations avec les employés, etc.
                    </li>
                    <li>
                      Finances: les activités financières comprennent la gestion des comptes, la préparation des budgets, la gestion des investissements et la réalisation d'analyses financières.
                    </li>
                  </ul>
                  <p>
                    Il est important de définir les activités clés de votre entreprise et de les planifier de manière à atteindre vos objectifs de manière efficace.
                  </p>
                </div>
              </div>

              <div v-if="!showEditActivity">
                <p v-html="activityValue" v-if="activityValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditActivity" @click="toggleEditActivity" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditActivity">
                <ckeditor :editor="editor" v-model="activityValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveActivity" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelActivity"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end Activity section ****************** -->            


<!-- ********************** Market section ****************** -->            
<!-- ********************** Market section ****************** -->            

            <b-col id="market" md="12" class="mb-5">      
              <h3 class="sub-section-title">Marchés <i @click="toggleEditMarket" v-if="!showEditMarket" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="marketValue==''">
                <div v-if="!showEditMarket">
                  <p>
                    La partie "marchés" décrit brièvement les caractéristiques du marché, comme sa taille, sa composition, sa localisation, ses besoins et ses habitudes de consommation. Elle devrait également expliquer pourquoi votre entreprise est bien placée pour répondre aux besoins de ce marché et pourquoi elle est capable de se démarquer de la concurrence.
                    <br><br>
                    Voici quelques éléments à inclure dans la partie "marchés" de votre résumé:
                  </p>
                  <ul>
                    <li>
                      Description du marché: décrivez brièvement les caractéristiques de votre marché cible, comme sa taille, sa composition, sa localisation, etc.
                    </li>

                    <li>
                      Besoins du marché: décrivez les besoins du marché et expliquez comment votre produit ou service répond à ces besoins.
                    </li>

                    <li>
                      Habitudes de consommation: décrivez les habitudes de consommation du marché et expliquez comment votre entreprise compte les utiliser à son avantage.
                    </li>

                    <li>
                      Concurrence: décrivez brièvement la concurrence et expliquez pourquoi votre entreprise est bien placée pour se démarquer de la concurrence.
                    </li>
                  </ul>

                  <p>
                    Il est important de décrire de manière concise et précise votre marché cible et de montrer comment votre entreprise est en mesure de répondre efficacement aux besoins de ce marché. Cela peut aider les investisseurs ou les partenaires potentiels à comprendre la valeur de votre entreprise et à déterminer si elle représente un bon investissement.
                  </p>
                </div>
              </div>
              <div v-if="!showEditMarket">
                <p v-html="marketValue" v-if="marketValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditMarket" @click="toggleEditMarket" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditMarket">
                <ckeditor :editor="editor" v-model="marketValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveMarket" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelMarket"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end Market section ****************** -->            


<!-- ********************** key metrics section ****************** -->            
<!-- ********************** Key metrics section ****************** -->            

            <b-col id="keyMetric" md="12" class="mb-5">      
              <h3 class="sub-section-title">Chiffres clés <i @click="toggleEditKeyMetric" v-if="!showEditKeyMetric" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="keyMetricValue==''">
                <div v-if="!showEditKeyMetric">
                  <p>
                    "Chiffres clés" se traduit en anglais par "key metrics" ou "key performance indicators" (KPIs). Il s'agit de mesures quantitatives qui permettent de suivre l'état de santé de votre entreprise et de déterminer si vous atteignez vos objectifs. Les chiffres clés peuvent être utilisés pour évaluer votre performance dans différents domaines, comme les ventes, les coûts, la productivité, etc.
                    <br><br>
                    Voici quelques exemples (ce ne sont que des exemples) de chiffres clés qui peuvent être importants pour une entreprise:
                    <br>
                  </p> 
                  <ul>
                    <li> 
                      Chiffre d'affaires: le chiffre d'affaires représente la valeur totale des ventes réalisées par l'entreprise sur une période donnée.
                    </li>
                    <li>
                      Taux de croissance: le taux de croissance mesure l'évolution du chiffre d'affaires de l'entreprise sur une période donnée.
                    </li>
                    <li>
                      Marge brute: la marge brute représente la différence entre le prix de vente d'un produit et ses coûts de production.
                    </li>
                    <li>
                      Taux de retour sur investissement (ROI): le ROI mesure le rendement sur un investissement en comparant les bénéfices à l'investissement initial.
                    </li>
                    <li>
                      Taux de fidélisation des clients: le taux de fidélisation mesure la proportion de clients qui continuent à acheter des produits ou des services de l'entreprise sur une période donnée.
                    </li>
                  </ul>
                  <p>
                    Il est important de choisir les chiffres clés qui sont les plus pertinents pour votre entreprise et de les suivre de manière régulière pour vous assurer que vous atteignez vos objectifs.
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
            
<!-- ********************** end key metrics section ****************** -->


<!-- ********************** Needs section ****************** -->            
<!-- ********************** Needs section ****************** -->            

            <b-col id="need" md="12" class="mb-5">      
              <h3 class="sub-section-title">Besoins <i @click="toggleEditNeed" v-if="!showEditNeed" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="needValue==''">
                <div v-if="!showEditNeed">
                  <p>
                     les besoins désignent les choses dont votre entreprise a besoin pour atteindre ses objectifs. Ils peuvent être liés à la production de biens ou de services (par exemple, des matières premières, du personnel, des équipements), à la satisfaction des clients (par exemple, des produits de qualité, un service client efficace) ou à la gestion de l'entreprise (par exemple, des systèmes de gestion de la production, des outils de gestion financière).
                     <br><br>
                    Il est important de déterminer les besoins de votre entreprise et de les inclure dans votre business plan afin de développer une stratégie efficace pour les satisfaire. Cela peut vous aider à atteindre vos objectifs et à développer votre entreprise de manière durable.
                    <br>
                  </p> 
                </div>
                
              </div>
              <div v-if="!showEditNeed">
                <p v-html="needValue" v-if="needValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditNeed" @click="toggleEditNeed" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditNeed">
                <ckeditor :editor="editor" v-model="needValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveNeed" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelNeed"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>
            
<!-- ********************** end Needs section ****************** -->            


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
        name: 'Summary',
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

              showEditActivity: false,
              showEditMarket: false,
              showEditKeyMetric: false,
              showEditNeed: false,
              activityValue: "",
              marketValue: "",
              keyMetricValue: "",
              needValue: "",

            };
        },

        methods: {
          toggleEditActivity(){
            this.showEditActivity = true
          },
          saveActivity(){
            this.showEditActivity = false
          },
          cancelActivity(){
            this.showEditActivity = false
          },



          toggleEditMarket(){
            this.showEditMarket = true
          },
          saveMarket(){
            this.showEditMarket = false
          },
          cancelMarket(){
            this.showEditMarket = false
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



          toggleEditNeed(){
            this.showEditNeed = true
          },
          saveNeed(){
            this.showEditNeed = false
          },
          cancelNeed(){
            this.showEditNeed = false
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