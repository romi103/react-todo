const React = require('react');

const AddTodo = React.createClass({
    
    onAddTodo: function (e) {
        e.preventDefault();
        let addTodo = this.refs.addTodo.value;

        if (addTodo) {
            this.refs.addTodo.value = "";
            this.props.handleAddTodo(addTodo);
        } else {
            this.refs.addTodo.focus();
        }


    },

    render: function () {

        return (
            <div>
            <form ref="form" onSubmit={this.onAddTodo}>
                <input type="text" ref="addTodo" placeholder="What do you need to do"/>
                <input type="submit" value="Add todo" className="button expanded"/>
            </form>
            </div>
        );
        
    }
});

module.exports = AddTodo;