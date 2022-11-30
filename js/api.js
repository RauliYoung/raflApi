'use strict';

// Get the nearest restauraunts
const nearestQuery = (coordinates) => {

    const apiCall = 'https://api.allorigins.win/get?url= ' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/places/?distance_filter=60.170957,24.942721,0.5')
    fetch(apiCall)
                        
    .then(function(response){        
        return response.json();        
    }).then(function(json){
        resetMap()
        for (let object of JSON.parse(json.contents).data){
            for (const tag of object.tags){
                if (tag.name == "restaurants"){
                    addToMap(object)
                }
            }
    }      
    }).catch(function(error){      
        console.log(error);           
    });
}

// Get one restaurant with specific ID
const idQuery = (id) => {

    const apiCall = 'https://api.allorigins.win/get?url=' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/place/'+id)

    fetch(apiCall)                    
    .then(function(response){  
        return response.json();        
    }).then(function(json){
       getData(JSON.parse(json.contents))
    }).catch(function(error){       
        console.log(error);           
    });
}

// Search restaraunt based on name (string), categories (array) and best rating (array)
const apiQuery = (name, types, rating) => {
       
    if (name == ""){
        name = ":D"
    }

    name = name.toLowerCase()
    const apiCall = 'https://api.allorigins.win/get?url= ' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants')
    
    fetch(apiCall)                    
    .then(function(response){  
        return response.json();        
    }).then(function(json){
        console.log("es")  
        resetMap()
        for (const i of JSON.parse(json.contents).data){
            const restarauntName = i.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
            for (type of types) {
                for (const tag of i.tags){
                    if (tag.name.toLowerCase().includes(type)){      
                        addToMap(i);
                    }
                }
            }
            if (restarauntName.includes(name)){
                addToMap(i);
            }
    }        
    }).catch(function(error){       
        console.log(error);           
    });
}

const search = () => {
    const queryValue = document.getElementsByClassName("searchField")[0].value;
    apiQuery(queryValue, [], [])
}

//idQuery(289)
nearestQuery("")
apiQuery("luckiefun", [], [])




