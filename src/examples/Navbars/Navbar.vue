<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg mb-3 mt-3 px-0 mx-4 shadow-none border-radius-xl bg-light"
  >
    <div class="container-fluid ps-2 pe-0">
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        to="/"
        >
           <img
          src="@/assets/img/logos/logo_g_stock_rectangle.png"
          class="navbar-brand-img"
          height="50"
          alt="main_logo"
        />
        </router-link
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center me-2"
              aria-current="page"
              to="/dashboard-default"
            >
              <!--i
                class="fa fa-chart-pie opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/list-produits"
            :class="getRoute() === 'list-produits' ? 'active' : ''"
            >
              <!--i
                class="fa fa-user opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Produits
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/list-categories"
            :class="getRoute() === 'list-categories' ? 'active' : ''"
            >
              <!--i
                class="fa fa-user opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Catégories produits
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/list-fournisseurs"
            :class="getRoute() === 'list-fournisseurs' ? 'active' : ''"
            >
              <!--i
                class="fa fa-user opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Fournisseurs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/list-stocks"
            :class="getRoute() === 'list-stocks' ? 'active' : ''"
            >
              <!--i
                class="fa fa-user opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Stocks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/vente"
            :class="getRoute() === 'vente' ? 'active' : ''"
            >
              <!--i
                class="fas fa-user-circle opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Vente
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/">
              <!--i
                class="fas fa-key opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i-->
              Se déconnecter
            </router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

export default {
  name: "navbar",
  data() {
    return {
      downArrWhite,
      downArrBlack
    };
  },
  props: {
    btnBackground: String,
    isBlur: String,
    isBtn: { type: String, default: "bg-gradient-light" },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode
      };
    }
  },
    methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }

};
</script>
<style scoped>
  .active{
    background-color: #f6f9fc;
    color: #344767;
    border-radius: 0.5rem;
    font-weight: bolder;
  }
</style>