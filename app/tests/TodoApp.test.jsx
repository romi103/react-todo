var React = require('react');
var React = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exsit', () => {
        expect(TodoApp).toExist();
    });
});