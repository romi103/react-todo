var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');
// var Todo = require('Todo');

describe('TodoSearch', () => {
    it('should exsit', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'Something';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith('Something', false);
    });

    it('should call onSearch with proper checked value', () => {
        var showCompleted = true;
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith('', true);
    });

});