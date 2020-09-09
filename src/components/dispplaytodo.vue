<template>
  <div class="container">
    <li class="item">{{mylist[index]}}</li>
  </div>
</template>

<script>
export default {
  name: "dispplaytodo",
  props: ["mylist", "index"],
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
  margin-bottom: 1.5rem;
}
</style>