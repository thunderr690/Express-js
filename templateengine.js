import express from 'express'
const app = express()


app.set('view engine', 'ejs')
app.get('/',(req, resp) => {
    resp.render('home',{name:"Aman SIngh", ytChannel: "Thunder gaming" })
})

app.listen(3200)