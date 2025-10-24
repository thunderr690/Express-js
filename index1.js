import express from 'express'
const app = express()

// function ageCheck(req, resp, next) {
//     if(!req.query.age || req.query.age<18){
//         resp.send("Alert ! you can not access this page")
//     }else{
//         next()
//     }
// }

// app.use(ageCheck)

function ipCheck(req, resp, next) {
    const ip = req.socket.remoteAddress
    console.log(ip)
    if(ip.includes('192.168.1.5')){
        resp.send("Alert ! you can not access this page")
    }else{
        next()
    }
    
}

app.use(ipCheck)


app.get("/",(req, resp) => {
    resp.send("<h1>Home page</h1>")
})
app.get("/login",(req, resp) => {
    resp.send("<h1>login page</h1>")
})
app.get("/admin",(req, resp) => {
    resp.send("<h1>admin page</h1>")
})

app.listen(3200)


// import express from 'express'
// const app = express()

// //Global or application level routes handling

// app.use((req, resp, next) => {
//     console.log("User is accessing" +req.url+ " Page")
//     next()
// })

// app.get("/",(req, resp) => {
//     resp.send("Home Page")
// })

// app.get("/users",(req, resp) => {
//     resp.send("Users Page")
// })
// app.get("/products",(req, resp) => {
//     resp.send("Products Page")
// })
// app.listen(3200)