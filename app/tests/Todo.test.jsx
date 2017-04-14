var React = require('react');
var React = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exsit', () => {
        expect(Todo).toExist();
    });
});