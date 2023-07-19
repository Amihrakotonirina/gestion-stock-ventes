<template>
  <div class="main-content">
    <b-row>

      <b-col md="3">
        <b-list-group>
          <b-list-group-item class="border-0" href="#">
            <a href="#segmentation">
              <i class="icon-regular i-Next1 mr-2"></i>
              Segmentation du marché
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#targetMarket">
              <i class="icon-regular i-Next1 mr-2"></i>
              Marché cible
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#keyMetric">
              <i class="icon-regular i-Next1 mr-2"></i>
              Besoins
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#need">
              <i class="icon-regular i-Next1 mr-2"></i>
              Demande
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#need">
              <i class="icon-regular i-Next1 mr-2"></i>
              Concurrence
            </a>
          </b-list-group-item>
          <b-list-group-item class="border-0" href="#">
            <a href="#need">
              <i class="icon-regular i-Next1 mr-2"></i>
              Positionnement sur le marché
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
              <h1>Etude du marché</h1>


          <b-row>
            <div class="p-4 notice"> 
              <b-col lg="2" class="pull-left float-left">
                <i class="notice-icon i-Information"></i>
              </b-col>
              <b-col>
              <p>
                Une étude de votre secteur d'activité et de la concurrence. La partie "étude de marché" de votre business plan est l'occasion d'analyser en détail votre marché cible, de comprendre ses besoins et ses tendances, et de déterminer comment votre entreprise peut y répondre.
              </p>
              </b-col>
            </div>
          </b-row>

<!-- ********************** Segmentation section ****************** -->            
          <b-row>
            <b-col id="segmentation" md="12" class="mb-5">      
              <h3 class="sub-section-title">Segmentation du marché <i @click="toggleEditSegmentation" v-if="!showEditSegmentation" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="segmentationValue==''">
                <div v-if="!showEditSegmentation">
                  <p>
                    Segmentez votre marché cible en différents groupes de clients ayant des besoins similaires, en mettant en avant leurs caractéristiques démographiques, psychographiques et comportementales.
                    <br>
                    La segmentation de marché est le processus qui consiste à diviser le marché total en groupes de clients ayant des besoins et des caractéristiques similaires. Le but de la segmentation de marché est de mieux comprendre les différents segments de clients, afin de proposer des produits ou des services adaptés à leurs besoins spécifiques.
<br><br>
La segmentation de marché peut être basée sur plusieurs critères, tels que:






                  </p>
                  
                  <ul>
                    <li>
    Les caractéristiques démographiques: âge, sexe, revenu, niveau d'éducation, etc.
                    </li>

                    <li>
    Les caractéristiques psychographiques: personnalité, valeurs, attitudes, styles de vie, etc.
                    </li>

                    <li>
    Les caractéristiques comportementales: habitudes d'achat, fréquence d'achat, utilisation du produit, etc.
                    </li>

                    <li>
    Les caractéristiques géographiques: lieu de résidence, région, pays, etc.
                    </li>
                  </ul>
                  <p>
                    En segmentant votre marché, vous pouvez mieux comprendre les besoins de vos clients et leur offrir des produits ou des services adaptés à leurs besoins spécifiques. Cela peut vous aider à mieux cibler vos efforts de marketing et à améliorer votre retour sur investissement.
                  </p>
                </div>
              </div>

              <div v-if="!showEditSegmentation">
                <p v-html="segmentationValue" v-if="segmentationValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditSegmentation" @click="toggleEditSegmentation" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditSegmentation">
                <ckeditor :editor="editor" v-model="segmentationValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveSegmentation" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelSegmentation"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end Segmentation section ****************** -->            


<!-- ********************** target market section ****************** -->            
<!-- ********************** target market section ****************** -->            

            <b-col id="targetMarket" md="12" class="mb-5">      
              <h3 class="sub-section-title">Marché cible <i @click="toggleEditTargetMarket" v-if="!showEditTargetMarket" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="targetMarketValue==''">
                <div v-if="!showEditTargetMarket">
                  <p>
                    Le marché cible fait référence au groupe spécifique de clients que l'entreprise vise à atteindre avec ses produits ou services. La définition du marché cible dans cette section du business plan doit inclure une description détaillée des caractéristiques démographiques, géographiques, comportementales et psychographiques des clients visés.
                  </p>
                  <p>
                    
L'objectif de cette partie est de fournir une analyse approfondie du marché cible, de ses besoins, de ses attentes et de ses comportements d'achat. Cette analyse doit permettre à l'entreprise de mieux comprendre les motivations de ses clients potentiels et de déterminer comment elle peut proposer des produits ou services adaptés à leurs besoins spécifiques.
                  </p>
<p>
  La définition du marché cible permet à l'entreprise de concevoir des stratégies de marketing, de développement de produits et de ventes plus efficaces, en se concentrant sur les besoins et les désirs spécifiques de son public cible. Elle peut également aider l'entreprise à mieux comprendre la concurrence et à identifier des opportunités de croissance.
