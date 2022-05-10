const accessToken = "e14529b1805945dd9fa8ea9fb64cb3be"

$.ajax({
    method: "GET",
    url: " https://api.spotify.com",
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    data: {
      "name": "She's So Unusual",
      "type": "album",
      "external_urls" : {
      "spotify" : "https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj"
      }
    }
  })
    .done(function( msg ) {
      console.log(msg)
    })