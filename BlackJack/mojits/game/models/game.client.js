/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('gameModel', function(Y, NAME) {

/**
 * The gameModel module.
 *
 * @module gameModel
 */

	var SUIT = {
    	"hearts" : 0,
    	"diamonds" : 1,
    	"clubs" : 2,
    	"spades" : 3
    },
    TYPES = {
    	"1" : 1,
    	"2" : 2,
    	"3" : 3,
    	"4" : 4,
    	"5" : 5,
    	"6" : 6,
    	"7" : 7,
    	"8" : 8,
    	"9" : 9,
    	"10" : 10,
    	"J" : 10,
    	"Q" : 10,
    	"K" : 10
    },
    ACE = 'A';
    
    function Card(suit, type) {
    	this.s = suit;
    	this.t = type;
    	if(this.t in TYPES){
    		this.v = [];
    		this.v.push(TYPES[this.t]);
    	} else if (this.t == 'A'){
    		this.v = [1,10];
    	}
    };
    
    function Hand() {
    	this.cards = [];
    }
    
    Hand.prototype.addCard = function(c){
    	this.cards.push(c);
    }
    
    Hand.prototype.getValues = function() {
    	if(this.cards.length === 0){
    		return [];
    	}
    	var values = this.cards.map(function(c){
    		return c.v;
    	});
    	var sub;
    	var v = values.shift();
    	if(values.length > 0){
    		sub = recurse(values);
    	}
    	
    	
    }
	
    /**
     * Constructor for the gameModel class.
     *
     * @class gameModel
     * @constructor
     */
    Y.mojito.models[NAME] = {

    	init: function(config) {
            this.config = config;
            this.pile = null;
            this.dealt = 0;
        },
        
        pile : null,
        dealt : 0,
        dealer : null,
        players : null
        createPile : function(deckCount) {
        	var s,t,c,
        	pile = []
        	while(deckCount>0){
        		for(s in SUIT){
        			for(t in TYPES){
        				pile.push(new Card(s,t));
        			}
        			pile.push(new Card(s, ACE));
        		}
        	}
        	this.pile = pile;
        	this.dealt = 0;
        },
        
        getCard : function() {
        	this.dealt += 1;
        	return this.pile.shift();
        }

    };
    
    
    
    

}, '0.0.1', {requires: []});
