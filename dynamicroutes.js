import express from 'express'

const app = express()

app.get('/', (req, resp) => {
    const users = ['Aman', 'samm', 'peter', 'anil']
    let data = `<ul>`
    for (let i = 0; i < users.length; i++) {

        data += `<li><a href="user/${users[i]}">${users[i]}</a></li>`
        console.log(users[i])
    }
    data += `</ul>`
    resp.send(data)
})
app.get("/user/:name", (req, resp) => {
    console.log(req.params.name)
    const username = req.params.name
    resp.send(`this is ${username}'s profile page`)
})

app.listen(3200)