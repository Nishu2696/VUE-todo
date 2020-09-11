<template>
  <li class="item">
    <button id="design" :class="{ completed }" v-on:click="$emit('done')">
      {{ mylist.title }}
    </button>
    <button class="space" v-on:click="$emit('deletetodo')">Delete</button>
    <!-- <button class="space" @click="deletetodo(mylist.title)">Delete</button> -->
  </li>
</template>

<script>
export default {
  name: "dispplaytodo",
  props: ["mylist", "completed"],
  method: {
    deletetodo(index) {
      console.log(index);
      this.$emit("deletedtodo", index);
    },
  },
};
</script>

<style scoped>
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

#design{
  padding: 15px 32px;
  text-align: center;
  border: 2px solid #e7e7e7;
}
</style>
