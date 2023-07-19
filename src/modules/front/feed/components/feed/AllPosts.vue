<template>
	<div class="card-body">
        <div class="text-center">
            <b-button class="btn btn-primary text-white btn-rounded" v-b-modal.modal-1 variant="primary mb-30">
              <b-icon icon="plus-circle"></b-icon> Ajouter un contenu
            </b-button>
        </div>
        <!--div>
            <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-item">
                    <div class="timeline-badge">
                        <i class="badge-icon bg-primary text-white i-Cloud-Picture"></i>
                    </div>
                    <div class="timeline-card card">
                        <div class="card-body">
                            <div class="mb-1">
                                <strong class="mr-1">Amih RAKOTONIRINA</strong> added a new photo
                                <p class="text-muted">3 hours ago</p>
                            </div>
                            <img class="rounded mb-2" src="http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-1.jpg" alt="">
                            <div class="mb-3">
                                <a href="#" class="mr-1">J'aime</a>
                                <a href="#">Commenter</a>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Ajouter un commentaire" aria-label="comment">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-comment1">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-badge">
                        <img class="badge-img" src="http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg" alt="">
                    </div>
                    <div class="timeline-card card">
                        <div class="card-body">
                            <div class="mb-1">
                                <strong class="mr-1">Amih RAKOTONIRINA</strong> updated his sattus
                                <p class="text-muted">16 hours ago</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit
                                ipsa.
                            </p>
                            <div class="mb-3">
                                <a href="#" class="mr-1">J'aime</a>
                                <a href="#">Commenter</a>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Ajouter un commentaire" aria-label="comment">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-comment">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-group text-center">
                    <button class="btn btn-icon-text btn-primary"><i class="i-Calendar-4"></i> 2018</button>
                </li>
            </ul>
            <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-item">
                    <div class="timeline-badge">
                        <i class="badge-icon bg-danger text-white i-Love-User"></i>
                    </div>
                    <div class="timeline-card card">
                        <div class="card-body">
                            <div class="mb-1">
                                <strong class="mr-1">New followers</strong>
                                <p class="text-muted">2 days ago</p>
                            </div>
                            <p><a href="#">Henry krick</a> and 16 others followed you</p>
                            <div class="mb-3">
                                <a href="#" class="mr-1">J'aime</a>
                                <a href="#">Commenter</a>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Ajouter un commentaire" aria-label="comment">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-comment3">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-badge">
                        <i class="badge-icon bg-primary text-white i-Cloud-Picture"></i>
                    </div>
                    <div class="timeline-card card">
                        <div class="card-body">
                            <div class="mb-1">
                                <strong class="mr-1">Amih RAKOTONIRINA</strong> added a new photo
                                <p class="text-muted">2 days ago</p>
                            </div>
                            <img class="rounded mb-2" src="http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-2.jpg" alt="">
                            <div class="mb-3">
                                <a href="#" class="mr-1">J'aime</a>
                                <a href="#">Commenter</a>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Ajouter un commentaire" aria-label="comment">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-comment4">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-group text-center">
                    <button class="btn btn-icon-text btn-warning"><i class="i-Calendar-4"></i> Joined
                        in 2013</button>
                </li>
            </ul>
        </div-->



        <!-- feed -->
        <div>
            <ul class="timeline clearfix">
                <div v-for="post in allPosts.slice().reverse()">       
                    <li class="timeline-item0">
                    <!--li class="timeline-line"></li>
                        <div class="timeline-badge">
                            <i class="badge-icon bg-primary text-white i-Cloud-Picture"></i>
                        </div-->
                        <div class="timeline-card card">
                            <div class="card-body">
                                <div class="mb-1">
                                    <a href="#"><strong>Amih RAKOTONIRINA</strong></a> a ajouté une nouvelle photo
                                    <p class="text-muted">
                                        <timeago :datetime="post.postDate" :auto-update="60"></timeago>
                                    </p>
                                </div>
                                <div>{{post.postContent}}</div>
                                <div class=" mb-1 post-image">
                                    <img class="rounded mb-2" :src="post.postPictureLink" alt="image">
                                </div>
                                <div class="mb-3">
                                    <b-button class="btn btn-primary text-white btn-rounded mr-1" @click="increaseIsa(post)"> <strong> +1 </strong></b-button>
                                    <a href="#">{{post.isa}}</a>
                                </div>
                                <form @submit.prevent="createCommentFormSubmit(post)">
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="commentForm.commentContent" placeholder="Ajouter un commentaire" aria-label="comment">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit" id="button-comment1">Envoyer</button>
                                        </div>
                                    </div>
                                </form>
                                <div v-for="comment in post.allComments.slice().reverse()">
                                    <ul>
                                        <li>
                                            <div class="card comment-conainer mb-1">
                                                <div class="card-body">
                                                    <div class="mb-1">
                                                        <div><a href="#"><strong>{{comment.owner}}</strong></a> : 
                                                        <span class="text-muted">
                                                            <timeago :datetime="comment.commentDate" :auto-update="60"></timeago>
                                                        </span></div>
                                                        <div>{{comment.comment}}</div>
                                                    </div>
                                                 </div>
                                             </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        <!-- end feed -->

