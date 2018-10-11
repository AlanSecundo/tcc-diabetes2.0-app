import Vue from 'vue'
import Vuex from 'vuex'

import hemoglobina from './modules/Hemoglobina'
import login from './modules/Login'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      login,
      hemoglobina
    }
  })

  return Store
}
