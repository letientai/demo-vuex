export default {
  deleteTodo(state, payload) {
    state.todolists = state.todolists.filter((todo) => todo.id !== payload);
  },

  handleStatus(state, payload) {
    state.todolists[payload.index].status =
      !state.todolists[payload.index].status;
  },

  createTodo(state, payload) {
    state.todolists.push(payload);
  },
  
  updateTodo(state, payload) {
    state.todolists.filter((todo) => {
      if (todo.id === payload.idUpdate) {
        todo.todo = payload.todoUpdate.todo;
      }
    });
  },
};
