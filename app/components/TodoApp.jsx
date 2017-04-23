const React = require('react');
const TodoAPI = require('TodoAPI');
const moment = require('moment');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({

    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },

    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function (text) {    
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined

                }
            ]
        });
    },

    handleSearch: function (searchText, showCompleted) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }

        return todo;
    });
    
    this.setState({
        todos: updatedTodos
    });

    },

    render: function (){
        let { todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;