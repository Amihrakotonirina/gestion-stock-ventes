<template>
  <div class="message">
        <div class="chat icon-bouton-container">
            <!--div class="ring-chat icon-buton" v-b-tooltip.hover.v-danger title="Discuter avec un responsable"-->
            <div class="ring-chat icon-buton" title="Discuter avec le responsable">
                <b-icon v-b-modal.modal-1 class="icn" icon="chat-fill" aria-hidden="true" data-toggle="tooltip"></b-icon>    
          </div>
            <!--b-modal id="modal-1" title="Envoyer un message" ok-only no-stacking hide-footer no-close-on-backdrop -->
            <b-modal id="modal-1" title="Envoyer un message" hide-footer>
                <div v-if="utilisateur" class="card card-default">
                            <div class="card-header text-center border-0">Messages
                            </div>
                            <div class="card-body p-0">
                                <div class="message-list" v-chat-scroll>
                                    <div v-for="conversation in conversations" :key='conversation.id'>
                                        <div class="message-row message" v-if="conversation.expId==utilisateur.id">
                                            Moi : <div class="message-text">{{ conversation.message }}</div>
                                            <div class="message-time"><small>{{ conversation.createdAt | moment("from", "now") }}</small></div>
                                        </div>
                                        <div class="message-row reponse" v-if="conversation.expId!=utilisateur.id">
                                            {{conversation.expediteur }} :  <div class="message-text">{{conversation.message}}</div>
                                            <div class="message-time"><small>{{ conversation.createdAt | moment("from", "now") }}</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <!--button @click="hideModal()">Annuler</button-->
                            </div>
                            <form v-on:submit.prevent="envoyerMessage()">
                                <div class="message-form">
                                    <textarea cols="200" v-model="message" placeholder="Entrez votre message..." class="input-message"></textarea>
                                    <button type="submit"><b-icon icon="cursor-fill"></b-icon></button>
                                </div>
                            </form>
                </div>
                <div v-if="!utilisateur" class="card card-default" style="padding: 15px;">
                    <h6 style="text-align: center; min-height: 75px;">Veuillez vous connecter pour discuter avec un responsable.</h6>
                    <b-row>
                        <b-col>
                            <a class="btn btn-primary btn-block btn-sm" href="https://erohy.com/login">Se connecter</a>
                        </b-col>
                        <b-col>
                            <a class="btn btn-primary btn-block btn-sm" href="https://erohy.com/register">Créer un compte</a>
                        </b-col>
                    </b-row>
                </div>
            </b-modal>

            <!--b-modal id="modal-multi-2" title="OBTENTION DU PSEUDO" ok-only no-stacking hide-footer>
                <b-form>
                    <b-form-group id="input-group-1" label="Pseudo" label-for="input-1">
                        <b-form-input
                        id="input-1"
                        placeholder="Ajoutez votre pseudo..."
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Genre" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        placeholder="Féminin/Masculin..."
                        required
                        ></b-form-input>
                    </b-form-group>
                    
                    <b-form-group id="input-group-3" label="Situation" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        type="email"
                        placeholder="Etudiant/autre..."
                        required
                        ></b-form-input>
                    </b-form-group>
                    
                    <b-form-group id="input-group-4" label="Mot de passe" label-for="input-4">
                        <b-form-input
                        id="input-4"
                        type="password"
                        placeholder="Votre mot de passe..."
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="success">Enregistrer</b-button>
                    
                    <p>Vous avez un pseudo? Connectez-vous <b-button v-b-modal.modal-1>ici</b-button></p>
                </b-form>   
            </b-modal-->
    </div>
         
         
  </div>
</template>


<script>

import moment from 'vue-moment'
import axios from 'axios'


