/*global defineSuite*/
defineSuite([
        'Scene/Expression',
        'Core/Color'
    ], function(
        Expression,
        Color) {
    'use strict';

    function MockStyleEngine() {
    }

    MockStyleEngine.prototype.makeDirty = function() {
    };

    it('evaluates literal boolean', function() {
        var expression = new Expression(new MockStyleEngine(), 'true');
        expect(expression.evaluate(undefined)).toEqual(true);

        expression = new Expression(new MockStyleEngine(), 'false');
        expect(expression.evaluate(undefined)).toEqual(false);
    });

    it('evaluates literal number', function() {
        var expression = new Expression(new MockStyleEngine(), '1');
        expect(expression.evaluate(undefined)).toEqual(1);

        expression = new Expression(new MockStyleEngine(), '0');
        expect(expression.evaluate(undefined)).toEqual(0);
    });

    it('evaluates literal string', function() {
        var expression = new Expression(new MockStyleEngine(), '\'hello\'');
        expect(expression.evaluate(undefined)).toEqual('hello');
    });

    it('evaluates literal color', function() {
        var expression = new Expression(new MockStyleEngine(), '\'#ffffff\'');
        expect(expression.evaluate(undefined)).toEqual(Color.WHITE);

        expression = new Expression(new MockStyleEngine(), '\'white\'');
        expect(expression.evaluate(undefined)).toEqual(Color.WHITE);
    });
});
