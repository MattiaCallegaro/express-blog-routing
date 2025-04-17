//importo express
const express = require("express")

//importo la classe router
const router = express.Router()

//index
router.get('/', (req, res) =>{
    res.send("Lista dei post")
})

//show
router.get('/:id', (req, res) => {
    res.send(`Visualizzo il singolo post ${req.params.id}`)
})

//store
router.post('/', (req,res) =>{
    res.send("Creao un nuovo post")
})


//esporto il router dei post
module.exports = router;