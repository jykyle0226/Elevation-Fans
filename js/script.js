// function getData(){

//   var input = $("#searchtext").val()
//   var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc&limit=30")
//   console.log(input)
// xhr.done(function(data) {
//   console.log(data)
//   var gifs = data.data
//   var img = gifs[0].images.original.url
//   console.log(img)
// for(i in gifs) 
// {
//   $('.out').append(`<img src=${img}/>`)
// }
// })

// }


function getData(){
  var input = $("#searchtext").val()
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc&limit=30")
  xhr.done(function(data){
    console.log(data)
    var gifs = data.data
    for (i in gifs) 
    {
      $('.out').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
  })
}