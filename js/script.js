function getData(event){
  event.preventDefault()
  const APIkey = "TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc"
  const url = $.ajax(`https://api.giphy.com/v1/gifs/search?q="${input}"+&api_key=${APIkey}&limit=28`)
  const newGif = document.querySelector('.out')
  const input = $("#searchtext").val()
  const deletbtn = document.getElementById('delete')


  url.done(function(data){
    console.log(data)
    const gifs = data.data

    for (i in gifs) 
    {
      $('.out').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }

    function deleteGif() {
      newGif.parentNode.removeChild(newGif)
    }

    deletbtn.onclick = deleteGif
  })
}

