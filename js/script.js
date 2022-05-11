var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc&limit=30")

xhr.done(function(data) {
  console.log("success got data", data)
  var gifs = data.data
  var img = gifs[0].images.original.url
  console.log(img)
for(i in gifs) 
{
  $('.out').append(`<img src=${img}/>`)
}
})

