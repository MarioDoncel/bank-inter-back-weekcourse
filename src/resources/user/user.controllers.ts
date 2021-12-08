import { Request, Response} from 'express'
import { UserService } from './user.service'

const userService = new UserService()

export class UserController {
    async signin(req:Request, res:Response) {

        const {email, password} = req.body
        
        const user = await userService.signin({email, password})

        return res.status(200).send(user)
    } 
    async signup(req:Request, res:Response) {

        const userData = req.body
        
        const user = await userService.signup(userData)
    
        res.send(user)
    } 
    async me(req:Request, res:Response) {
        const user = await userService.me(req.user)
    
        res.status(201).send(user)
    } 
}