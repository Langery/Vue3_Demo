import * as types from './mutation-types';

const mutations = {
  [types.INCREMENT] (state) {
    state = state.count++
  },
  [types.DECREMENT] (state) {
    state = state.count--
  },
  [types.INCREMENT_BY] (state, payload) {
    state.count += payload.amount
  }
}

export default mutations;