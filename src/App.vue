<template>
  <div class="container">
    <div class="form-info">
      <FormInf
        v-bind:dataUpdate="dataUpdate"
        v-bind:idUpdate="idUpdate"
        @updateSuccess="updateSuccess"
      />
    </div>
    <div class="table-list my-4">
      <TableListTodo @handleUpdate="handleUpdate" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormInf from "./components/FormInf.vue";
import TableListTodo from "./components/TableListTodo.vue";
export default {
  name: "App",
  components: {
    FormInf,
    TableListTodo,
  },
  data() {
    return {
      dataUpdate: {},
      idUpdate: "",
    };
  },
  computed: {
    ...mapGetters("todolistStore", ["getTodolist"]),
  },
  methods: {
    handleUpdate(id) {
      this.dataUpdate = this.getTodolist.filter((todo) => todo.id === id)[0];
      this.idUpdate = id;
    },
    updateSuccess() {
      this.dataUpdate = {};
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
