//importo express
const express = require("express")

//importo la classe router
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Lista dei post")
})


//esporto il router dei post
module.exports = router;