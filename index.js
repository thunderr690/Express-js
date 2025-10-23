// const express = require('express')

import express from 'express'
import home, { contact } from './pages/home.js'

const app = express()

app.get("",(req, resp) => {
    resp.send(home())
})

app.get("/contact",(req, resp) => {
    resp.send(contact())
})

app.listen(3400)


















// const express = require('express')

// const app = express()
// app.get("",(req, resp) => {
//     resp.send("<h1> Basic node js example </h1>")
// })
// app.get("/about",(req, resp) => {
//     resp.send("<h1> this is About page </h1>")
// })

// app.listen(3200)