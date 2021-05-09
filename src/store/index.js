import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: {
      state: {
        moduleTitle: null,

      },
      mutations: {
        UPDATE_MODULETITLE: (state, value) => {
          state.moduleTitle = value
        }
      },
      actions: {
      },
    },
    prepareForWar: {
      state: {
        equimentDetailShow: true,
      },
      mutations: {
        UPDATE_MODULETITLE: (state, value) => {
          state.moduleTitle = value
        }
      },
      actions: {
      },
    }
  },
  getters: {
    // 模块标题
    moduleTitle: state => state.app.moduleTitle,
    // 模块标题
    equimentDetailShow: state => state.prepareForWar.equimentDetailShow,
    // 装备详细展示
  }
})
