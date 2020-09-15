import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    displayLists: function(state) {
      return state.todos;
    },
  },
  mutations: {
    addTask: function(state, payload) {
      state.todos.push({
        id: state.todos.length + 1,
        title: payload.title,
        completed: false,
      });
    },

    removetodo: function(state, payload) {
      var item = state.todos;
      var index = item.indexOf(payload.mylist);
      alert(index);
      // var index = state.findIndex(state.todos, payload.list);
      state.todos.splice(index, 1);
    },

    completetodo: function(state, payload) {
      var item = state.todos;
      var index = item.indexOf(payload.mylist);
      alert(index);
      // var index = state.findIndex(state.todos, payload.list);
      state.todos[index].completed = !state.todos[index].completed;
    },

  },
  actions: {
    addTask: function(context, payload) {
      context.commit("addTask", payload);
    },
    removetodo: function(context, payload) {
      context.commit("removetodo", payload);
    },
    completetodo: function(context, payload) {
      context.commit("completetodo", payload);
    },
  },
});
