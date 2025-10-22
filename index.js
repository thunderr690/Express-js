// const express = require('express')

import express from 'express'

const app = express()

app.get("",(req, resp) => {
    resp.send("<h1>Aman Singh</h1>")
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