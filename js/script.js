const apiKey = "TY3ijVkOquSjEXdbNNoaPtHZ5V7RnzIc"
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`
const search = document.getElementById('search').value.trim()
const fig = document.createElement("figure");
const img = document.createElement("img");
const fc = document.createElement("figcaption");

document.addEventListener("DOMContentLoaded", init)

function init() {
  document.getElementById("btnSearch").addEventListener("click", function(evt){
    evt.preventDefault()
    url = url.concat(search)
    console.log(url)
    fetch(url)
      .then(response => response.json)
      .then(content => {
        console.log(content.data)
        console.log("META", content.data)
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
  })

}