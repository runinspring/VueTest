<template>
  <div class="hello2">
    <div>{{ msg }}</div>
    <div>clickNum: {{count}}</div>
    <button v-on:click="count += 1">click</button>
    <div>clickNum2: {{count2}}</div>
    <button v-on:click="count2 += 1">click</button>
  </div>
</template>

<script>
  export default {
    name: 'hello2',
    data() {
      return {
        msg: 'clickTest',
        count: 0,
        count2: 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>