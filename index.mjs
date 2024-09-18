import express from 'express'
import os from 'os'
import axios from 'axios'

const app = express()
const PORT = 3000

app.get('/', (req, res) =>  { 
    res.send(`hello from ${os.hostname()}`)
})

app.get('/nginx', (req, res) => {
      const url = "http://nginx" 
        axios.get(url)
             .then( (response) => { 
                console.log(response.data)
                res.send(response.data) })
})

app.listen(PORT,() => {console.log(`listening on port ${PORT}`)})


