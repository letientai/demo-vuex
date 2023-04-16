<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">To do</th>
        <th scope="col">Status</th>
        <th colspan="2" style="text-align: center">Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td colspan="5">Empty list</td>
      </tr> -->
      <tr ref="items" v-for="(item, index) in getTodolist" v-bind:key="item.id">
        <th scope="row">
          <input
            type="checkbox"
            id="checkbox"
            v-model="item.status"
            v-on:click="handleSuccess(index)"
          />
        </th>
        <td :class="{ todoDone: item.status }">{{ item.todo }}</td>
        <td>{{ item.status ? "Done" : "Do" }}</td>
        <td class="action" v-on:click="handleUpdate(item.id)">
          <b-icon icon="pencil-square" scale="1.2" variant="while"></b-icon>
        </td>
        <td class="action" v-on:click="deleteTodo(item.id)">
          <b-icon icon="x-circle" scale="1.2" variant="danger"></b-icon>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TableListTodo",

  data() {
    return {};
  },

  computed: {
    ...mapGetters("todolistStore", ["getTodolist"]),
  },


  methods: {
    deleteTodo(id) {
      this.$store.dispatch("todolistStore/deleteTodo", { id });
    },
    handleSuccess(index) {
      this.$store.dispatch("todolistStore/handleStatus", { index });
    },
    handleUpdate(id) {
      this.$emit("handleUpdate", id);
    },
  },

};
</script>

<style scoped>
.action {
  cursor: pointer;
  text-align: center;
}
.todoDone {
  text-decoration: 1px line-through white;
  color: rgb(134, 135, 136) !important;
}
#checkbox {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 15px !important;
  background-color: rebeccapurple;
}
.action:hover {
  text-decoration: underline;
}
</style>
