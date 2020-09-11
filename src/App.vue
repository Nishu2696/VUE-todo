<template>
  <div class="all">
    <h1><span class="title">Todo</span>List</h1>
    <form class="inputDiv" @submit.prevent="addTodo()">
      <input
        v-model="newTodo"
        type="text"
        id="input"
        class="form-control"
        placeholder="What Do You Want to Do..."
      />
      <button class="add">Add</button>
    </form>
    <div class="container">
      <dispplaytodo
        v-for="value in todos"
        :key="value.title"
        :completed="value.completed"
        :mylist="value"
        @done="striketodo(value)"
        @deletetodo="deleteTodo(value)"
        @deletedtodo="deleteTodo($event)"
      />
    </div>
    <!-- <div class="container">
      <div class="item">
        <input class="item_input" type="text" v-for="values in todos" v-bind:key="values" disabled="true" value="values">
          <input type="checkbox" />
          {{values}}
      </div>
    </div>-->
    <!-- <div class="container">
      <div class="item">
        <li class="item_input" v-for="value in todos" v-bind:key="value">
          <input type="checkbox" />
          {{value}}
        </li>
      </div>
    </div>-->
    <!-- <div class="container">
      <li class="item" v-for="(value, index) in todos" v-bind:key="index">
        <input type="checkbox" />
        {{value.title}}
      </li>
    </div>-->
  </div>
</template>

<script>
import dispplaytodo from "./components/dispplaytodo.vue";

export default {
  name: "App",
  components: {
    dispplaytodo,
  },
  data() {
    return {
      todos: [
        // {title: "sweets", completed: false},
      ],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      alert("hello");
      console.log(this.newTodo);
      this.todos.push({ title: this.newTodo, completed: false });
      console.log(this.todos);
      this.newTodo = "";
      return this.todos;
      // this.$emit(this.todos);
      // this.newTodo = "";
    },
    deleteTodo(values) {
      this.todos = this.todos.filter((todo) => todo !== values);
      // this.todos.splice(values, 1);
    },
    striketodo(item){
      item.completed = !item.completed;
    }
  },
};
</script>

<style>
.all {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 50;
  text-align: center;
  margin: 1rem 0 3rem;
  font-family: "Hind", sans-serif;
}

.title {
  color: lime;
  text-transform: uppercase;
  font-weight: 800;
}

.inputDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}

#input {
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  height: 50px;
  border-radius: 25px;
  width: 350px;
  margin: 0.25rem;
  transition: 0.5s;
  font-size: 1.15rem;
}

.add {
  outline: none;
  border: none;
  height: 50px;
  border-radius: 25px;
  width: 50px;
  background-color: lime;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  margin: 0.25rem;
}

.add:hover {
  opacity: 0.7;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
}

/* .item {
  padding: 0.5rem;
  border-bottom: 4px solid #fff;
  margin-bottom: 1.5rem;
} */

.item_input {
  background: none;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  width: 245px;
}
</style>
