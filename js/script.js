function getData(){
  const deletbtn = document.createElement('deleteButton')
  const APIkey = "TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc"
  const input = $("#searchtext").val()
  const url = $.ajax(`http://api.giphy.com/v1/gifs/search?q="${input}"+&api_key=${APIkey}&limit=2`)
  const newGif = document.querySelector('.out')

  deletbtn.innerHTML = "x"
  deletbtn.className = "delete"

  url.done(function(data){
    console.log(data)
    const gifs = data.data
    for (i in gifs) 
    {
      $('.out').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
      $('.out').append(deletbtn)
    }
    function deleteGif() {
      newGif.parentNode.removeChild(newGif)
    }
    deletbtn.onclick = deleteGif
  })
}


