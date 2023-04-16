<template>
  <div class="wrapper">
    <div class="header">
      <h1>My to do list</h1>
    </div>
    <div class="row">
      <div class="col-10">
        <input
          type="text"
          class="w-100"
          placeholder="The plan title"
          v-model.trim="todo"
          v-on:keyup.enter="handleSutmit"
        />
      </div>
      <div class="col-2">
        <button class="w-100 btn btn-dark" v-on:click="handleSutmit">
          {{ checkUpdate ? "Update" : "Create" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInf",

  props: {
    idUpdate: String,
    dataUpdate: Object,
  },

  data() {
    return {
      todo: "",
      checkUpdate: false,
    };
  },

  methods: {
    async handleSutmit() {
      if (!this.checkUpdate) {
        if (this.todo) {
          var newTodo = {
            id: Date.now().toString(36) + Math.round((Math.random() * 100000)).toString(36),
            todo: this.todo,
            status: false,
          };
          await this.$store.dispatch("todolistStore/createTodo", { newTodo });
          this.todo = "";
        } else {
          alert("Please enter information");
        }
      } else {
        if (this.todo) {
          var todoUpdate = {
            todo: this.todo,
            status: this.dataUpdate.status,
          };
          var idUpdate = this.idUpdate;
          await this.$store.dispatch("todolistStore/updateTodo", {
            todoUpdate,
            idUpdate,
          });
          this.$emit("updateSuccess");
          this.checkUpdate = false;
        } else {
          alert("Please enter information");
        }
      }
      this.todo = "";
    },
  },

  watch: {
    dataUpdate() {
      if (this.dataUpdate.todo) {
        this.todo = this.dataUpdate.todo;
        this.checkUpdate = true;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  border: none;
  border-bottom: 1px solid rgb(155, 155, 155);
  outline: none;
}
</style>
