apiSearch = (id) => {
    apiCall = 'https://api.allorigins.win/get?url= ' + encodeURIComponent('https://open-api.myhelsinki.fi/v2/place/' + id)
    fetch(apiCall)                    
    .then(function(response){        
        return response.json();        
    }).then(function(json){
        console.log(JSON.parse(json.contents))          
    }).catch(function(error){      
        console.log(error);           
    });
}
apiSearch(7)