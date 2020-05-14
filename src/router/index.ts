import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Vue1 from "../views/vue1.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Vue1 - Hello World",
    component: Vue1
  },
  {
    path: "/vue2",
    name: "Vue2 - array",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vue2.vue")
  },
  {
    path: "/vue3",
    name: "Vue3 - If",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vue3.vue")
  },
  {
    path: "/vue4",
    name: "Vue4 - Input",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vue4.vue")
  },
  {
    path: "/vue5",
    name: "Vue5 - html",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vue5.vue")
  },
  {
    path: "/vue6",
    name: "Vue6 - counter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vue6.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
