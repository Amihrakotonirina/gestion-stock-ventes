<template>
<div class="main-content">
     
  <b-card no-body style="background: rgb(242, 253, 249);">
  <div class="imgBx" width="50%" >
            <img class="img-fluid" alt="" src="" width="20%" >
        </div>
  
    <b-tabs v-model="tabIndex" small card>


     <b-tab title="A propos" active>
          <h2 style="text-align:center">Test d'orientation</h2>
          <b-card>
            <p>
              Le Test RIASEC ou "test de HOLLAND", mis ou point par le psychologue John L. HOLLAND, est une théorie sur les carrières et choix vocationnels qui s’appuie sur 6 types de personnes du travail : « <strong>Réaliste</strong>», « <strong>investigateur</strong> », « <strong>Artistique</strong> », « <strong>Social</strong> », « <strong>Entreprenant</strong> », et « <strong>Conventionnel</strong> ». Selon HOLLAND, les personnes d'un même « type » exercent souvent le même genre de travail, parce qu'ils s'apparentent par leur personnalité, parce qu'ils poursuivent des objectifs semblables, parce qu'ils présentent les mêmes dispositions physiques et psychologiques à l’égard de leur travail. La typologie d'une personne est établie en mesurant son degré d'affinité avec chacun des 6 types de manière à le classer en ordre d'importance, du type le plus marqué ou type le moins marqué. Chez la plupart des gens, ce sont surtout les deux ou trois premiers types de leur hiérarchie personnelle qui ont une influence significative sur leur manière d'être et d’agir, tant dans leur vie personnelle que professionnelle. <br> <br>
            </p>
          </b-card>
            <div class="text-center">
            <b-button-group class="mt-2" >
                <b-button @click="tabIndex++">Suivant</b-button>
            </b-button-group>
            </div> 
    </b-tab>


    <b-tab title="Consigne">
          <h2 style="text-align:center">Veuillez lire avant de commencer !!!!</h2>
          <b-card style="text-align:justify">
            Ce test d’orientation professionnelle est divisé en quatre parties : 
              <h5>1-  Intérêts et activités </h5>
              <h5>2-  Intérêts et occupations </h5>
              <h5>3-  Aptitudes </h5>
              <h5>4-  Personnalités </h5>
            Chaque partie est composée d'une série de questions, veuillez répondre spontanément et le plus honnêtement possible afin de connaître vos intérêts 
            professionnels et ressortir les pistes de métiers qui vous correspondent le mieux par rapport à vos réponses. <br> <br>
            Votre profil d’intérêts professionnels
            dominant ressortira une fois le test terminé. <br> <br>
            
            
            <p>
              Veuillez noter que le test est assez long, et nécessite une concentration, nous vous conseillons d'effectuer le test dans un endroit calme.
            </p>
            
             <h3 style="text-align:center">Nous vous souhaitons un bon test ! </h3>
          </b-card>
            <div class="text-center">
            <b-button-group class="mt-2" >
                <b-button @click="tabIndex--" >Précedent</b-button>
                <b-button @click="tabIndex++">Suivant</b-button>
            </b-button-group>
            </div> 
    </b-tab>



      <b-tab title="1- Intérêts et activités">
      <h2 style="text-align:center">Partie 1 : Intérêts et activités</h2>
          <p>Voici une liste d'activités. Cocher les cases qui se rapportent aux activités que vous aimez ou que vous aimeriez pratiquer. Il est important de ne pas cocher si l'activité vous déplaît ou vous laisse indifférent(e). <br>
              Pour remplir cette partie, considérez que vous avez les capacités, les connaissances et la formation nécessaires pour effectuer ces activités. Tenez compte uniquement de vos goûts.</p> 
        <b-card-text>


        <!-- Partie 01 -->
          <b-table-simple hover small caption-top responsive>  
    
          
          <h5 class="write">R</h5>
    <b-tbody >
    
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Planter, entretenir des arbres, des arbustes, des fleurs ou cultiver le sol. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td width="2%">2</b-td>
        <b-td>Faire de la couture. </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td width="2%">3</b-td>
        <b-td>Effectuer des réparations électriques ou électroniques. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Réparer des automobiles.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Fabriquer des objets avec du bois. </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Conduire un camion ou un tracteur. </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="rVal1"></b-td>
      </b-tr>
       <b-tr>
        <b-td>7</b-td>
        <b-td>Faire des déménagements.  </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Entretenir ou réparer de la plomberie ou des systèmes de ventilation.</b-td>
        <b-td><input type="checkbox" :value="8" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Travailler avec des animaux et en prendre soin. </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Travailler à l'extérieur (exposer à la pluie, au soleil, au froid). </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Travailler avec de la machinerie. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Préparer des repas, des banquets. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Travailler avec des outils tels que tournevis, ciseaux, pince, etc. </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Effectuer des travaux de peinture. </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Suivre un cours de dessin mécanique.</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="rVal1"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des R</strong> </b-td>
        <b-td><strong> {{ rVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>



        <b-table-simple hover small caption-top responsive>
   <h5 class="write">I</h5>
   <!--b-alert v-if="limiter1" show dismissible variant="danger" style="justify-content:center;"></b-alert-->
    <b-tbody>
       <b-tr>
        <b-td width="2%">I</b-td>
        <b-td>Lire des revues scientifiques ou spécialisées. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Faire des expériences sur le comportement des animaux. </b-td>
        <b-td><input type="checkbox" :value="2" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Effectuer des analyses en laboratoire. </b-td>
        <b-td><input type="checkbox"  :value="3" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Suivre des cours de sciences. </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Établir un diagnostic de maladie chez des patients. </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Expérimenter de nouvelles cultures végétales. </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Créer une nouvelle source d'énergie. </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Concevoir un barrage électrique, un pont, une autoroute, etc. </b-td>
        <b-td><input type="checkbox"  :value="8" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Résoudre des problèmes mathématiques.    </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="iVal1" ></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Faire des recherches scientifiques pour satisfaire ma curiosité. </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Produire un rapport sur l'évolution économique d'une région. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Concevoir un plan de reboisement. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Planifier des soins ou des traitements à donner à des patients. </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="iVal1" ></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Faire des recherches sur les civilisations anciennes. </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="iVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Faire de la programmation informatique. </b-td>
        <b-td><input type="checkbox"  :value="15" v-model="iVal1"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des I</strong> </b-td>
        <b-td><strong> {{ iVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>



        <b-table-simple hover small caption-top responsive>
   <h5 class="write">A</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Écrire des romans, des articles de journaux. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Dessiner des meubles, des plans de maison, des décors. etc. </b-td>
        <b-td><input type="checkbox" :value="2" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Interpréter ou mettre en scène une pièce de théâtre.</b-td>
        <b-td><input type="checkbox"  :value="3" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Jouer dans un orchestre.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Créer des pièces d'artisanat. </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="aVal1" ></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Imaginer de nouvelles façons de faire les choses. </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Embellir l'environnement. </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Créer une nouvelle coupe de cheveux ou de nouveau vêtement. </b-td>
        <b-td><input type="checkbox"  :value="8" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Faire de la photographie publicitaire ou artistique. </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="aVal1" ></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Concevoir et réaliser des arrangements de fleurs.  </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Imaginer une bande dessinée. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Peindre des tableaux pour une exposition. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Décorer des vitrines de magasins. </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Écrire des critiques de pièces de théâtre, de films, de livres, etc. </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="aVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Apprendre des langues.</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="aVal1"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des A</strong> </b-td>
        <b-td><strong> {{ aVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>

        <b-table-simple hover small caption-top responsive>
   <h5 class="write">S</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>S'engager dans des organismes sociaux ou communautaires. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Rencontrer des gens pour les aider à résoudre leurs problèmes personnels. </b-td>
        <b-td><input type="checkbox" :value="2" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Travailler dans une garderie d'enfants. </b-td>
        <b-td><input type="checkbox"  :value="3" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Enseigner aux enfants, aux adolescents, aux adultes. </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Aider les gens à prendre conscience de leurs possibilités. </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Animer un groupe.  </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Agir comme hôte / hôtesse lors d'un congrès. </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Tenir un kiosque d'information. </b-td>
        <b-td><input type="checkbox"  :value="8" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Offrir un service d'aide téléphonique. </b-td>
        <b-td><input type="checkbox"  :value="9"  v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Consulter les gens sur leurs besoins (sondage, enquête, etc.). </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>S'occuper des personnes handicapées physiquement. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Soigner un malade. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Aider les délinquants à se réhabiliter.  </b-td>
        <b-td><input type="checkbox"  :value="13"  v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Organiser des loisirs. </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="sVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Échanger des idées avec d'autres personnes.</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="sVal1"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des S</strong> </b-td>
        <b-td><strong> {{ sVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>

        <b-table-simple hover small caption-top responsive>
   <h5 class="write">E</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Vendre un produit ou une idée.  </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Mettre sur pied son propre commerce. </b-td>
        <b-td><input type="checkbox" :value="2" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Donner des conférences. </b-td>
        <b-td><input type="checkbox"  :value="3" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Acheter pour le compte d'un grand magasin.  </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Marchander. </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Diriger du personnel. </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Défendre une cause.  </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Faire de la sélection de candidats.  </b-td>
        <b-td><input type="checkbox"  :value="8" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>S'engager à fond dans des activités sociales au travail ou dans son quartier. </b-td>
        <b-td><input type="checkbox"  :value="9"  v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Diriger une entreprise financière. </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Lancer un nouveau produit. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Fonder un club de consommateurs, une association de protection de l'environnement, une activité de récupération de papier. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Gérer un projet spécial. </b-td>
        <b-td><input type="checkbox"  :value="13"  v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Faire de la politique (municipal, scolaire, provincial). </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="eVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Lancer un concours de promotion, une campagne de publicité.</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="eVal1"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des E</strong> </b-td>
        <b-td><strong> {{ eVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>

        <b-table-simple hover small caption-top responsive>
   <h5 class="write">C</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Établir des comptes-rendus des dépenses. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Préparer des procès-verbaux de réunions. </b-td>
        <b-td><input type="checkbox" :value="2"  v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Tenir une caisse dans un établissement commercial ou financier. </b-td>
        <b-td><input type="checkbox"  :value="3" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Faire un inventaire et passer des commandes. </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Manipuler un appareil à traitement de textes. </b-td>
        <b-td><input type="checkbox"  :value="5"  v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Maintenir un système de classement (archive, bibliothèque, bureau, etc.) </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Garder mon espace de travail à l'ordre. </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Faire des opérations mathématiques pour préparer des rapports ou faire la tenue de livres. </b-td>
        <b-td><input type="checkbox"  :value="8" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>S'adonner à des activités régulières. </b-td>
        <b-td><input type="checkbox"  :value="9"  v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Classer des lettres, des rapports, des dossiers. </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Recevoir et faire des appels téléphoniques. </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Vérifier des rapports financiers. </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Faire fonctionner toutes sortes de machines de bureau. </b-td>
        <b-td><input type="checkbox"  :value="13"  v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Effectuer des tâches clairement définies. </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="cVal1"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Dactylographier ou réviser des lettres ou des rapports.</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="cVal1"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des C</strong> </b-td>
        <b-td><strong> {{ cVal1.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>




        </b-card-text>

        <div class="text-center">
      <b-button-group class="mt-2" >
        <b-button @click="tabIndex++">{{suiv}}</b-button>
      </b-button-group>
    </div>
      </b-tab>



      <b-tab title="2- Intérêts et occupations">
       <h2 style="text-align:center">Partie 2 : Intérêts et occupations : </h2>
          <p>Cocher les cases qui se rapportent aux professions qui vous conviendraient. Ne vous préoccupez pas de savoir si vous pouvez réussir dans tel métier ou dans telle profession, ni de votre préparation actuelle. Ne songez ni au salaire, ni à l'avancement mais demandez-vous si le travail en question est susceptible de vous plaire.</p>
        <b-card-text>

        <!-- Partie 02 -->
  <b-table-simple hover small caption-top responsive>
    
    <h5 class="write">R</h5>
        <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Mécanicien / mécanicienne d'auto </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Éleveur / éleveuse de bétails </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Technicien / technicienne dentaire  </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Travailleur / travailleuse de la construction (menuiserie) </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Couturier / couturière en usine </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Technicien / technicienne en aménagement de la faune </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Horloger /horlogère </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Technicien / technicienne du meuble et du bois ouvré (ébéniste)  </b-td>
        <b-td><input type="checkbox" :value="8" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Plombier / plombière </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Technicien / technicienne en mécanique du bâtiment </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Conducteur / conductrice d'autobus </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Technicien / technicienne en entretien d'aéronefs </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Réparateur/ réparatrice de télévision </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Ingénieur / ingénieure civil </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="rVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Cuisinier / cuisinière</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="rVal2"></b-td>
      </b-tr>      
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des R</strong> </b-td>
        <b-td><strong> {{ rVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>

  <b-table-simple hover small caption-top responsive>
   <h5 class="write">I</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Ingénieur/ ingénieure en chimie, physique  </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Technicien / technicienne en laboratoire médical  </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Chercheur / chercheuse scientifique </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Technicien / technicienne en radiologie (rayon X)  </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Biologiste  </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Technicien / technicienne en informatique </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Médecin ou vétérinaire </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Technicien / technicienne en transformation des produits forestiers </b-td>
        <b-td><input type="checkbox" :value="8" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Météorologiste </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Astronome (étudie le mouvement des astres dans le ciel) </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Technicien / technicienne en dessin conception mécanique </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Economiste </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Technicien / -cienne en procédés métallurgiques (spécialiste dans la transformation des métaux) </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Botaniste </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Technicien / -cienne en chimie analytique (analyse de nouveaux produits chimiques).</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="iVal2"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des I</strong> </b-td>
        <b-td><strong> {{ iVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">A</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Musicien / musicienne </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Écrivain / écrivaine </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Fleuriste </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Journaliste  </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Décorateur / décoratrice d'intérieur </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Compositeur / compositrice (musique) </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Mannequin </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Photographe </b-td>
        <b-td><input type="checkbox" :value="8" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Graphiste </b-td>
        <b-td><input type="checkbox" :value="9" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Directeur de publicité  </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Architecte </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Interprète  </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Chanteur / chanteuse </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Comédien / comédienne </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Professeur de dessin</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="aVal2"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des A</strong> </b-td>
        <b-td><strong> {{ aVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">S</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Infirmier / infirmière auxiliaire </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Agent / agente à l'aide sociale  </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Travailleur / travailleuse sociale </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Barmaid / barman </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Professeur à l'élémentaire </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Technicien / technicienne en loisirs </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Technicien / technicienne en garderie d'enfants </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Orthophoniste, orthopédagogue (correction des troubles de l'apprentissage)  </b-td>
        <b-td><input type="checkbox" :value="8" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Esthéticien / esthéticienne </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Technicien / technicienne policier / policière  </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Médecin généraliste (de famille) </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Directeur/ directrice du personnel </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Bibliothécaire </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Technicien / technicienne en hygiène dentaire </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Technicien / technicienne en réadaptation physique</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="sVal2"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des S</strong> </b-td>
        <b-td><strong> {{ sVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">E</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Agent / agente de publicité (marketing)  </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Avocat / avocate </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Agent / agente de bord </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Chef de rayons de supermarché </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Commis-vendeur / vendeuse </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Directeur / directrice d'une entreprise </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Politicien / politicienne </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Directeur / directrice des ventes </b-td>
        <b-td><input type="checkbox" :value="8" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Vendeur / vendeuse d'assurances </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Gérant / gérante d'hôtel </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Technicien / technicienne en tourisme </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Propriétaire d'un commerce </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Courtier / coutière en immeubles </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Acheteur / acheteuse </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Agent / agente de voyage</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="eVal2"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des E</strong> </b-td>
        <b-td><strong> {{ eVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


    


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">C</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Commis-comptable </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Technicien / technicienne en finance (comptabilité) </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Opérateur / opératrice en informatique </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Secrétaire de service juridique, médical </b-td>
        <b-td><input type="checkbox"  :value="4" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Archiviste médical </b-td>
        <b-td><input type="checkbox"  :value="5" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Commis aux renseignements </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Bibliotechnicien / bibliotechnicienne </b-td>
        <b-td><input type="checkbox"  :value="7" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Expert / experte en impôt </b-td>
        <b-td><input type="checkbox" :value="8" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Caissier / caissière de banque </b-td>
        <b-td><input type="checkbox"  :value="9" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Réceptionniste </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>11</b-td>
        <b-td>Commis au service de la paie </b-td>
        <b-td><input type="checkbox"  :value="11" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>12</b-td>
        <b-td>Gérant / gérante du service de crédits </b-td>
        <b-td><input type="checkbox"  :value="12" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>13</b-td>
        <b-td>Commis de bureau </b-td>
        <b-td><input type="checkbox"  :value="13" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>14</b-td>
        <b-td>Sténodactylo, opérateur (-trice) de saisie </b-td>
        <b-td><input type="checkbox"  :value="14" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr>
        <b-td>15</b-td>
        <b-td>Technicien / technicienne judiciaire (aux greffes)</b-td>
        <b-td><input type="checkbox"  :value="15" v-model="cVal2"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des C</strong> </b-td>
        <b-td><strong> {{ cVal2.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>



        
        </b-card-text>
        <div class="text-center">
      <b-button-group class="mt-2" >
        <b-button @click="tabIndex++">{{suiv}}</b-button>
      </b-button-group>
    </div>
      </b-tab>


<b-tab title="3- Aptitudes ">
 <h2 style="text-align:center">Partie 3 : Aptitudes </h2>
        <p>Voici une liste d'aptitudes, d'habiletés, de talents qui sont en rapport avec des occupations. Évaluez-vous le plus objectivement possible en sélectionnant dans la colonne de droite le niveau d'aptitudes que vous pensez posséder : Faible, Moyen, Fort. Ne vous sous-estimez pas ou ne vous surestimez pas. Soyez honnête envers vous-même et évaluez votre capacité réelle</p>
        <b-card-text>
        
        <!-- Partie 03 -->
  <b-table-simple hover small caption-top responsive>

    <h5 class="write">R</h5>
    <b-tbody>
       <b-tr>
        <b-td>1</b-td>
        <b-td>Ma capacité à soulever des poids lourds est :</b-td>
        <b-td>
          <input id="r-question-01-radio-01" type="radio" name="r-question-01"  value="1" v-model="rVal3[0]">
          <label for="r-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-01-radio-02" type="radio" name="r-question-01"  value="2" v-model="rVal3[0]">
          <label for="r-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-01-radio-03" type="radio" name="r-question-01"  value="3" v-model="rVal3[0]">
          <label for="r-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td>Ma capacité à utiliser des outils, des objets, des machines avec précision est : </b-td>
        <b-td>
          <input id="r-question-02-radio-01" type="radio" name="r-question-02"  value="1" v-model="rVal3[1]">
          <label for="r-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-02-radio-02" type="radio" name="r-question-02"  value="2" v-model="rVal3[1]">
          <label for="r-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-02-radio-03" type="radio" name="r-question-02"  value="3" v-model="rVal3[1]">
          <label for="r-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Mon habileté à conduire un gros véhicule (camion, autobus) est : </b-td>
        <b-td>
          <input id="r-question-03-radio-01" type="radio" name="r-question-03"  value="1" v-model="rVal3[2]">
          <label for="r-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-03-radio-02" type="radio" name="r-question-03"  value="2" v-model="rVal3[2]">
          <label for="r-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-03-radio-03" type="radio" name="r-question-03"  value="3" v-model="rVal3[2]">
          <label for="r-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Mon aptitude à lire des plans est :   </b-td>
        <b-td>
          <input id="r-question-04-radio-01" type="radio" name="r-question-04"  value="1" v-model="rVal3[3]">
          <label for="r-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-04-radio-02" type="radio" name="r-question-04"  value="2" v-model="rVal3[3]">
          <label for="r-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-04-radio-03" type="radio" name="r-question-04"  value="3" v-model="rVal3[3]">
          <label for="r-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Mon habileté dans les mouvements demandant à voir et à manipuler en même temps est :  </b-td>
        <b-td>
          <input id="r-question-05-radio-01" type="radio" name="r-question-05"  value="1" v-model="rVal3[4]">
          <label for="r-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-05-radio-02" type="radio" name="r-question-05"  value="2" v-model="rVal3[4]">
          <label for="r-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-05-radio-03" type="radio" name="r-question-05"  value="3" v-model="rVal3[4]">
          <label for="r-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td>Ma capacité à comprendre le fonctionnement des éléments de base de tout ouvrage mécanique, électrique (turbine, moteur, pompe...) est : </b-td>
        <b-td>
          <input id="r-question-06-radio-01" type="radio" name="r-question-06"  value="1" v-model="rVal3[5]">
          <label for="r-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-06-radio-02" type="radio" name="r-question-06"  value="2" v-model="rVal3[5]">
          <label for="r-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-06-radio-03" type="radio" name="r-question-06"  value="3" v-model="rVal3[5]">
          <label for="r-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>La rapidité de mes réflexes est :  </b-td>
        <b-td>
          <input id="r-question-07-radio-01" type="radio" name="r-question-07"  value="1" v-model="rVal3[6]">
          <label for="r-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-07-radio-02" type="radio" name="r-question-07"  value="2" v-model="rVal3[6]">
          <label for="r-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-07-radio-03" type="radio" name="r-question-07"  value="3" v-model="rVal3[6]">
          <label for="r-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Mon habileté à faire des réparations est :   </b-td>
        <b-td>
          <input id="r-question-08-radio-01" type="radio" name="r-question-08"  value="1" v-model="rVal3[7]">
          <label for="r-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-08-radio-02" type="radio" name="r-question-08"  value="2" v-model="rVal3[7]">
          <label for="r-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-08-radio-03" type="radio" name="r-question-08"  value="3" v-model="rVal3[7]">
          <label for="r-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Ma capacité à m'occuper d'élevage d'animaux est :  </b-td>
        <b-td>
          <input id="r-question-09-radio-01" type="radio" name="r-question-09"  value="1" v-model="rVal3[8]">
          <label for="r-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-09-radio-02" type="radio" name="r-question-09"  value="2" v-model="rVal3[8]">
          <label for="r-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-09-radio-03" type="radio" name="r-question-09"  value="3" v-model="rVal3[8]">
          <label for="r-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Ma capacité à installer et à manipuler divers outils, machines ou appareils est : </b-td>
        <b-td>
          <input id="r-question-10-radio-01" type="radio" name="r-question-10"  value="1" v-model="rVal3[9]">
          <label for="r-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="r-question-10-radio-02" type="radio" name="r-question-10"  value="2" v-model="rVal3[9]">
          <label for="r-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="r-question-10-radio-03" type="radio" name="r-question-10"  value="3" v-model="rVal3[9]">
          <label for="r-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des R</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalR3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
      
    </b-tbody>
  </b-table-simple>        
        <!-- Partie 03 -->
  
  <b-table-simple hover small caption-top responsive>

    <h5 class="write">I</h5>
    <b-tbody>

       <b-tr>
        <b-td>1</b-td>
        <b-td>Mes aptitudes en mathématiques sont : </b-td>
        <b-td>
          <input id="i-question-01-radio-01" type="radio" name="i-question-01"  value="1" v-model="iVal3[0]">
          <label for="i-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-01-radio-02" type="radio" name="i-question-01"  value="2" v-model="iVal3[0]">
          <label for="i-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-01-radio-03" type="radio" name="i-question-01"  value="3" v-model="iVal3[0]">
          <label for="i-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td>Mes capacités en sciences (biologie, physique, chimie) sont :  </b-td>
        <b-td>
          <input id="i-question-02-radio-01" type="radio" name="i-question-02"  value="1" v-model="iVal3[1]">
          <label for="i-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-02-radio-02" type="radio" name="i-question-02"  value="2" v-model="iVal3[1]">
          <label for="i-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-02-radio-03" type="radio" name="i-question-02"  value="3" v-model="iVal3[1]">
          <label for="i-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Ma capacité à me concentrer sur une tâche abstraite est : </b-td>
        <b-td>
          <input id="i-question-03-radio-01" type="radio" name="i-question-03"  value="1" v-model="iVal3[2]">
          <label for="r-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-03-radio-02" type="radio" name="i-question-03"  value="2" v-model="iVal3[2]">
          <label for="i-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-03-radio-03" type="radio" name="i-question-03"  value="3" v-model="iVal3[2]">
          <label for="i-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Ma capacité d'analyse est : </b-td>
        <b-td>
          <input id="i-question-04-radio-01" type="radio" name="i-question-04"  value="1" v-model="iVal3[3]">
          <label for="i-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-04-radio-02" type="radio" name="i-question-04"  value="2" v-model="iVal3[3]">
          <label for="i-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-04-radio-03" type="radio" name="i-question-04"  value="3" v-model="iVal3[3]">
          <label for="i-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Ma capacité de synthèse est : </b-td>
        <b-td>
          <input id="i-question-05-radio-01" type="radio" name="i-question-05"  value="1" v-model="iVal3[4]">
          <label for="i-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-05-radio-02" type="radio" name="i-question-05"  value="2" v-model="iVal3[4]">
          <label for="i-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-05-radio-03" type="radio" name="i-question-05"  value="3" v-model="iVal3[4]">
          <label for="i-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td> Mon talent à rédiger clairement un texte est : </b-td>
        <b-td>
          <input id="i-question-06-radio-01" type="radio" name="i-question-06"  value="1" v-model="iVal3[5]">
          <label for="i-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-06-radio-02" type="radio" name="i-question-06"  value="2" v-model="iVal3[5]">
          <label for="i-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-06-radio-03" type="radio" name="i-question-06"  value="3" v-model="iVal3[5]">
          <label for="i-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>Ma capacité à saisir et comprendre des directives rapidement est : </b-td>
        <b-td>
          <input id="i-question-07-radio-01" type="radio" name="i-question-07"  value="1" v-model="iVal3[6]">
          <label for="i-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-07-radio-02" type="radio" name="i-question-07"  value="2" v-model="iVal3[6]">
          <label for="i-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-07-radio-03" type="radio" name="i-question-07"  value="3" v-model="iVal3[6]">
          <label for="i-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Mon habileté à apprendre des nouveaux sujets avec facilité et avec aise est : </b-td>
        <b-td>
          <input id="i-question-08-radio-01" type="radio" name="i-question-08"  value="1" v-model="iVal3[7]">
          <label for="i-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-08-radio-02" type="radio" name="i-question-08"  value="2" v-model="iVal3[7]">
          <label for="i-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-08-radio-03" type="radio" name="i-question-08"  value="3" v-model="iVal3[7]">
          <label for="i-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Mon habileté à solutionner des problèmes abstraits est : </b-td>
        <b-td>
          <input id="i-question-09-radio-01" type="radio" name="i-question-09"  value="1" v-model="iVal3[8]">
          <label for="i-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-09-radio-02" type="radio" name="i-question-09"  value="2" v-model="iVal3[8]">
          <label for="i-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-09-radio-03" type="radio" name="i-question-09"  value="3" v-model="iVal3[8]">
          <label for="i-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Mon habileté à faire des travaux de laboratoire est :</b-td>
        <b-td>
          <input id="i-question-10-radio-01" type="radio" name="i-question-10"  value="1" v-model="iVal3[9]">
          <label for="i-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="i-question-10-radio-02" type="radio" name="i-question-10"  value="2" v-model="iVal3[9]">
          <label for="i-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="i-question-10-radio-03" type="radio" name="i-question-10"  value="3" v-model="iVal3[9]">
          <label for="i-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des I</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalI3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
      
    </b-tbody>
  </b-table-simple>        
        <!-- Partie 03 -->
          <b-table-simple hover small caption-top responsive>

    <h5 class="write">A</h5>
    <b-tbody>
       <b-tr>
        <b-td>1</b-td>
        <b-td>Ma capacité à me représenter la forme d'objets en deux ou trois dimensions est : </b-td>
        <b-td>
          <input id="a-question-01-radio-01" type="radio" name="a-question-01"  value="1" v-model="aVal3[0]">
          <label for="a-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-01-radio-02" type="radio" name="a-question-01"  value="2" v-model="aVal3[0]">
          <label for="a-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-01-radio-03" type="radio" name="a-question-01"  value="3" v-model="aVal3[0]">
          <label for="a-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td>Ma capacité à apprendre des langues, y compris ma langue maternelle est :  </b-td>
        <b-td>
          <input id="a-question-02-radio-01" type="radio" name="a-question-02"  value="1" v-model="aVal3[1]">
          <label for="a-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-02-radio-02" type="radio" name="a-question-02"  value="2" v-model="aVal3[1]">
          <label for="a-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-02-radio-03" type="radio" name="a-question-02"  value="3" v-model="aVal3[1]">
          <label for="a-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Mon aptitude en arts plastiques (dessin, sculpture, peinture, etc.) est : </b-td>
        <b-td>
          <input id="a-question-03-radio-01" type="radio" name="a-question-03"  value="1" v-model="aVal3[2]">
          <label for="a-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-03-radio-02" type="radio" name="a-question-03"  value="2" v-model="aVal3[2]">
          <label for="a-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-03-radio-03" type="radio" name="a-question-03"  value="3" v-model="aVal3[2]">
          <label for="a-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Mon aptitude dans les arts de la scène (théâtre, danse, musique, etc.) est : </b-td>
        <b-td>
          <input id="a-question-04-radio-01" type="radio" name="a-question-04"  value="1" v-model="aVal3[3]">
          <label for="a-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-04-radio-02" type="radio" name="a-question-04"  value="2" v-model="aVal3[3]">
          <label for="a-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-04-radio-03" type="radio" name="a-question-04"  value="3" v-model="aVal3[3]">
          <label for="a-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Ma capacité d'inventer, de créer, de concevoir est : </b-td>
        <b-td>
          <input id="a-question-05-radio-01" type="radio" name="a-question-05"  value="1" v-model="aVal3[4]">
          <label for="a-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-05-radio-02" type="radio" name="a-question-05"  value="2" v-model="aVal3[4]">
          <label for="a-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-05-radio-03" type="radio" name="a-question-05"  value="3" v-model="aVal3[4]">
          <label for="a-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td>Ma capacité à accepter la critique est : </b-td>
        <b-td>
          <input id="a-question-06-radio-01" type="radio" name="a-question-06"  value="1" v-model="aVal3[5]">
          <label for="a-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-06-radio-02" type="radio" name="a-question-06"  value="2" v-model="aVal3[5]">
          <label for="a-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-06-radio-03" type="radio" name="a-question-06"  value="3" v-model="aVal3[5]">
          <label for="a-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>Ma capacité à travailler par moi-même est : </b-td>
        <b-td>
          <input id="a-question-07-radio-01" type="radio" name="a-question-07"  value="1" v-model="aVal3[6]">
          <label for="a-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-07-radio-02" type="radio" name="a-question-07"  value="2" v-model="aVal3[6]">
          <label for="a-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-07-radio-03" type="radio" name="a-question-07"  value="3" v-model="aVal3[6]">
          <label for="a-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Mon aptitude à exprimer concrètement mes idées créatrices dans le médium de mon choix (musique, écriture, danse, dessin, etc.) est : </b-td>
        <b-td>
          <input id="a-question-08-radio-01" type="radio" name="a-question-08"  value="1" v-model="aVal3[7]">
          <label for="a-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-08-radio-02" type="radio" name="a-question-08"  value="2" v-model="aVal3[7]">
          <label for="a-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-08-radio-03" type="radio" name="a-question-08"  value="3" v-model="aVal3[7]">
          <label for="a-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Mon aptitude à tolérer l'insécurité (peur du lendemain) est : </b-td>
        <b-td>
          <input id="a-question-09-radio-01" type="radio" name="a-question-09"  value="1" v-model="aVal3[8]">
          <label for="a-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-09-radio-02" type="radio" name="a-question-09"  value="2" v-model="aVal3[8]">
          <label for="a-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-09-radio-03" type="radio" name="a-question-09"  value="3" v-model="aVal3[8]">
          <label for="a-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Mon habileté à observer les légères différences de forme ou de teinte est : </b-td>
        <b-td>
          <input id="a-question-10-radio-01" type="radio" name="a-question-10"  value="1" v-model="aVal3[9]">
          <label for="a-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="a-question-10-radio-02" type="radio" name="a-question-10"  value="2" v-model="aVal3[9]">
          <label for="a-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="a-question-10-radio-03" type="radio" name="a-question-10"  value="3" v-model="aVal3[9]">
          <label for="a-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des A</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalA3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>        
        <!-- Partie 03 -->
          <b-table-simple hover small caption-top responsive>

    <h5 class="write">S</h5>
    <b-tbody>
       <b-tr>
        <b-td>1</b-td>
        <b-td>Mon aptitude à travailler en équipe est :</b-td>
        <b-td>
          <input id="s-question-01-radio-01" type="radio" name="s-question-01"  value="1" v-model="sVal3[0]">
          <label for="s-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-01-radio-02" type="radio" name="s-question-01"  value="2" v-model="sVal3[0]">
          <label for="s-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-01-radio-03" type="radio" name="s-question-01"  value="3" v-model="sVal3[0]">
          <label for="s-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td>Mon sens de l'organisation est : </b-td>
        <b-td>
          <input id="s-question-02-radio-01" type="radio" name="s-question-02"  value="1" v-model="sVal3[1]">
          <label for="s-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-02-radio-02" type="radio" name="s-question-02"  value="2" v-model="sVal3[1]">
          <label for="s-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-02-radio-03" type="radio" name="s-question-02"  value="3" v-model="sVal3[1]">
          <label for="s-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Ma faculté de prévoir, de deviner (intuition) est : </b-td>
        <b-td>
          <input id="s-question-03-radio-01" type="radio" name="s-question-03"  value="1" v-model="sVal3[2]">
          <label for="s-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-03-radio-02" type="radio" name="s-question-03"  value="2" v-model="sVal3[2]">
          <label for="s-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-03-radio-03" type="radio" name="s-question-03"  value="3" v-model="sVal3[2]">
          <label for="s-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Ma capacité à diriger des interactions dans un groupe (animation) est : </b-td>
        <b-td>
          <input id="s-question-04-radio-01" type="radio" name="s-question-04"  value="1" v-model="sVal3[3]">
          <label for="s-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-04-radio-02" type="radio" name="s-question-04"  value="2" v-model="sVal3[3]">
          <label for="s-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-04-radio-03" type="radio" name="s-question-04"  value="3" v-model="sVal3[3]">
          <label for="s-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Ma capacité à maintenir des relations suivies avec les sens est :</b-td>
        <b-td>
          <input id="s-question-05-radio-01" type="radio" name="s-question-05"  value="1" v-model="sVal3[4]">
          <label for="s-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-05-radio-02" type="radio" name="s-question-05"  value="2" v-model="sVal3[4]">
          <label for="s-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-05-radio-03" type="radio" name="s-question-05"  value="3" v-model="sVal3[4]">
          <label for="s-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td>Mon aptitude à être touché/e par les émotions des autres tout en demeurant objectif (empathie) est : </b-td>
        <b-td>
          <input id="s-question-06-radio-01" type="radio" name="s-question-06"  value="1" v-model="sVal3[5]">
          <label for="s-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-06-radio-02" type="radio" name="s-question-06"  value="2" v-model="sVal3[5]">
          <label for="s-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-06-radio-03" type="radio" name="s-question-06"  value="3" v-model="sVal3[5]">
          <label for="s-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>Ma capacité à réagir correctement devant les situations qui se présentent (équilibre émotionnel) est : </b-td>
        <b-td>
          <input id="s-question-07-radio-01" type="radio" name="s-question-07"  value="1" v-model="sVal3[6]">
          <label for="s-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-07-radio-02" type="radio" name="s-question-07"  value="2" v-model="sVal3[6]">
          <label for="s-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-07-radio-03" type="radio" name="s-question-07"  value="3" v-model="sVal3[6]">
          <label for="s-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Ma capacité à aider les autres, à les comprendre, à les écouter est : </b-td>
        <b-td>
          <input id="s-question-08-radio-01" type="radio" name="s-question-08"  value="1" v-model="sVal3[7]">
          <label for="s-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-08-radio-02" type="radio" name="s-question-08"  value="2" v-model="sVal3[7]">
          <label for="s-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-08-radio-03" type="radio" name="s-question-08"  value="3" v-model="sVal3[7]">
          <label for="s-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Ma capacité à expliquer les choses clairement est : </b-td>
        <b-td>
          <input id="s-question-09-radio-01" type="radio" name="s-question-09"  value="1" v-model="sVal3[8]">
          <label for="s-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-09-radio-02" type="radio" name="s-question-09"  value="2" v-model="sVal3[8]">
          <label for="s-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-09-radio-03" type="radio" name="s-question-09"  value="3" v-model="sVal3[8]">
          <label for="s-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Ma capacité à communiquer avec les autres est :</b-td>
        <b-td>
          <input id="s-question-10-radio-01" type="radio" name="s-question-10"  value="1" v-model="sVal3[9]">
          <label for="s-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="s-question-10-radio-02" type="radio" name="s-question-10"  value="2" v-model="sVal3[9]">
          <label for="s-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="s-question-10-radio-03" type="radio" name="s-question-10"  value="3" v-model="sVal3[9]">
          <label for="s-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des S</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalS3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
      
    </b-tbody>
  </b-table-simple>        
        <!-- Partie 03 -->
          <b-table-simple hover small caption-top responsive>

    <h5 class="write">E</h5>
    <b-tbody>
       <b-tr>
        <b-td>1</b-td>
        <b-td>Ma facilité à m'exprimer en public est  :</b-td>
        <b-td>
          <input id="e-question-01-radio-01" type="radio" name="e-question-01"  value="1" v-model="eVal3[0]">
          <label for="e-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-01-radio-02" type="radio" name="e-question-01"  value="2" v-model="eVal3[0]">
          <label for="e-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-01-radio-03" type="radio" name="e-question-01"  value="3" v-model="eVal3[0]">
          <label for="e-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td> Mon talent pour vendre est :  </b-td>
        <b-td>
          <input id="e-question-02-radio-01" type="radio" name="e-question-02"  value="1" v-model="eVal3[1]">
          <label for="e-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-02-radio-02" type="radio" name="e-question-02"  value="2" v-model="eVal3[1]">
          <label for="e-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-02-radio-03" type="radio" name="e-question-02"  value="3" v-model="eVal3[1]">
          <label for="e-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Mon sens des affaires est : </b-td>
        <b-td>
          <input id="e-question-03-radio-01" type="radio" name="e-question-03"  value="1" v-model="eVal3[2]">
          <label for="e-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-03-radio-02" type="radio" name="e-question-03"  value="2" v-model="eVal3[2]">
          <label for="e-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-03-radio-03" type="radio" name="e-question-03"  value="3" v-model="eVal3[2]">
          <label for="e-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Mon habileté à diriger, à mener les autres est : </b-td>
        <b-td>
          <input id="e-question-04-radio-01" type="radio" name="e-question-04"  value="1" v-model="eVal3[3]">
          <label for="e-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-04-radio-02" type="radio" name="e-question-04"  value="2" v-model="eVal3[3]">
          <label for="e-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-04-radio-03" type="radio" name="e-question-04"  value="3" v-model="eVal3[3]">
          <label for="e-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Ma capacité à prendre une décision seul/e est : </b-td>
        <b-td>
          <input id="e-question-05-radio-01" type="radio" name="e-question-05"  value="1" v-model="eVal3[4]">
          <label for="e-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-05-radio-02" type="radio" name="e-question-05"  value="2" v-model="eVal3[4]">
          <label for="e-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-05-radio-03" type="radio" name="e-question-05"  value="3" v-model="eVal3[4]">
          <label for="e-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td>Mon habileté à me faire valoir en société est : </b-td>
        <b-td>
          <input id="e-question-06-radio-01" type="radio" name="e-question-06"  value="1" v-model="eVal3[5]">
          <label for="e-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-06-radio-02" type="radio" name="e-question-06"  value="2" v-model="eVal3[5]">
          <label for="e-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-06-radio-03" type="radio" name="e-question-06"  value="3" v-model="eVal3[5]">
          <label for="e-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>Mon aptitude à défendre une cause est :</b-td>
        <b-td>
          <input id="e-question-07-radio-01" type="radio" name="e-question-07"  value="1" v-model="eVal3[6]">
          <label for="e-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-07-radio-02" type="radio" name="e-question-07"  value="2" v-model="eVal3[6]">
          <label for="e-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-07-radio-03" type="radio" name="e-question-07"  value="3" v-model="eVal3[6]">
          <label for="e-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Ma capacité à être le premier/ière à proposer ou à faire quelque chose est : </b-td>
        <b-td>
          <input id="e-question-08-radio-01" type="radio" name="e-question-08"  value="1" v-model="eVal3[7]">
          <label for="e-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-08-radio-02" type="radio" name="e-question-08"  value="2" v-model="eVal3[7]">
          <label for="e-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-08-radio-03" type="radio" name="e-question-08"  value="3" v-model="eVal3[7]">
          <label for="e-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Mon talent pour persuader les gens est : </b-td>
        <b-td>
          <input id="e-question-09-radio-01" type="radio" name="e-question-09"  value="1" v-model="eVal3[8]">
          <label for="e-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-09-radio-02" type="radio" name="e-question-09"  value="2" v-model="eVal3[8]">
          <label for="e-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-09-radio-03" type="radio" name="e-question-09"  value="3" v-model="eVal3[8]">
          <label for="e-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Ma capacité à demeurer enthousiaste et énergique même en situation difficile est :</b-td>
        <b-td>
          <input id="e-question-10-radio-01" type="radio" name="e-question-10"  value="1" v-model="eVal3[9]">
          <label for="e-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="e-question-10-radio-02" type="radio" name="e-question-10"  value="2" v-model="eVal3[9]">
          <label for="e-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="e-question-10-radio-03" type="radio" name="e-question-10"  value="3" v-model="eVal3[9]">
          <label for="e-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des E</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalE3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
      
    </b-tbody>
  </b-table-simple>        
        <!-- Partie 03 -->
          <b-table-simple hover small caption-top responsive>

    <h5 class="write">C</h5>
    <b-tbody>
       <b-tr>
        <b-td>1</b-td>
        <b-td>Ma capacité à me conformer aux règles établies est : </b-td>
        <b-td>
          <input id="c-question-01-radio-01" type="radio" name="c-question-01"  value="1" v-model="cVal3[0]">
          <label for="c-question-01-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-01-radio-02" type="radio" name="c-question-01"  value="2" v-model="cVal3[0]">
          <label for="c-question-01-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-01-radio-03" type="radio" name="c-question-01"  value="3" v-model="cVal3[0]">
          <label for="c-question-01-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>2</b-td>
        <b-td>Mon aptitude à travailler avec précision est : </b-td>
        <b-td>
          <input id="c-question-02-radio-01" type="radio" name="c-question-02"  value="1" v-model="cVal3[1]">
          <label for="c-question-02-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-02-radio-02" type="radio" name="c-question-02"  value="2" v-model="cVal3[1]">
          <label for="c-question-02-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-02-radio-03" type="radio" name="c-question-02"  value="3" v-model="cVal3[1]">
          <label for="c-question-02-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>3</b-td>
        <b-td>Ma capacité à disposer les choses selon le rang, la place qui leur convient est :</b-td>
        <b-td>
          <input id="c-question-03-radio-01" type="radio" name="c-question-03"  value="1" v-model="cVal3[2]">
          <label for="c-question-03-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-03-radio-02" type="radio" name="c-question-03"  value="2" v-model="cVal3[2]">
          <label for="c-question-03-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-03-radio-03" type="radio" name="c-question-03"  value="3" v-model="cVal3[2]">
          <label for="c-question-03-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>4</b-td>
        <b-td>Mon aptitude en français est : </b-td>
        <b-td>
          <input id="c-question-04-radio-01" type="radio" name="c-question-04"  value="1" v-model="cVal3[3]">
          <label for="c-question-04-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-04-radio-02" type="radio" name="c-question-04"  value="2" v-model="cVal3[3]">
          <label for="c-question-04-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-04-radio-03" type="radio" name="c-question-04"  value="3" v-model="cVal3[3]">
          <label for="c-question-04-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>5</b-td>
        <b-td>Mon aptitude à travailler avec les chiffres est : </b-td>
        <b-td>
          <input id="c-question-05-radio-01" type="radio" name="c-question-05"  value="1" v-model="cVal3[4]">
          <label for="c-question-05-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-05-radio-02" type="radio" name="c-question-05"  value="2" v-model="cVal3[4]">
          <label for="c-question-05-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-05-radio-03" type="radio" name="c-question-05"  value="3" v-model="cVal3[4]">
          <label for="c-question-05-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>6</b-td>
        <b-td>Ma capacité à observer les détails est : </b-td>
        <b-td>
          <input id="c-question-06-radio-01" type="radio" name="c-question-06"  value="1" v-model="cVal3[5]">
          <label for="c-question-06-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-06-radio-02" type="radio" name="c-question-06"  value="2" v-model="cVal3[5]">
          <label for="c-question-06-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-06-radio-03" type="radio" name="c-question-06"  value="3" v-model="cVal3[5]">
          <label for="c-question-06-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>7</b-td>
        <b-td>Ma capacité à m'adapter à un travail routinier est : </b-td>
        <b-td>
          <input id="c-question-07-radio-01" type="radio" name="c-question-07"  value="1" v-model="cVal3[6]">
          <label for="c-question-07-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-07-radio-02" type="radio" name="c-question-07"  value="2" v-model="cVal3[6]">
          <label for="c-question-07-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-07-radio-03" type="radio" name="c-question-07"  value="3" v-model="cVal3[6]">
          <label for="c-question-07-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>8</b-td>
        <b-td>Ma capacité à tenir des dossiers et des registres à jour est : </b-td>
        <b-td>
          <input id="c-question-08-radio-01" type="radio" name="c-question-08"  value="1" v-model="cVal3[7]">
          <label for="c-question-08-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-08-radio-02" type="radio" name="c-question-08"  value="2" v-model="cVal3[7]">
          <label for="c-question-08-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-08-radio-03" type="radio" name="c-question-08"  value="3" v-model="cVal3[7]">
          <label for="c-question-08-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>9</b-td>
        <b-td>Ma capacité à comprendre et à exécuter des instructions est : </b-td>
        <b-td>
          <input id="c-question-09-radio-01" type="radio" name="c-question-09"  value="1" v-model="cVal3[8]">
          <label for="c-question-09-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-09-radio-02" type="radio" name="c-question-09"  value="2" v-model="cVal3[8]">
          <label for="c-question-09-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-09-radio-03" type="radio" name="c-question-09"  value="3" v-model="cVal3[8]">
          <label for="c-question-09-radio-03">Fort</label>
        </b-td>
      </b-tr>

       <b-tr>
        <b-td>10</b-td>
        <b-td>Mon aptitude à comprendre les structures administratives est :</b-td>
        <b-td>
          <input id="c-question-10-radio-01" type="radio" name="c-question-10"  value="1" v-model="cVal3[9]">
          <label for="c-question-10-radio-01">Faible</label>
        </b-td>
        <b-td>
          <input id="c-question-10-radio-02" type="radio" name="c-question-10"  value="2" v-model="cVal3[9]">
          <label for="c-question-10-radio-02">Moyen</label>
        </b-td>
        <b-td>
          <input id="c-question-10-radio-03" type="radio" name="c-question-10"  value="3" v-model="cVal3[9]">
          <label for="c-question-10-radio-03">Fort</label>
        </b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des C</strong> </b-td>
        <b-td></b-td>
        <b-td><strong> {{ calculTotalC3 }}</strong> </b-td>
        <b-td></b-td>
      </b-tr>
      
    </b-tbody>
  </b-table-simple>


        </b-card-text>
        <div class="text-center">
      <b-button-group class="mt-2" >
        <b-button @click="tabIndex++">{{suiv}}</b-button>
      </b-button-group>
    </div>
      </b-tab>



      <b-tab title="4-  Personnalités ">
      <h2 style="text-align:center">Partie 4 : Personnalités </h2>
      <p>Voici une liste de traits de caractère, d'attitudes, de tendances personnelles. Cocher la case correspondant aux énoncés qui s'appliquent à vous, qui décrivent le plus honnêtement possible votre façon d'agir.</p>

        <!-- Partie 04 -->
  <b-table-simple hover small caption-top responsive>
    
    <h5 class="write">R</h5>
        <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Je suis conformiste, je me plie facilement aux règlements du milieu où je vis. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Généralement, j'évite de me faire remarquer.</b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>J'aime les choses matérielles, concrètes. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Dans mon travail ou autres, je me montre persistant/e.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Je démontre un esprit d'équipe pratique et je préfère agir plutôt que de discuter trop longuement de ce que l'on va faire.</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Je suis d'un naturel réservé ; pour savoir mon opinion, on doit me le demander. </b-td>
        <b-td><input type="checkbox"  :value="6" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Je suis porté(e) à ménager et à prendre soin de mes biens.</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Je suis stable dans mes opinions, ma façon de vivre, mes amitiés.</b-td>
        <b-td><input type="checkbox" :value="8" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Je me présente toujours au naturel, tel que je suis.</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Avec mon entourage, je suis franc(che) et sincère.</b-td>
        <b-td><input type="checkbox"  :value="10" v-model="rVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des R</strong> </b-td>
        <b-td><strong> {{ rVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>

  <b-table-simple hover small caption-top responsive>
   <h5 class="write">I</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>J'analyse les idées, les événements, ce qui se passe autour de moi.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>J'ai l'esprit critique et n'accepte pas facilement n'importe quelle idée.</b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Je suis d'un naturel très curieux sur à peu près tout.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Je tiens à mon indépendance sur le plan des idées, du travail, etc.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Les gens me considèrent comme une personne intellectuelle plutôt qu'émotive.</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>J'ai l'esprit inventif : il m'arrive souvent de trouver une solution originale et éfficace à un problème.</b-td>
        <b-td><input type="checkbox"  :value="6" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Dans mes activités scolaires ou autres, je me montre méthodique et rationnel(le).</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>J'aime la précision dans tout ce que je fais. </b-td>
        <b-td><input type="checkbox" :value="8" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Je demeure réservé(e) dans l'expression de mes opinions, de mes sentiments et de mes actes.</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Avant toute décision, je réunis le maximum d'information possible.</b-td>
        <b-td><input type="checkbox"  :value="10" v-model="iVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des I</strong> </b-td>
        <b-td><strong> {{ iVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">A</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Mes amis(e)s me considèrent compliqué(e)</b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Dans mes diverses activités, je manque souvent d'ordre</b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Dans mes travaux, je fais preuve d'originalité, d'imagination et d'intuition.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Je suis d'un caractère impulsif.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Mes émotions sont généralement intenses</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>Je suis porté(e) à tout idéaliser et à chercher la perfection.</b-td>
        <b-td><input type="checkbox"  :value="6" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>J'agis et je pense souvent de façon non conformisme, c'est-à-dire différemment des autres.</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>J'exprime mes sentiments par J'entremise de la musique, des beaux-arts, de la poésie, etc</b-td>
        <b-td><input type="checkbox" :value="8" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Les lendemains ne m'inquiètent pas : je vis au jour le jour.</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>J'ai besoin de beaucoup de liberté d'action dans tout ce que j'entreprends. </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="aVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des A</strong> </b-td>
        <b-td><strong> {{ aVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">S</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Quand un problème se pose, je préfère le régler par la discussion et l'entente avec les gens qui m'entourent. </b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Je sais me montrer souple, conciliant(e) </b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Mes amis(e)s me considèrent comme bienveillant et compréhensif(ve).</b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Généralement, les gens peuvent compter sur ma coopération.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Les gens me qualifient de sociable et sympathique.</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td> Je suis d'un naturel serviable.</b-td>
        <b-td><input type="checkbox"  :value="6" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>J'accepte et j'assume des responsabilités.</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>On me considère généreux(se).</b-td>
        <b-td><input type="checkbox" :value="8" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>Dans la majorité des circonstances, je suis perspicace, clairvoyant(e)</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Dans l'action comme dans la façon de m'exprimer, je montre de la délicatesse</b-td>
        <b-td><input type="checkbox"  :value="10" v-model="sVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des S</strong> </b-td>
        <b-td><strong> {{ sVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">E</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td> L'ambition ne m'effraie pas.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>Je suis un(e) optimiste né(e).</b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td>Je suis sociable et populaire; je parle à tout le monde.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td>Je défends toujours mes opinions.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>Il m'arrive souvent de me montrer autoritaire.</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>L'aventure m'attire beaucoup.</b-td>
        <b-td><input type="checkbox"  :value="6" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Généralement, je suis sûr(e) de moi.</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>Mes impulsions me dictent souvent ma conduite.</b-td>
        <b-td><input type="checkbox" :value="8" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td>J'aime être responsable d'activités.</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>Même dans des situations critiques ou tendues, je sais prendre l'initiative nécessaire.</b-td>
        <b-td><input type="checkbox"  :value="10" v-model="eVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des E</strong> </b-td>
        <b-td><strong> {{ eVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


    


  <b-table-simple hover small caption-top responsive>
   <h5 class="write">C</h5>
    <b-tbody>
       <b-tr>
        <b-td width="2%">1</b-td>
        <b-td>Je suis maître de moi, d'un calme exemplaire.</b-td>
        <b-td width="2%"><input type="checkbox"  :value="1" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>2</b-td>
        <b-td>J'obéis facilement aux rèelements et aux ordres.</b-td>
        <b-td width="2%"><input type="checkbox" :value="2" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>3</b-td>
        <b-td> Dans mes travaux, je suis persistant(e) et consciencieux(se).</b-td>
        <b-td width="2%"><input type="checkbox"  :value="3" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>4</b-td>
        <b-td> Je m'efforce de me montrer compétent dans ce ou'on exige de moi.</b-td>
        <b-td><input type="checkbox"  :value="4" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>5</b-td>
        <b-td>L'esprit concret et pratique me guide.</b-td>
        <b-td><input type="checkbox"  :value="5" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>6</b-td>
        <b-td>J'agis méthodiquement dans tout ce que je fais.</b-td>
        <b-td><input type="checkbox"  :value="6" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>7</b-td>
        <b-td>Je travaille avec beaucoup de soin.</b-td>
        <b-td><input type="checkbox"  :value="7" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>8</b-td>
        <b-td>D'une journée à l'autre, j'aime exécuter des tâches semblables.</b-td>
        <b-td><input type="checkbox" :value="8" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>9</b-td>
        <b-td> Je suis timide et je préfère garder pour moi mes sentiments, mes émotions et mes idées.</b-td>
        <b-td><input type="checkbox"  :value="9" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr>
        <b-td>10</b-td>
        <b-td>J'aime recevoir des instructions bien claires qui me permettent de savoir exactement ce qu'on attend de moi. </b-td>
        <b-td><input type="checkbox"  :value="10" v-model="cVal4"></b-td>
      </b-tr>
      <b-tr class="total-container">
        <b-td></b-td>
        <b-td> <strong>Total des C</strong> </b-td>
        <b-td><strong> {{ cVal4.length }}</strong> </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>


      <div>
        <b-button v-b-toggle.collapse-1 variant="info" @click="generateRiasecCode()"> Afficher le(s) résultat(s) </b-button>
        <b-collapse id="collapse-1" class="mt-2">     
          <div>
            <h2 style="text-align:center ; margin-bottom:3%; color: rgb(248, 118, 118);">Votre code RIASEC est {{ riasecCode }}</h2>
          </div>      
        </b-collapse>
      </div>
           
        
  </b-tab >
     


      <b-tab title="RECOMMENCER" @click="reinitialise" >
        <div class="text-center">
            <b-button-group class="mt-2">
                <b-button @click="reinitialise">Recommencer le test</b-button>
            </b-button-group>
        </div>
        
        </b-tab>

       

    </b-tabs>
  </b-card>
      

    
</div>

</template>


<script>
export default {
    data () {
    return {
      tabIndex:0,
      suiv:"Suivant",
      
      riasecCode: "",

      rTotal: 0,
      iTotal: 0,
      aTotal: 0,
      sTotal: 0,
      eTotal: 0,
      cTotal: 0,

      rVal1: [],
      rVal2: [],
      rVal3: [],
      rVal4: [],

      iVal1: [],
      iVal2: [],
      iVal3: [],
      iVal4: [],

      aVal1: [],
      aVal2: [],
      aVal3: [],
      aVal4: [],

      sVal1: [],
      sVal2: [],
      sVal3: [],
      sVal4: [],

      eVal1: [],
      eVal2: [],
      eVal3: [],
      eVal4: [],

      cVal1: [],
      cVal2: [],
      cVal3: [],
      cVal4: [],
    }
  },
  computed: {

      calculTotalR3() {
        return this.rVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },


      calculTotalI3() {
        return this.iVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },

      calculTotalA3() {
        return this.aVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },

      
      calculTotalS3() {
        return this.sVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },

      calculTotalE3() {
        return this.eVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },

      
      calculTotalC3() {
        return this.cVal3.reduce((acc, val) => acc + parseInt(val), 0)
      },
   
  },

  methods: {
      reinitialise() {
          Object.assign(this.$data, this.$options.data());
      },

      calculTotal(){
        this.rTotal = this.rVal1.length + this.rVal2.length + this.calculTotalR3 + this.rVal4.length
        this.iTotal = this.iVal1.length + this.iVal2.length + this.calculTotalI3 + this.iVal4.length
        this.aTotal = this.aVal1.length + this.aVal2.length + this.calculTotalA3 + this.aVal4.length
        this.sTotal = this.sVal1.length + this.sVal2.length + this.calculTotalS3 + this.sVal4.length
        this.eTotal = this.eVal1.length + this.eVal2.length + this.calculTotalE3 + this.eVal4.length
        this.cTotal = this.cVal1.length + this.cVal2.length + this.calculTotalC3 + this.cVal4.length
      },


      generateRiasecCode(){
        this.calculTotal()
        let scoresArray = Object.entries({ R: this.rTotal, I: this.iTotal, A: this.sTotal, S: this.sTotal, E: this.eTotal, C: this.cTotal })
        scoresArray.sort((a, b) => b[1] - a[1]);

        let topThree = scoresArray.slice(0, 3);

        this.riasecCode = topThree.map(d => d[0]).join('');

        console.log(this.scoresArray)
      }
  },
  
}
</script> 


<style scoped>
    .write{
      margin-top: 7%;
      text-align: center;
      color: lightcoral;
    }
    .container{
        text-align: center;
       
    }
    .tit{
        text-align: center;
        color: rgb(122, 236, 221);
        
    
    }
    caption{
        text-align: center;
        color: black;
        font-weight: bolder;
        text-shadow:white 1px 0 10px;
    }

    .total-container{
      background-color: #bbb;
    }

</style>