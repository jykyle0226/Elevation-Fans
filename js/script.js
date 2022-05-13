function getData(){
  const APIkey = "TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc"
  const input = $("#searchtext").val()
  const url = $.ajax(`https://api.giphy.com/v1/gifs/search?q="${input}"+&api_key=${APIkey}&limit=3`)
  const newGif = document.querySelector('.out')
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

