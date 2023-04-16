import Vue from "vue";
import Vuex from "vuex";
import todolistStore from "./todoList/todoList";
// import createPersistedState from "vuex-persistedstate";
// import createPersistedState from 'vuex-crosstab';
// import VuexCrossTab from "vuex-crosstab";
import VuexMultiTabState from "vuex-multi-tab-state";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: { todolistStore },
  plugins: [
    VuexMultiTabState({
      exclude:["todolistStore"],
      // statesPaths: ["todolistStore"], // Đường dẫn đến state của bạn
      ignoreMutations: ["createTodo",], // Danh sách các mutations sẽ không được đồng bộ hóa
      ignoreGetters: ['getTodolist'],
      // preventBeforeUnload: true
    }),
    // VuexCrossTab({
    //   moduleName: "myApp",
    //   // key: "myApp",
    //   disabled: true ,
    //   blacklist: [ "todolistStore", "myApp" ], // Các module sẽ không được đồng bộ
    //   ignoreMutations: ["createTodo"],
    //   ignoreActions: ["todolistStore/createTodo"]
    //   // whitelist: ['whitelistedModule'], // Chỉ các module này được đồng bộ
    // }),
  ],
});
