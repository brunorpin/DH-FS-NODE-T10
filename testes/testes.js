//const express = require('express');
//const app = express();
let series = [ { "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" } ];

let id = 3;

for(let i = 0; i < series.length; i++){
    //console.log(series[i].id)
    if(id==series[i].id){
        console.log(series[i])
    }
    

}

// app.get('/serie/:id',(req,res) => {

//     let {id} = req.params
    
//     for(let i = 0; i < series.length; i++){
//         console.log(series[i])
//         //if(series[i]==id)
//     }
// })