const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');


const TodoApp = React.createClass({

    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: "Walk the dog",
                    completed: false
                },{
                    id: uuid(),
                    text: "Clean the yard",
                    completed: false
                }, {
                    id: uuid(),
                    text: "Have a drink",
                    completed: true
                }, {
                    id: uuid(),
                    text: "Go to bed",
                    completed: true
                }
            ],
        };
    },

    handleAddTodo: function (text) {    
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text,
                    completed: false
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
            }

        return todo;
    });
    
    this.setState({
        todos: updatedTodos
    });

    },

    render: function (){
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;