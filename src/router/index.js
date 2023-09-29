import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/dashboard-default",
    },
    {
      path: "/dashboard-default",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/tables",
      name: "Tables",
      component: Tables,
    },
    {
      path: "/billing",
      name: "Billing",
      component: Billing,
    },
    {
      path: "/virtual-reality",
      name: "Virtual Reality",
      component: VirtualReality,
    },
    {
      path: "/rtl-page",
      name: "RTL",
      component: RTL,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },


  /***************Amih*****************/
    {
      path: "/list-produits",
      name: "list-produits",
      component: () => import('@/app/modules/produit/views/Produits.vue'),
    },
    {
      path: "/produit/:uuid",
      name: "detail-produit",
      component: () => import('@/app/modules/produit/views/Produit.vue'),
    },
    {
      path: "/list-categories",
      name: "list-categories",
      component: () => import('@/app/modules/produit/categorie/views/Categories.vue'),
    },
    {
      path: "/categorie/:uuid",
      name: "detail-categorie",
      component: () => import('@/app/modules/produit/categorie/views/Categorie.vue'),
    },
    {
      path: "/list-fournisseurs",
      name: "list-fournisseurs",
      component: () => import('@/app/modules/fournisseur/views/Fournisseurs.vue'),
    },
    {
      path: "/fournisseur/:uuid",
      name: "detail-fournisseur",
      component: () => import('@/app/modules/fournisseur/views/Fournisseur.vue'),
    },
    {
      path: "/list-stocks",
      name: "list-stocks",
      component: () => import('@/app/modules/stock/views/Stocks.vue'),
    },
  ]
})

export default router
