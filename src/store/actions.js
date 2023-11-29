import * as types from './mutation-types'

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit(types.INCREMENT)
  }, 1000)
}