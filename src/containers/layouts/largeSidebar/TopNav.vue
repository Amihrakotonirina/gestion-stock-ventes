<template>
  <div class="main-header">
    <div class="logo-erohy">
      <router-link :to="{ name: 'lobby'}"><!--, params: { username: 'user' }}"-->
        <img src="@/assets/images/logo.png" alt />
      </router-link>
    </div>
    <div class="beta-container">
      <p class="beta-text">Beta</p>
    </div>

    <div @click="sideBarToggle" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="d-flex align-items-center">
      <!-- Mega menu -->
      <div
        :class="{ show: isMegaMenuOpen }"
        class="dropdown mega-menu d-none d-md-block"
        v-on-clickaway="closeMegaMenu"
      >
        <a
          href="#"
          class="btn text-muted dropdown-toggle mr-3"
          id="dropdownMegaMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleMegaMenu"
          > Menu</a
        >
        <div
          class="dropdown-menu text-left"
          :class="{ show: isMegaMenuOpen }"
          aria-labelledby="dropdownMenuButton"
        >
          <div class="row m-0">
            <div class="col-md-4 p-4 text-left bg-img">
              <h2 class="title">
                e-rohy
                <br />Ivotoeran'ny fahalalàna
              </h2>
              <p>
                Bonjour et bienvenue sur la plateforme e-rohy.
              </p>
              <p class=" mb-30">
                Elargissez, votre réseau.
                Vous pouvez choisir un menu à droite pour commencer.
              </p>
              <button class="btn btn-lg btn-rounded btn-outline">
                <router-link :to="{ name: 'lobby'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-Home1"></i> Aller au hall d'accueil
                </router-link>
                
              </button>
            </div>
            <div class="col-md-6 p-2 text-center">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Raccourci
              </p>
              <div class="menu-icon-grid w-auto p-0">
                <router-link :to="{ name: 'stand-list'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-Monitor-5"></i> Stands d'exposition
                </router-link>
                <a href="#"> <i class="i-Library"></i> Formations et conférences </a>
                <a href="#"> <i class="i-Management"></i> Opportunités </a>
                <router-link :to="{ name: 'test-orientation'}"><!--, params: { username: 'user' }}"-->
                    <i class="i-File-Clipboard-File--Text"></i> Test d'orientation
                </router-link>

                <a href="#"> <i class="i-Engineering"></i> Fiches métiers </a>
                <router-link :to="{ name: 'jobs'}"><!--, params: { username: 'user' }}"-->
                  <i class="i-Calendar-2"></i> Offres d'emploi
                </router-link>
              </div>
            </div>
            <div class="col-md-2 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Pages
              </p>
              <ul class="links">
                <li>
                  <a href="accordion.html">Hall d'accueil</a>
                </li>
                <li>
                  <a href="alerts.html">Sponsors</a>
                </li>
                <li>
                  <a href="buttons.html">Partenaires</a>
                </li>
                <li>
                  <a href="buttons.html">Stands favoris</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- / Mega menu -->
      <div class="search-bar" @click="toggleSearch">
        <input type="text" placeholder="Rechercher" />
        <i class="search-icon text-muted i-Magnifi-Glass1"></i>
      </div>
    </div>

    <div style="margin: auto"></div>

    <div class="header-part-right">
      <!-- Full screen toggle -->
      <i
        class="i-Full-Screen header-icon d-none d-sm-inline-block"
        @click="handleFullScreen"
      ></i>      

      <!-- Feed list -->
      <!--router-link :to="{ name: 'feed-list'}"><--, params: { username: 'user' }}"-->
          <i class="i-Home1 header-icon d-none d-sm-inline-block" @click="gotoPage('/feed/feed')"></i>
      <!--/router-link-->
      

        <b-dropdown
          id="dropdown-messages"
          text="Dropdown Button"
          class="m-md-2  badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
          
        >
        <template slot="button-content">
              <span class="badge badge-primary">5</span>
              <i class="i-Speach-Bubbles text-muted d-sm-inline-block header-icon"
              @click="gotoPage('/app/pages/chat')" ></i>
          </template>
        </b-dropdown>

        <b-dropdown
          id="dropdown-contacts"
          text="Dropdown Button"
          class="m-md-2  badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
        <template slot="button-content">
              <span class="badge badge-primary">2</span>
              <i class="i-Business-ManWoman text-muted d-sm-inline-block header-icon"></i>
          </template>
        </b-dropdown>

      
      <!-- Grid menu Dropdown -->

      <!--div class="dropdown">
        <b-dropdown
          id="dropdown"
          text="Dropdown Button"
          class="m-md-2"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <i
              class="i-Safe-Box text-muted header-icon"
              role="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></i>
          </template>
          <div class="menu-icon-grid">
            <a href="#"> <i class="i-Shop-4"></i> Home </a>
            <a href="#"> <i class="i-Library"></i> UI Kits </a>
            <a href="#"> <i class="i-Drop"></i> Apps </a>
            <a href="#"> <i class="i-File-Clipboard-File--Text"></i> Forms </a>
            <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
            <a href="#"> <i class="i-Ambulance"></i> Support </a>
          </div>
        </b-dropdown>
      </div-->
      <!-- Notificaiton -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2  badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <span class="badge badge-primary">3</span>
            <i class="i-Bell text-muted header-icon"></i>
          </template>
          <!-- Notification dropdown -->
          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
            ref="myData"
            class="dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll"
          >
            <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New message</span>
                  <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">10 sec ago</span>
                </p>
                <p class="text-small text-muted m-0">
                  James: Hey! are you busy?
                </p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Receipt-3 text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New order received</span>
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">new</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">2 hours ago</span>
                </p>
                <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Empty-Box text-danger mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Product out of stock</span>
                  <!-- <span class="badge badge-pill badge-danger ml-1 mr-1">3</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >10 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Headphone E67, R98, XL90, Q77
                </p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Data-Power text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Server Up!</span>
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">3</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >14 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Server rebooted successfully
                </p>
              </div>
            </div>
            <!-- </div> -->
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 user col align-self-end"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <img
              src="@/assets/images/faces/amih.jpg"
              id="userDropdown"
              alt
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
          </template>

          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <div class="dropdown-header" style="background-color: #aaa;">
              <i class="i-Lock-User mr-1"></i> Mirana RAKOTONIRINA
            </div>
            <router-link tag="a" class to="/user/profile">
              <a class="dropdown-item" href="#"><i class="i-Checked-User"></i> Mon profile</a>
            </router-link>
            <router-link tag="a" class to="/user/profile">
              <a class="dropdown-item" href="#"><i class="i-ID-3"></i> Carte de visite</a>
            </router-link>
            <a class="dropdown-item" href="#"><i class="i-Medal-2"></i> Mes isa</a>
            <a class="dropdown-item" href="#"><i class="i-Gears"></i> Paramètres</a>
            <a class="dropdown-item" href="#" @click.prevent="logoutUser"
              ><i class="i-Power-2"></i> Se déconnecter</a
            >
          </div>
        </b-dropdown>
      </div>
    </div>
    <search-component
      :isSearchOpen.sync="isSearchOpen"
      @closeSearch="toggleSearch"
    ></search-component>
  </div>

  <!-- header top menu end -->
</template>
<script>
import Util from "@/utils";
import Sidebar from "./Sidebar";
import searchComponent from "../common/search";
import { isMobile } from "mobile-device-detect";
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {
    Sidebar,
    searchComponent
  },

  data() {
    return {
      isDisplay: true,

      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false
    };
  },
  mounted() {
    // document.addEventListener("click", this.closeMegaMenu);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",

      "changeSidebarProperties",
      "changeThemeMode",
      "signOut"
    ]),

    // megaMenuToggle() {
    //   this.isMegaMenuOpen = false;

    //   console.log("work");
    // },

    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.signOut();

      this.$router.push("/app/sessions/signIn");
    },
    gotoPage(targetPage) {
      this.$router.push(targetPage);
    },
    

    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    sideBarToggle(el) {
      if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        // console.log("4");

        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
        // console.log("4");
      }
    }
  }
};
</script>
<style scoped>
  .logo-erohy{
    width: 60px;
    margin: 10px;
  }
  .beta-text{
    background-color: rgb(241, 141, 10);
    padding: 2px;
    border-radius: 3px;
  }
</style>



