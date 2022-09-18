const { render } = require("ejs");
const { addPokemons } = require("../models/pokemonsModel");

function view(req,res) {
    res.render('add')
}
function add(req,res) {
    addPokemons(req.body)
    res.render('add',{message:"Pokemon adicionado!",tipo:"alert-success"})
}

module.exports = {
    view, add
}