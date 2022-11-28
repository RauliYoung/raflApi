apiHaku = () => {
    query = document.getElementById("haku").value
    fetch('https://api.tvmaze.com/search/shows?q=' + query)                         
    .then(function(vastaus){        
        return vastaus.json();        
    }).then(function(json){         
        hakuTulos(json);              
    }).catch(function(error){      
        console.log(error);           
    });
}