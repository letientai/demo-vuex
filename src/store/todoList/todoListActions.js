export default {
  createTodo(context, payload) {
    context.commit("createTodo", payload.newTodo);
  },

  deleteTodo(context, payload) {
    context.commit("deleteTodo", payload.id);
  },

  handleStatus(context, payload) {
    context.commit("handleStatus", payload);
  },
  updateTodo(context, payload) {
    context.commit("updateTodo", payload);
  },
};