<!-- modal -->

          <b-modal id="modal-1" centered title="Créer une publication" hide-footer>
            <b-form @submit.prevent="createPostFormSubmit('primary')">
          
              <b-row>
                   <b-form-group
                      label="Titre :"
                      label-for="input-post"
                      class="col-md-12"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Vous pouvez ajouter un titre"
                        name="input-post"
                        v-model="postForm.postTitle"
                      ></b-form-input>
                    </b-form-group>

                   <b-form-group
                      label="Lien image :"
                      label-for="input-picture-link"
                      class="col-md-12"
                    >
                      <b-form-input
                        type="text"
                        required
                        placeholder="Vous pouvez ajouter un titre"
                        name="input-picture-link"
                        v-model="postForm.postPictureLink"
                      ></b-form-input>
                    </b-form-group>

                </b-row>
 

                  <b-form-group
                      label="Contenu de votre publication :"
                      label-for="post-decription"
                    >
                      <b-form-textarea
                        required
                        rows="5"
                        placeholder="Ajouter du contenu"
                        name="post-decription"
                        v-model="postForm.postContent"
                      ></b-form-textarea>
                  </b-form-group>
                  <!--b-form-group>
                    <vue-tags-input
                      v-model="tag"
                      class="border text-15"
                      :autocomplete-items="filteredItems"
                      :tags="todoForm.autocompleteTag"
                      @tags-changed="
                        (newTags) => (todoForm.autocompleteTag = newTags)
                      "
                      placeholder="Type Developer Category"
                    />
                  </b-form-group>
                  <b-form-group id="input-group-3" label-for="input-3">
                    <b-form-select :value="null" id="input-3" :options="foods">
                      <template v-slot:first>
                        <option :value="null">Select Developer/Designer...</option>
                      </template>
                    </b-form-select>
                  </b-form-group-->
                <b-row>
                  <b-col>
                    <div title="Ajouter une photo">
                      <i class="i-Landscape icn" v-b-modal.modal-lg animation="throb" aria-hidden="true"></i>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-button class="btn-block" type="submit" variant="primary"> Publier </b-button>
                  </b-col>
                  <b-col>
                    <b-button class="btn-block" type="reset" variant="outline-danger"> Effacer les champs </b-button>
                  </b-col>
                </b-row>
              </b-row>
            </b-form>
          </b-modal>

<!-- end modal -->





    </div>
</template>

<script>
//import tagInputVue from "../form/tagInput.vue";


export default {
    name: 'AllPosts',
  data() {
    return {
        postForm: [
            {
              postTitle: "",
              postContent: "",
              postPictureLink: "",
              postDate: new Date(),
              postType: 1,
              isPublished: true,
              isBlocked: false,
              isPublic: true
            }
          ],
        commentForm: [ 
            {
                postId : 1,
                commentContent: "",
                owner: "Mirana RAKOTONIRINA",
                commentDate: new Date(),
                isReply: false
            }
        ],

        allPosts: [
        {
          id: 1,
          postTitle: "Titre du poste",
          postDate: "2023-01-18",
          postPictureLink: "http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-1.jpg",
          postContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          isa: 125,
          isPublished: true,
          postType: 1,
          isBlocked: false,
          isPublic: true,
          allComments:[
              {
                owner: "Miotisoa RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-01-18"
              },
              {
                owner: "Misaina RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-01-19"
              },
              {
                owner: "Mikolo RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-01-20"
              },
              {
                owner: "Midera RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-01-21"
              },
            ]
        },        
        {
          id: 2,
          postTitle: "Titre du poste 2",
          postDate: "2023-02-18",
          postPictureLink: "http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-2.jpg",
          postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit ipsa.",
          isa: 38,
          isPublished: true,
          postType: 1,
          isBlocked: false,
          isPublic: true,
          allComments:[
              {
                owner: "Mikolo RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-18"
              },
              {
                owner: "Midera RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-20"
              },
            ]
        },       
        {
          id: 3,
          postTitle: "Publication sans image",
          postDate: "2023-02-19",
          postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit ipsa.",
          isa: 320,
          isPublished: true,
          postType: 1,
          isBlocked: false,
          isPublic: true,
          allComments:[
              {
                owner: "Miotisoa RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-19"
              },
              {
                owner: "Misaina RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-20"
              }
            ]
        },        
        {
          id: 4,
          postTitle: "Publication sans description",
          postDate: "2023-02-22",
          postPictureLink: "http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-2.jpg",
          postContent: "",
          isa: 0,
          isPublished: true,
          postType: 1,
          isBlocked: false,
          isPublic: true,
          allComments:[

              {
                owner: "Misaina RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-22"
              },
              {
                owner: "Mikolo RAKOTONIRINA",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                commentDate: "2023-02-23"
              },

            ]
        },        
      ],

        }
    },


  methods:{
    createPostFormSubmit(variant = null){
      let inputPostTitle = this.postForm.postTitle;
      let inputPostContent= this.postForm.postContent;
      let inputPostPictureLink = this.postForm.postPictureLink;
      let inputPostDate = new Date();
      let postType = this.postForm.postType;
      let isPublished = this.postForm.isPublished;
      let isBlocked = this.postForm.isBlocked;

      this.allPosts.push({
        postTitle: inputPostTitle,
        postContent: inputPostContent,
        postPictureLink: inputPostPictureLink,
        postDate: inputPostDate,
        postType: postType,
        isPublished: isPublished,
        isBlocked: isBlocked,
        allComments: [],
        isa: 0
      });

      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Contenu publié avec succès",
      });
    },

    createCommentFormSubmit(post){
        let owner = "Mirana RAKOTONIRINA"
        let comment = this.commentForm.commentContent
        let commentDate = new Date()
        
        if (comment.trim() === '') {
          return;
        }

        post.allComments.push({
            id: post.allComments.size +1,
            owner: owner,
            comment: comment,
            commentDate: commentDate
        })
        this.commentForm.commentContent = ""
    },

    increaseIsa(post){
        return post.isa++;
    },

    decreaseIsa(post){
        return post.isa++;
    }

  }

}
</script>
<style scoped>
    .post-image{
        border-bottom: #ccc 1px solid;
    }
    .comment-conainer{

    }
    li {
        list-style-type: none;
    }
</style>