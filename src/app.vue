<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'

export default {
  components: {
    Header,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
</style>