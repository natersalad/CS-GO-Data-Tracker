import express from 'express'
import { parseData } from './services/parse.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/outputdata', (req, res) => {
    console.log(req.body)
    const damageOccurrenceEntries = parseData(req.body.map);
    res.json(damageOccurrenceEntries.outputSortData(req.body.sortBy, req.body.sort1, req.body.sort2));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})