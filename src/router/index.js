import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/",
      component: PortfolioPage,
    },
    {
      name: "projectdetail",
      path: "/",
      component: ProjectDetail,
    },
  ],
});

export { router };
