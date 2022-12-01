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
    console.log(apiCall)
    fetch(apiCall)                    
    .then(function(response){
        console.log("resp begins")  
        return response.json();        
    }).then(function(json){
       getData(JSON.parse(json.contents))
    }).catch(function(error){       
        console.log(error);           
    });

}
const typeSearch = (types, name) => {

    const typeString = types.join(",")
    console.log(typeString.length>0)

    const apiCall = 'https://api.allorigins.win/get?url= ' + 
    encodeURIComponent('https://open-api.myhelsinki.fi/v2/places/?tags_search='+typeString)
    console.log(apiCall)

    fetch(apiCall)               
    .then(function(response){
        return response.json();
    }).then(function(json){
        resetMap()
        console.log(name)
        for (const objekt of JSON.parse(json.contents).data){
            if (name.length > 0){
                const restName = objekt.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
                console.log("lol")
                if (restName.includes(name.toLowerCase())){
                    addToMap(objekt)
                }
            } else {
                addToMap(objekt)
            }
        }
        
        
        }).catch(function(error){       
        console.log(error);           
    });
}

const ratingSearch = (rating) => {
    ;
}

const search = () => {
    const queryValue = document.getElementsByClassName("searchField")[0].value;
    typeSearch(["restaurants"], queryValue)
}




//idQuery(289)





