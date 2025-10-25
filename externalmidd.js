import express from 'express'
import morgan from 'morgan'
const app = express()


app.use(morgan('dev'))
app.get('/',(req,resp) => {
    resp.send("Home Page")
})

app.get('/users',(req,resp) => {
    resp.send("Users Page")
})

app.listen(3200)