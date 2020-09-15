<template>
  <li class="item">
    <button
      id="design"
      :class="{ completed: mylist.completed }"
      v-on:click="completetodo(mylist)"
    >
      {{ mylist.title }}
    </button>
    <button class="space" v-on:click="removetodo(mylist)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "dispplaytodo",
  props: ["mylist"],
  methods: {
    removetodo: function(mylist) {
      alert(mylist);
      this.$store.dispatch("removetodo", mylist);
    },
    completetodo: function(mylist) {
      this.$store.dispatch("completetodo", mylist);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
}

.item {
  padding: 0.5rem;
  border-bottom: 4px solid #fff;
  margin-bottom: 5px;
}

.space {
  margin-left: 10px;
  padding: 15px 32px;
  border: 2px solid #e7e7e7;
}

.completed {
  text-decoration: line-through;
}

#design {
  padding: 15px 32px;
  text-align: center;
  border: 2px solid #e7e7e7;
}
</style>
