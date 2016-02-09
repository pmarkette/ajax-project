/*eslint-env jquery */
function loadData() {
    "use strict";
    var $body = $("body");
    var $wikiElem = $("#wikipedia-links");
    var $nytHeaderElem = $("#nytimes-header");
    var $nytElem = $("#nytimes-articles");
    //var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var address = {street: $("#street").val(), city: $("#city").val()};
    address.url = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address.street + ", " + address.city + "&key=AIzaSyAuWTF8z29_K-C5ni7fpSjZixrNO4w1h5k";
    $body.append("<img class=\"bgimg\" src=\"" + address.url + "\">");

    // load nytimes
    var nytimesUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + address.city + "&sort=newest&api-key=416aa1ee8061016fe86faa93b4978327:11:74297888";
    $.getJSON(nytimesUrl, function(data){

        $nytHeaderElem.text("New York Times Articles About " + address.city);

        var articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append("<li class=\"article\">" +
                "<a href=\"" + article.web_url + "\">" + article.headline.main + "</a>" +
                "<p>" + article.snippet + "</p>" +
            "</li>");
        }

    });//.fail(function(e){
      //  $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    //});

    // load wikipedia data
    var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + address.city + "&format=json&callback=wikiCallback";
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function( response ) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                address.city = articleList[i];
                var url = "http://en.wikipedia.org/wiki/" + address.city;
                $wikiElem.append("<li><a href=\"" + url + "\">" + address.city + "</a></li>");
            }

            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
}

$("#form-container").submit(loadData);

// loadData();
