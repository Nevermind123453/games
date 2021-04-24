window.onload = function() {
    let games = document.getElementsByName("game");
    document.onclick = function(event) {
        let id = event.target.id;
        let elem = document.querySelectorAll(`.${id}`);
        for(let i = 0; i < elem.length; i++) {
            elem[i].style.display = "block";  
        }
        
        for(let i = 0; i < games.length; i++) {
            if(games[i].className != id) {
                games[i].style.display = "none";
            }
        }
    }

}