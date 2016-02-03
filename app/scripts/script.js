
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
    address.url = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address.street  + ', ' + address.city + '&key=AIzaSyAuWTF8z29_K-C5ni7fpSjZixrNO4w1h5k';
    $body.append('<img class="bgimg" src="' + address.url + '">');

    return false;
};

$('#form-container').submit(loadData);

// loadData();
