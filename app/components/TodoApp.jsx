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
                    text: "Walk the dog"
                },{
                    id: uuid(),
                    text: "Clean the yard"
                }, {
                    id: uuid(),
                    text: "Have a drink"
                }, {
                    id: uuid(),
                    text: "Go to bed"
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
                    text: text
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

    render: function (){
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;