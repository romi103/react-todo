const $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos: function (todos, showCompleted, searchText) {

        let filterTodos = todos;

        // Filter by showcompleted
        filterTodos = filterTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        // Filter by search text
        filterTodos = filterTodos.filter((todo) => {

            let text = todo.text.toLowerCase();

            return searchText.length === 0 || text.indexOf(searchText) > -1;

        });

        // FIlter by non-complted first
        filterTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
               return 1; 
            } else {
                return 0;
            }
        });

        return filterTodos;
    }
    


};