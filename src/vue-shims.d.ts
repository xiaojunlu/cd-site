
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route
    $message: Function
  }
}

declare global {
  const cd: any;
  const process: any
}

