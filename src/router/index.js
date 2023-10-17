import { createRouter, createWebHistory } from "vue-router";
import home from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
import feedback from "../views/FeedbackView.vue";
import audit from "../views/AuditView.vue";
import assistance from "../views/AssistanceView.vue";
import help from "../views/HelpsCenterView.vue";
import nav from "../components/navBar.vue";
import footer2 from "../components/footer-2.vue";
import footer3 from "../components/footer-3.vue";
import target from "../views/TargetsView.vue";
import advice from "../views/AdviceView.vue";
import contact from "../views/ContactView.vue";
import study from "../views/StudyView.vue";
import formation from "../views/FormationView.vue";
import engineering from "../views/EngineeringView.vue";
import computerservices from "../views/ComputerservicesView.vue";
import institution from "../views/InstitutionView.vue";
import individual from "../views/IndividualView.vue";
import privatesociety from "../views/PrivateView.vue";

import externalization from "../views/ExternalisationView.vue";
import publicsociety from "../views/PublicView.vue";
import society from "../views/SocietyView.vue";
import particulary from "../views/ParticularyView.vue";
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
    /* {
      path: "/feedback",
      name: "feedback",
      component: feedback,
      meta: { layout: nav, public: true },
    }, */
    {
      path: "/audit",
      name: "audit",
      component: audit,
      meta: { layout: nav, public: true },
    },
    /* {
      path: "/help",
      name: "help",
      component: help,
      meta: { layout: nav, public: true },
    }, */
    {
      path: "/assistance",
      name: "assistance",
      component: assistance,
      meta: { layout: nav, public: true },
    },
    {
      path: "/target",
      name: "target",
      component: target,
      meta: { layout: nav, public: true },
    },
    {
      path: "/advice",
      name: "advice",
      component: advice,
      meta: { layout: nav, public: true },
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
      meta: { layout: nav, public: true },
    },
    {
      path: "/study",
      name: "study",
      component: study,
      meta : { layout: nav, public: true },
    },
    {
      path: "/externalization",
      name: "externalization",
      component: externalization,
      meta: { layout: nav, public: true },
    },
    {
      path: "/footer2",
      name: "footer",
      component: footer2,
      meta: { layout: nav, public: true },
    },
    {
      path: "/footer3",
      name: "footer",
      component: footer3,
      meta: { layout: nav, public: true },
    },
    {
      path: "/formation",
      name: "formation",
      component: formation,
      meta: { layout: nav, public: true },
    },
    {
      path: "/engineering",
      name: "engineering",
      component: engineering,
      meta: { layout: nav, public: true },
    },
    {
      path: "/computerservices",
      name: "computerservices",
      component: computerservices,
      meta: { layout: nav, public: true },
    },
    /* {
      path: "/individual",
      name: "individual",
      component: individual,
      meta: { layout: nav, public: true },
    },  */
    /* {
      path: "/privatesociety",
      name: "privatesociety",
      component: privatesociety,
      meta: { layout: nav, public: true },
    }, */
    
     {
      path: "/publicsociety",
      name: "publicsociety",
      component: publicsociety,
      meta: { layout: nav, public: true },
    },
    {
      path: "/society",
      name: "society",
      component: society,
      meta: { layout: nav, public: true },
    },
    {
      path: "/particulary",
      name: "particulary",
      component: particulary,
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
