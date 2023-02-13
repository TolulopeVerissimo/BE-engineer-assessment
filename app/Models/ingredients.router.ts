import express, {Request, Response} from "express"
import * as APIService from "./ingredients.service"
import { Meals } from "./ingredients.interface"

export const mealsRouter = express.Router()

mealsRouter.get('/:ingredientName', async (req: Request, res: Response) => {
     
     const name: string = req.params.ingredientName.toString()
     try{
          const recipes: Meals | void = await APIService.findAll(name)
          res.status(200).send(recipes)
     } catch (e:unknown){
          res.status(500).send(e)
     }
})