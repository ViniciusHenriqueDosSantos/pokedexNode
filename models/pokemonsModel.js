const { get } = require('http')
const path = require('path')
const fs = require('fs')
function getPokemons() {
    var pokemons  = path.resolve(__dirname,'..')
    pokemons = path.join(pokemons,'data.json')
    pokemons = require(pokemons)

    return pokemons
    
}
function addPokemons(pokemon) {
    var pokedex = getPokemons()
    pokedex.push(JSON.parse(JSON.stringify(pokemon)))
    const jsonPath = path.join(path.resolve(__dirname,'..'),'data.json')


    fs.writeFileSync(jsonPath,JSON.stringify(pokedex))
    
}
function deletePokemons(id) {
    var pokedex = getPokemons()
   for (let index = 0; index < pokedex.length; index++) {
  
   if(pokedex[index]['id'] == id){
        pokedex.splice(index,1)
   }
   }
   const jsonPath = path.join(path.resolve(__dirname,'..'),'data.json')


   fs.writeFileSync(jsonPath,JSON.stringify(pokedex))
    
}
function updatePokemons(req) {
    var pokedex= getPokemons()
    console.log(req.body);
    for (let index = 0; index < pokedex.length; index++) {
        if (pokedex[index]['id'] == req.body.update) {
            pokedex[index]['id'] = req.body.id
            pokedex[index]['pokemon'] = req.body.pokemon
            pokedex[index]['tipo'] = req.body.tipo
        
        }        
    }
  

    const jsonPath = path.join(path.resolve(__dirname,'..'),'data.json')


    fs.writeFileSync(jsonPath,JSON.stringify(pokedex))
}

module.exports = {getPokemons,addPokemons,deletePokemons, updatePokemons}



