import axios from 'axios'
const state = {
  list: null,
  isShow: false,
  currentPage: 1,
  total: 0,
  checked: [],
  datas: null
}

const mutations = {
  SET_LIST (state, list) {
    state.list = list
  },
  SET_CHECKED (state, checked) {
    state.checked = checked
  },
  SET_PAGE (state, page) {
    state.currentPage = page
  },
  SET_TOTAL (state, total) {
    state.total = total
  },
  SET_SHOW (state, bool) {
    state.isShow = bool
  },
  SET_DATAS (state, datas) {
    state.datas = datas
  },
  CLEAR_LIST (state) {
    state.list = null
  },
  CLEAR_DATAS (state) {
    state.datas = null
  }
}

const actions = {
  setchecked: ({commit}, checked) => {
    commit('SET_CHECKED', checked)
  },
  setdatas: ({commit}, data) => {
    const api = data.api
    const postData = {
      page: data.page
    }
    axios.post(api, postData)
      .then(response => {
        if (response.status === 200) {
          commit('SET_DATAS', response.data.res)
          commit('SET_TOTAL', response.data.total)
          commit('SET_PAGE', data.page)
        }
      })
  },
  setpage: ({commit}, page) => {
    commit('SET_PAGE', page)
  },
  settotal: ({commit}, total) => {
    commit('SET_TOTAL', total)
  },
  setshow: ({commit}, bool) => {
    commit('SET_SHOW', bool)
  },
  setlist: ({commit}, list) => {
    commit('SET_LIST', list)
  },
  clearlist: ({commit}) => {
    commit('CLEAR_LIST')
  },
  clearlistdatas: ({commit}) => {
    commit('CLEAR_DATAS')
  }
}

export default {
  state, mutations, actions
}
