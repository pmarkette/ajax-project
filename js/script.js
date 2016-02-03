
function loadData() {
    'use strict';
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var address = {street: $("#street").val(), city: $("#city").val()};
    
    return false;
};

$('#form-container').submit(loadData);

// loadData();
