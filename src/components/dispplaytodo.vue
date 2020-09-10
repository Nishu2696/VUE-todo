<template>
  <div class="container">
    <li class="item">
      {{ mylist.title }}{{ index
      }}
      <button class="space" v-on:click="$emit('deletetodo')">Delete</button>
      <!-- <button class="space" @click="deletetodo(mylist.title)">Delete</button> -->
    </li>
  </div>
</template>

<script>
export default {
  name: "dispplaytodo",
  props: ["mylist", "index"],
  method:{
    deletetodo(index){
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
}
</style>
