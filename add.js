function addmovie(){
    event.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Movie has been added successfully");
        }
        }
        xhttp.open("POST", "https://www.omdbapi.com/?apikey=cdf2dbb2&s=", true);
        xhttp.send();
}