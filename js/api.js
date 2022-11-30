// Get the nearest restauraunts
nearestQuery = (coordinates) => {

    apiCall = 'https://api.allorigins.win/get?url= ' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/places/?distance_filter=60.170957,24.942721,0.5')
    fetch(apiCall)
                        
    .then(function(response){        
        return response.json();        
    }).then(function(json){
        resetMap()
        for (let object of JSON.parse(json.contents).data){
            for (let tag of object.tags){
                if (tag.name == "restaurants"){
                    addToMap(object)
                }
            }
    }      
    }).catch(function(error){      
        console.log(error);           
    });
}

// Search restaraunt with name and categories?
apiQuery = (name, types) => {
    if (name == ""){
        name = ":D"
    }
    name = name.toLowerCase()
    apiCall = 'https://api.allorigins.win/get?url= ' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants')

    fetch(apiCall)                    
    .then(function(response){        
        return response.json();        
    }).then(function(json){
        resetMap()
        for (const i of JSON.parse(json.contents).data){
            restarauntName = i.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
            for (type of types) {
                for (const tag of i.tags){
                    if (tag.name.toLowerCase().includes(type)){
                        console.log(tag.name.toLowerCase())
                        console.log("bar")
                        addToMap(i);
                    }
                }
            }
            if (restarauntName.includes(name)){
                console.log("ei")
                addToMap(i);
            }
    }        
    }).catch(function(error){      
        console.log(error);           
    });
}

nearestQuery("")
apiQuery("", ["bar"])

