import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Loaded")

let logger1=new MongoLogger()
let userService=new UserService(logger1)

let user1=new User()



let customer1={id:1,firstName:"Erdin",lastName:"Fidan"}
let customer2={id:2,firstName:"Erdin",lastName:"Fidan"}

userService.add(customer1)
userService.add(customer2)
userService.getById()
userService.list(customer2.id)
console.log(userService.list())
console.log(userService.getById(2))