</p>
                  <p>
La définition du marché cible peut également inclure une évaluation de la taille et de la croissance prévue du marché, ainsi que des tendances clés, des opportunités et des menaces qui peuvent affecter le marché. Cette section du business plan est donc cruciale pour aider l'entreprise à définir une stratégie marketing efficace et à se positionner sur le marché de manière compétitive.
                  </p>


                  <ul>
                    <li>    Le ou les segments de marché spécifiques ciblés par l'entreprise (par exemple, les jeunes adultes urbains, les professionnels du secteur de la santé, etc.).
    </li>
                    <li>Les raisons pour lesquelles l'entreprise a choisi de cibler ce marché spécifique (par exemple, adéquation entre les produits ou services de l'entreprise et les besoins des consommateurs de ce segment, opportunité commerciale, etc.).
    </li>
                    <li>Les caractéristiques clés du marché cible (par exemple, taille du marché, taux de croissance, comportements d'achat, etc.).
    </li>
                    <li>Les stratégies de marketing et de vente spécifiques utilisées pour atteindre et convaincre ce marché cible (par exemple, publicités ciblées, événements de promotion, campagnes de marketing direct, etc.).</li>
                  </ul>
                  
                </div>
              </div>
              <div v-if="!showEditTargetMarket">
                <p v-html="targetMarketValue" v-if="targetMarketValue!=''"></p>
              </div>
                  <b-button class="toggleEdit btn btn-sm pull-right float-right" v-if="!showEditTargetMarket" @click="toggleEditTargetMarket" title="Cliquez pour ajouter ou modifier le contenu">
                  Editer le contenu
                  </b-button>
                </p>

              <div v-if="showEditTargetMarket">
                <ckeditor :editor="editor" v-model="targetMarketValue" :config="editorConfig"></ckeditor>
                <div class="pull-right float-right mt-2">
                  <b-button  @click="saveTargetMarket" class="m-2"> <i class="icon-regular mr-2 i-Yes"></i>Enregistrer </b-button>
                  <b-button @click="cancelTargetMarket"> <i class="icon-regular mr-2 i-Close"> </i>Annuler </b-button>
                </div>
              </div>
            </b-col>

<!-- ********************** end target market section ****************** -->            


<!-- ********************** besoins clients section ****************** -->            
<!-- ********************** besoins clients section ****************** -->            

            <b-col id="keyMetric" md="12" class="mb-5">      
              <h3 class="sub-section-title">Analyse des besoins des clients <i @click="toggleEditKeyMetric" v-if="!showEditKeyMetric" class="i-Pen-3 float-right pull-right edit-icon"></i> <i class="i-Close float-right pull-right edit-icon"></i></h3>
              <div v-if="keyMetricValue==''">
                <div v-if="!showEditKeyMetric">
                  <p>
                    L'analyse des besoins des clients est une section clé de l'étude de marché d'un business plan. Cette analyse vise à identifier les besoins et les désirs des clients potentiels et à évaluer comment les produits ou services de l'entreprise peuvent répondre à ces besoins.
</p>
<p>
Dans cette section, l'entreprise doit décrire en détail les caractéristiques de ses clients cibles, telles que leur âge, leur sexe, leur profession, leur localisation géographique, etc. Elle doit également expliquer comment ses produits ou services répondent aux besoins des clients, en mettant en évidence les avantages clés offerts par l'entreprise par rapport à la concurrence.
</p>

<p>
L'analyse des besoins des clients peut inclure des données provenant de différentes sources, comme des enquêtes, des focus groups, des études de marché, ou des analyses des comportements d'achat passés. L'analyse doit également prendre en compte les facteurs externes qui peuvent influencer les besoins des clients, comme les tendances du marché, les nouvelles technologies, les changements réglementaires, etc.



                    </p>
                  <p>
                    En somme, l'analyse des besoins des clients est une étape cruciale pour l'entreprise dans la mesure où elle permet d'adapter son offre de produits ou de services aux attentes et besoins des clients, et de se positionner ainsi de manière plus compétitive sur le marché.
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
            
<!-- ********************** end besoins clients section ****************** -->


<!-- ********************** demande section ****************** -->            
<!-- ********************** demande section ****************** -->            

            <b-col id="need" md="12" class="mb-5">      
              <h3 class="sub-section-title">Analyse de la demande <i @click="toggleEditNeed" v-if="!showEditNeed" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="needValue==''">
                <div v-if="!showEditNeed">
                  <p>
 L'analyse de la demande vise à évaluer la demande potentielle pour les produits ou services de l'entreprise sur le marché.
<br>
<br>
Cette analyse peut inclure l'identification des tendances du marché, des habitudes de consommation, des comportements d'achat, ainsi que l'identification des facteurs qui peuvent influencer la demande, comme les changements démographiques, les tendances économiques, les évolutions technologiques, les réglementations, etc.
<br>
<br>

L'analyse de la demande peut également inclure l'évaluation de la taille du marché potentiel, en termes de volume, de valeur et de parts de marché. Elle peut également inclure des projections de croissance future de la demande pour les produits ou services de l'entreprise, ainsi que des hypothèses sur l'évolution des tendances et des facteurs externes qui peuvent influencer la demande.

<br>
<br>
En somme, l'analyse de la demande permet à l'entreprise de mieux comprendre les besoins et les désirs des clients potentiels, ainsi que les tendances et les facteurs externes qui peuvent influencer la demande pour ses produits ou services. Cette analyse peut aider l'entreprise à identifier les opportunités de marché et à se positionner de manière plus compétitive sur le marché.
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
            
<!-- ********************** end demande section ****************** -->            




<!-- ********************** concurrence section ****************** -->            
<!-- ********************** concurrence section ****************** -->            

            <b-col id="need" md="12" class="mb-5">      
              <h3 class="sub-section-title">Analyse de la concurrence <i @click="toggleEditNeed" v-if="!showEditNeed" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="needValue==''">
                <div v-if="!showEditNeed">
                  <p>
 L'analyse de la concurrence consiste à identifier les entreprises qui proposent des produits ou services similaires ou substituables à ceux de l'entreprise étudiée, ainsi que leurs points forts et leurs faiblesses.
<br>
<br>
Cette analyse peut inclure l'identification des principaux concurrents, de leur part de marché, de leur positionnement sur le marché, de leurs canaux de distribution, de leur stratégie de prix, de leur stratégie de marketing, de leurs forces et de leurs faiblesses, ainsi que des opportunités et des menaces qu'ils peuvent représenter pour l'entreprise étudiée.
<br>
<br>

L'analyse de la concurrence peut également inclure une évaluation des barrières à l'entrée sur le marché, telles que les coûts de développement de produits, les coûts de marketing, la réglementation, etc. Cette évaluation peut aider à déterminer la viabilité de l'entreprise sur le marché, en identifiant les obstacles potentiels à l'entrée et les stratégies nécessaires pour les surmonter.
<br>
<br>

En somme, l'analyse de la concurrence permet à l'entreprise de mieux comprendre son environnement concurrentiel, ainsi que les forces et les faiblesses de ses concurrents. Cette analyse peut aider l'entreprise à se positionner de manière plus compétitive sur le marché et à développer des stratégies efficaces pour faire face à la concurrence.
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
            
<!-- ********************** end concurrence section ****************** -->            




<!-- ********************** Positionnement section ****************** -->            
<!-- ********************** Positionnement section ****************** -->            

            <b-col id="need" md="12" class="mb-5">      
              <h3 class="sub-section-title">Positionnement sur le marché <i @click="toggleEditNeed" v-if="!showEditNeed" class="i-Pen-3 float-right pull-right edit-icon"></i></h3>
              <div v-if="needValue==''">
                <div v-if="!showEditNeed">
                  <p>
Le positionnement sur le marché est un concept qui se réfère à la manière dont une entreprise souhaite être perçue par ses clients potentiels. Il s'agit de la place qu'une entreprise souhaite occuper sur le marché par rapport à ses concurrents.
<br>
<br>
Le positionnement sur le marché implique de déterminer les caractéristiques, les avantages et les valeurs que l'entreprise souhaite mettre en avant auprès de ses clients. Cette analyse prend en compte plusieurs facteurs tels que la qualité, la gamme de produits, les services offerts, le prix, l'image de marque, etc.
<br>
<br>

Le positionnement sur le marché est important car il permet à l'entreprise de se différencier de ses concurrents et de se concentrer sur les segments de marché les plus pertinents pour elle. Il est également important de s'assurer que le positionnement choisi est en adéquation avec les objectifs de l'entreprise, ses ressources, ses capacités et les besoins du marché.
<br>
<br>

En résumé, le positionnement sur le marché dans l'étude de marché est une analyse de la manière dont une entreprise souhaite être perçue par ses clients potentiels par rapport à ses concurrents. Cela peut aider l'entreprise à déterminer les caractéristiques, les avantages et les valeurs qu'elle souhaite mettre en avant pour se différencier de ses concurrents et atteindre ses objectifs commerciaux.
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
            
<!-- ********************** end Positionnement section ****************** -->            


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
        name: 'MarketResearch',
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

              showEditSegmentation: false,
              showEditTargetMarket: false,
              showEditKeyMetric: false,
              showEditNeed: false,
              segmentationValue: "",
              targetMarketValue: "",
              keyMetricValue: "",
              needValue: "",

            };
        },

        methods: {
          toggleEditSegmentation(){
            this.showEditSegmentation = true
          },
          saveSegmentation(){
            this.showEditSegmentation = false
          },
          cancelSegmentation(){
            this.showEditSegmentation = false
          },



          toggleEditTargetMarket(){
            this.showEditTargetMarket = true
          },
          saveTargetMarket(){
            this.showEditTargetMarket = false
          },
          cancelTargetMarket(){
            this.showEditTargetMarket = false
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