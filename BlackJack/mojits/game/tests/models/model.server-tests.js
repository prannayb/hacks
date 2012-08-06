/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('gameModel-tests', function(Y) {
    
    var suite = new YUITest.TestSuite('gameModel-tests'),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'game model user tests',
        
        setUp: function() {
            model = Y.mojito.models['gameModel'];
        },
        tearDown: function() {
            model = null;
        },
        
        'test mojit model': function() {
            A.isNotNull(model);
            A.isFunction(model.getData);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'gameModel']});