export default {
  name: 'Chat',
  data(){
    return{
        idExpo:null,
        expo: [],
        utilisateur:null,
        conversations:[], //entre 2 utilisateurs
        //discussions:null, //toutes conversations
        message:'',
        moment:moment,
        currentUserCorrespondant:null,
        currentIdUserCorrespondant:0,
        polling: null
    }
    
  },


  methods:{
        /*hideModal() {
            this.$refs['modal-1'].hide()
        },*/
        chargerConversations(){
           
           /* axios.get(`/message/prive/api/conversations/${this.utilisateur.id}/${this.currentUserCorrespondant.id}`, {*/
            axios.get(`/message/prive/api/conversations/${this.utilisateur.id}/${this.currentIdUserCorrespondant}`, {
            headers:{
                  'Accept': 'application/json',
              }
            })
            .then(response => {
                this.conversations = JSON.parse(response.data)
                //let convs = JSON.parse(response.data)
                //console.log('conversation dans la méthode chargerConversations() = ')
                //console.log(this.conversations)
                /*this.conversations = []
                convs.map(function(value, key) {
                 this.conversations.push(value);
               });*/
            })
        },

/*        chargerDiscussions(){
            axios.get(`/message/prive/api/all-conversations`, {
            headers:{
                  'Accept': 'application/json',
              }
            })
            .then(response => {
                this.discussions = JSON.parse(response.data)
                console.log('discussions = ')
                console.log(this.discussions)
            })
        },*/


        envoyerMessage(){
            if(this.message!=''){
                /*axios.post(`/message/prive/api-new/${this.currentUserCorrespondant.id}`, {*/
                axios.post(`/message/prive/api-new/${this.currentIdUserCorrespondant}`, {
                        message: this.message
                    })
                    .then(response => {
                        console.log(response.data);
                        //this.conversations = response.data;
                        //this.chargerConversations()
                        //this.conversations = [... this.conversations, response.data]
                        this.message = '';
                        //this.$emit('user-authenticated', userUri);
                        //this.password = '';
                        this.hideModal()
                    }).catch(error => {
                        console.log(error.response.data);
                    }) //fin post axios
            }//fin if message vide
                
        }, //fin envoyerMessage

        pollData () {
        this.polling = setInterval(() => {
            this.maMethode()
        }, 3000)
    },
    maMethode(){
    var appVar = document.querySelector('#user-info');
            //console.log(appVar.dataset.userInfo)
        if(appVar.dataset.userInfo=="" || appVar.dataset.userInfo==null){
          console.log("utilisateur non connecté")
        }
        else{
            var utilisateur = JSON.parse(appVar.dataset.userInfo);
            this.utilisateur = utilisateur
        }

    let idFromRoute = parseInt(this.$route.params.id) + 1
        this.idExpo = idFromRoute - 1
        let url = `/api/exposants/${this.idExpo}`
        axios.get(url , {headers:{'Accept': 'application/json'}})
        .then(response => { 
          this.expo = response.data
            console.log("expo")
            console.log(this.expo)
        });

        axios.get(`/api/expo-to-user/${this.idExpo}` , {headers:{'Accept': 'application/json'}})
        .then(response => { 
          this.currentUserCorrespondant = JSON.parse(response.data)
          this.currentIdUserCorrespondant = parseInt(this.currentUserCorrespondant.id) + 1 -1
        console.log('eto indray')
          console.log(this.currentUserCorrespondant)
            console.log(this.currentIdUserCorrespondant*1)
            this.chargerConversations()
        });
    }
  },


  created(){
    //console.log('créée')
  },


  beforeMount(){
        
 },


  mounted(){

    this.pollData()
        
  }
  
   
}
</script>

<style scoped>
    *{
        box-sizing: border-box; 
        font-family: cursive;
        font-family: Century Gothic;
    }
    .form-group{
        position: relative;
        width: 100%;
        margin-top: 10px;
    }


    .message-list {
        height: 320px; 
        overflow-y: scroll;
        display: flex;
        flex-direction: column-reverse;
        padding: 0 20px;
    }

    .message-row {
        display: grid;
        grid-template-columns: 70%;
        margin-bottom: 20px;
    }

    .message {
        justify-content: end;
        justify-items: end;
    }

    .reponse {
        justify-items: start;
    }

    .message-text {
        padding: 9px 14px;
        margin-bottom: 5px;
    }

    .message-time {
        color: #787878;
    }

    .message .message-text {
        background: #39B3E3;
        color: #FFF;
        border: 1px solid #39B3E3;
        border-radius: 14px 14px 0 14px;
    }

    .reponse .message-text {
        background: #3AE3AC;
        color: #FFF;
        border: 1px solid #3AE3AC;
        border-radius: 14px 14px 14px 0;
    }

    .message-form {
        display: flex;
        justify-content: space-between;
        padding: 0 !important;
        box-shadow: 0 0 5px 5px rgba(222, 222, 222, 0.4);
    }
    .input-message {
        padding: 7px 10px;
        outline: none;
        line-height: 1.3em;
        min-height: 1.7em;
        max-height: 10rem;
        display: block;
        /max-width: 88%;
        margin-right: 2.5%;
    }
    textarea {
        overflow: hidden; 
        overflow-wrap: break-word; 
        resize: horizontal; 
        height: 35px;
    }
</style>