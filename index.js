// const express = require('express')

import express from 'express'
import path from 'path'
const app = express()
const abspath = path.resolve('view/')

const publicpath = path.resolve('public')
console.log(publicpath)

app.use(express.static(publicpath))
console.log(publicpath)


app.get('/',(req, resp) => {
    resp.sendFile(abspath+"/home.html")
})

app.get('/login',(req, resp) => {
    resp.sendFile(abspath+'/login.html')
})
app.get('/about',(req, resp) => {
    resp.sendFile(abspath+'/about.html')
})
app.use((req, resp) => {
    resp.status(404). sendFile(abspath+'/404.html')
})

app.listen(3200)



// import express from 'express'
// import home from './pages/home.js'
// import login from './pages/login.js'
// import submit from './pages/submit.js'
// const app = express()

// app.get("/", (req, resp) => {
//     resp.send(home())
// })
// app.get("/login", (req, resp) => {
//     resp.send(login())
// })
// app.post("/submit", (req, resp) => {
//     resp.send(submit())
// })

// app.listen(3200)




// import express from 'express'
// import home, { contact } from './pages/home.js'

// const app = express()

// app.get("",(req, resp) => {
//     resp.send(home())
// })

// app.get("/contact",(req, resp) => {
//     resp.send(contact())
// })

// app.listen(3400)




// const express = require('express')

// const app = express()
// app.get("",(req, resp) => {
//     resp.send("<h1> Basic node js example </h1>")
// })
// app.get("/about",(req, resp) => {
//     resp.send("<h1> this is About page </h1>")
// })

// app.listen(3200)