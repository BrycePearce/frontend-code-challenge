import Vue from "vue";
import Router from "vue-router";

// Pages
import ViewAll from "./views/ViewAll.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "ViewAll",
      component: ViewAll,
    },
    {
      path: "/:pokemonName",
      name: "About",
      component: About
    }
  ]
});