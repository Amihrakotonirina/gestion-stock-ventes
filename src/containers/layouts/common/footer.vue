 <template>
  <div class="footer_wrap">
    <!-- Footer Start -->
    <div class="flex-grow-1"></div>
    <div class="app-footer">
      <div class="row">
        <div class="col-sm-6 col-md-6 item">
          <img class="logo-forum-footer" src="@/assets/images/logo.png">
          <div class="apropos-footer">
              <h3>A propos</h3>
              <p>e-rohy, le salon digital de l'orientation, de l'emploi et de l'entrepreneuriat est une plateforme digitale dont le but est d’épauler les jeunes étudiants et diplômés à s’orienter académiquement et professionnellement pour un avenir préparé au mieux.</p>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 item liste-liens-footer">
            <h3>Menu</h3>
            <ul>
                <router-link to="/" class="nav-link-footer">Accueil</router-link>
                <router-link to="/virtuel/exposant/1" class="nav-link-footer">Hall d'exposition</router-link>
                <router-link to="/virtuel/conference" class="nav-link-footer">Conférences </router-link>
                <router-link to="/virtuel/liste_metier" class="nav-link-footer">Fiches métiers</router-link>
                <router-link to="/virtuel/test-orientation" class="nav-link-footer">Test d'orientation </router-link>
            </ul>
        </div>

        <div class="col-sm-6 col-md-3 item">
              <h3>Nous contacter</h3>
              <ul>
                  <li><i class="fas fa-map-marker-alt lien-icon"></i> Lot IBM 3 Bis. Tsaralalàna Antananarivo, Madagascar</li>
                  <li><i class="fas fa-phone-alt lien-icon"></i> +261(0) 34 33 777 14 </li>
                  <li><i class="fas fa-phone-alt lien-icon"></i> +261(0) 34 33 777 63 </li>
                  <li><i class="far fa-envelope lien-icon"></i> contact.erohy@gmail.com </li>
              </ul>
              <div class="col item social">
                  <a href="https://www.facebook.com/Ndaoianatra/" target="_blank"><b-icon class="social-icon-footer" v-b-modal.modal-prevent-closing icon="facebook" aria-hidden="true"></b-icon></a>
                  <a href="https://www.linkedin.com/company/amikal-project/?viewAsMember=true" target="_blank"><b-icon class="social-icon-footer" v-b-modal.modal-prevent-closing icon="linkedin" aria-hidden="true"></b-icon></a>
                  <a href="https://www.youtube.com/channel/UCshNIR6tEcV96tp-H5V7J1g" target="_blank"><b-icon class="social-icon-footer" v-b-modal.modal-prevent-closing icon="youtube" aria-hidden="true"></b-icon></a>
              </div>
          </div>
                    
      </div>
      <div
        class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
      >
        <div class="d-flex align-items-center">
          <div>
            <div>
              <div class="col item social">
                        <p> <small><a  target="_blank" href="/documents/cgu/CGU-site-erohy.pdf">Mentions légales</a>  <a  target="_blank" href="#">  </a>  <a  target="_blank" href="#"> </a></small></p>
                        <p>© <a href="mailto:amikalproject@gmail.com" target="_blank"> e-rohy </a> {{currentDate}}. All Rights Reserved.</p>
                        
              </div>
            </div>
          </div>
          <span class="flex-grow-1"></span>
          <a
            class="btn btn-primary text-white btn-rounded"
            href=""
            target="_blank"
            >Messages</a
          >
        </div>
      </div>
      <!-- footer end -->
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      currentDate: "2021"
    };
  },
  methods: {
    getCurrentDate(){
      this.currentDate = "" + (new Date()).getFullYear()
    }
  },

  beforeMount(){
    this.getCurrentDate();
  }
};
</script>


<style lang="scss" scoped>
  .footer_wrap{
    z-index: 100;
  }
</style> 