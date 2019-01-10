import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "navbar",
      component: () =>
        import("./components/Navbar.vue")
    },
    {
      path: "/",
      name: "main",
      component: () =>
        import("./components/Main.vue")
    },
    {
      path: "/",
      name: "somos",
      component: () =>
        import("./components/Somos.vue")
    },
    {
      path: "/",
      name: "registo",
      component: () =>
        import("./components/Registo.vue")
    },
    {
      path: "/",
      name: "footer",
      component: () =>
        import("./components/Footer.vue")
    }
  ]
});
