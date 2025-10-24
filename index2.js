
import express from 'express'
import path from 'path'
const app = express()

// inbuilt middleware examples
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))


app.get('/', (req, resp) => {
    const filePath = path.resolve('view/home.html')
    resp.sendFile(filePath)
})


app.get('/login', (req, resp) => {
    resp.send(`<form action="/submit" method="post">
        
        <input type="text" placeholder="enter email"  name="email"/>
        <br/>
        <br/>
        <input type="text" placeholder="enter password" name="password"/>
        <br/>
        <br/>
        <button>Login</button>
        <a href='/' >Go to home</a>
        </form>`)
})
app.get('/submit', (req, resp) => {
    console.log(req.body)
    resp.send("Submit Page")
})
app.get('/users', (req, resp) => {
    resp.send("Users Page")
})

app.listen(3200)