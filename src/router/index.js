import { createRouter, createWebHistory } from "vue-router";
import home from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
import assistance from "../views/AssistanceView.vue";
import nav from "../components/navBar.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "nav",
      component: home,
      meta: { layout: nav, public: true },
    },
    {
      path: "/about",
      name: "about",
      component: about,
      meta: { layout: nav, public: true },
    },
    {
      path: "/assistance",
      name: "assistance",
      component: assistance,
      meta: { layout: nav, public: true },
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: about,
    //   meta: { layout: nav, public: true },
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: contact,
    //   meta: { layout: nav, public: true },
    // },
    // {
    //   path: "/opportunity",
    //   name: "opportunity",
    //   component: opportunity,
    //   meta: { layout: nav, public: true },
    // },
  ],
});

export default router;
