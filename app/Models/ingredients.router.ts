import express, {Request, Response} from "express"
import * as APIService from "./ingredients.service"
import { Meals } from "./ingredients.interface"
import * as fs from "fs"
import * as path from 'path'

export const mealsRouter = express.Router()

mealsRouter.get('/:ingredientName', async (req: Request, res: Response) => {
     const name: string = req.params.ingredientName.toString()
     try{
          const recipes: Meals | void = await APIService.findAll(name)
          fs.writeFile(
               path.join('api/responseDump',`${name}.ts`),
               JSON.stringify(recipes, null, 3),
               (err)=> err && console.error(err)
          )
          res.status(200).send(recipes)
     } catch (e:unknown){
          res.status(500).send(e)
     }
})