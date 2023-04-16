import todolistMutations from "./todoListMutations";
import todolistActions from "./todoListActions";
import todolistGetters from "./todoListGetters";

export default {
  namespaced: true,
  state: () => ({
    todolists: [],
  }),
  getters: todolistGetters,
  mutations: todolistMutations,
  actions: todolistActions,
};
