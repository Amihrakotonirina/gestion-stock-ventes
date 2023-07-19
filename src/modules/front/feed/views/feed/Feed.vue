<template>
  <div class="main-content">
    <breadcumb :page="'Journal'" :folder="'Journal'" />
          <b-row class="mb-30">

             <b-col md="3" class="left-content p-3 d-sm-none d-md-block">
                <b-card class="mb-3 text-center">
                  <h5 class="m-0">Frank Powell</h5>
                  <p class="mt-0">UI/UX Designer</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                  <div class="card-socials-simple mt-4">
                          <a href="">
                              <i class="i-Linkedin-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Facebook-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Twitter"></i>
                          </a>
                      </div>
                </b-card>

                <b-card class="mb-3 text-center">
                  <h5 class="m-0">Frank Powell</h5>
                  <p class="mt-0">UI/UX Designer</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                  <div class="card-socials-simple mt-4">
                          <a href="">
                              <i class="i-Linkedin-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Facebook-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Twitter"></i>
                          </a>
                      </div>
                </b-card>
            </b-col>
            <b-col md="6">
              <div class="text-center">
                <h3 class="font-weight-bolder">Bonjour Amih, </h3>
                <p class="mb-30" >voici le contenu de votre journal</p>

                <p class="mb-30" >Atao mifandimby ilany pub dia ilany contenu journal</p>

              </div>
              <AllPosts></AllPosts>
            </b-col>

             <b-col md="3" class="right-content p-3 d-sm-none d-md-block">
                <b-card class="mb-3 text-center">
                  <h5 class="m-0">Frank Powell</h5>
                  <p class="mt-0">UI/UX Designer</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                  <div class="card-socials-simple mt-4">
                          <a href="">
                              <i class="i-Linkedin-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Facebook-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Twitter"></i>
                          </a>
                      </div>
                </b-card>

                <b-card class="mb-3 text-center">
                  <h5 class="m-0">Frank Powell</h5>
                  <p class="mt-0">UI/UX Designer</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                  <div class="card-socials-simple mt-4">
                          <a href="">
                              <i class="i-Linkedin-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Facebook-2"></i>
                          </a>
                          <a href="">
                              <i class="i-Twitter"></i>
                          </a>
                      </div>
                </b-card>
            </b-col>         
          </b-row>

            
  </div>
</template>

<script>
import AllPosts from '@/modules/front/feed/components/feed/AllPosts.vue'

export default {
  name: 'Feed',
  components: {
    AllPosts
  },

  methods:{

  }


};
</script>

<style scoped>
.right-content{
  background-color: #E5E7EB;
  border-radius: 10px;
  position: fixed;
  right: 0;
  min-height: 75%;
}

.left-content{
  background-color: #E5E7EB;
  border-radius: 10px;

  min-height: 75%;
}

</style>
