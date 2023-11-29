import { createLogger, createStore } from "vuex";

import * as actions from './actions';
import * as getters from './getters';
import state from "./state";
import mutation from './mutations';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  actions,
  getters,
  mutation,
  modules: {

  },
  strict: debug,
  plugins: debug ? [createLogger] : []
})
