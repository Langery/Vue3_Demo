import { createLogger, createStore } from "vuex";

import * as actions from './actions';
import * as getters from './getters';
import state from "./state";
import mutations from './mutations';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  actions,
  getters,
  state,
  mutations,
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger] : []
})
