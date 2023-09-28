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
      path: "/detail-produit",
      name: "detail-produit",
      component: () => import('@/app/modules/produit/views/Produit.vue'),
    },
    {
      path: "/list-categories",
      name: "list-categories",
      component: () => import('@/app/modules/produit/categorie/views/Categories.vue'),
    },
    {
      path: "/detail-categorie",
      name: "detail-categories",
      component: () => import('@/app/modules/produit/categorie/views/Categorie.vue'),
    },
    {
      path: "/list-fournisseurs",
      name: "list-fournisseurs",
      component: () => import('@/app/modules/fournisseur/views/Fournisseurs.vue'),
    },
    {
      path: "/detail-fournisseur",
      name: "detail-fournisseur",
      component: () => import('@/app/modules/fournisseur/views/Fournisseur.vue'),
    },
    {
      path: "/stock",
      name: "stock",
      component: () => import('@/app/modules/stock/views/Stock.vue'),
    },
  ]
})

export default router
