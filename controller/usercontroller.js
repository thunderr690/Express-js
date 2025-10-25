
import { userList } from '../models/usermodel.js'

export function handleUsers(req, resp){

    const userData = userList()

    console.log(userData)
    resp.render('user1',{user:userData})
}