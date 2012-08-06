/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('game-tests', function(Y) {

    var suite = new YUITest.TestSuite('game-tests'),
        controller = null,
        A = YUITest.Assert,
        OA = YUITest.ObjectAssert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'game user tests',
        
        setUp: function() {
            controller = Y.mojito.controllers.game;
        },
        tearDown: function() {
            controller = null;
        },
        
        'test mojit': function() {
            var ac, expected, results;
            A.isNotNull(controller);
            A.isFunction(controller.index);
            ac = {
                models: {
                    'gameModel': {
                        getData: function(cb) {
                            cb(null, 'Mojito is working');
                        }
                    }
                },
                assets: {
                    addCss : function() {}
                },
                done: function(data) {
                    results = data;
                }
            };
            controller.index(ac);
            expected = {
                title: 'Congrats!',
                data: 'Mojito is working'
            };
            OA.areEqual(expected, results);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'game']});
