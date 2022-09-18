const {getPokemons,deletePokemons, updatePokemons} = require("../models/pokemonsModel");

function index( req, res) {
  if (req.query['delete-id'] !== undefined) {
      deletePokemons(req.query['delete-id'])
   
  }
   const pokemons = getPokemons()
      res.render("index",{pokemons:pokemons});
    
  }

  function update(req,res) {
      updatePokemons(req)
      const pokemons = getPokemons()

      res.render('index',{pokemons:pokemons,message:"Pokemon alterado com sucesso!",tipo:"alert-success"})
  }

  module.exports = {index, update}
  