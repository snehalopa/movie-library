function loadInfo(){
    event.preventDefault();

    var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var responseObject = JSON.parse(this.responseText);
                    movie(responseObject.Search);
                }
            }
                    xhttp.open("GET", "http://www.omdbapi.com/?apikey=cdf2dbb2&s=Batman&page=2", true);
                    xhttp.send();
}

function movie(movieList){
    let movieListHtml = '';
    //creating a varaible of string with blank value
    movieList.map(item => {
            
        let movieHtml = 
            '<div class="cards">' + 
                '<img class="image" id="poster" src="' + item.Poster + '" /><br>' +
                '<div class="year">' +
                    '<span id="title"> ' + item.Title + '</span>' +
                    '<span id="year"> ' +item.Year + '</span></div>' + 
                '</div>' +
            '</div>';

        movieListHtml += movieHtml;

    })

document.getElementById('filmsList').innerHTML = movieListHtml;
}