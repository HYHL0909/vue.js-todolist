<template>
    <section class="real-app">
        <input 
            type="text" 
            class="add-input"
            placeholder="添加待办事项..."
            @keyup.enter="addTodo"
            autofocus
        >
        <Item  
            v-for="todo in filterTodos"
            :todo="todo"
            :key="todo.id"
            @del="deleteTodo"
        />
        <Tabs 
            :filter="filter" 
            :todos="todos"
            @toggle="toggleFilter"
            @clearAll="clearAllCompletedTodo"
        />
    </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';

let id = 0;

export default {
    components: {
        Item,
        Tabs
    },
    data() {
        return {
            todos: [],
            filter: 'all'
        }
    },
    computed: {
        filterTodos() {
            if(this.filter === 'all') {
                return this.todos;
            }
            const filterCompleted = this.filter === 'completed';
            return this.todos.filter(todo=> todo.completed===filterCompleted);
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value,
                completed: false
            });
            e.target.value = '';
        },
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1);
        },
        toggleFilter(state) {
            this.filter = state;
        },
        clearAllCompletedTodo() {
            this.todos = this.todos.filter(todo=> todo.completed===false);
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 20px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>


