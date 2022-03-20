$.getJSON( "https://gorest.co.in/public/v2/posts", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<div id='" + key + "' class='cards'>" + '<h1>' + val.title + '</h1>' + '<p>' +  val.body + '</p> '+"</div>" );
  });
  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});