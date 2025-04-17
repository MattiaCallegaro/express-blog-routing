// devo importare express
const express = require("express")

//inizializzo express nella variabile app
const app = express()

//definisco la porta 
const port = 3000



//metto in ascolto il server
app.listen(port,()=>{
    console.log(`Server in ascolto alla porta ${port}`)
})