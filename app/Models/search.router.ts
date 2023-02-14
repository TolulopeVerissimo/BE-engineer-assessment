import express, {NextFunction, Request, Response} from "express"
import { asyncHandler } from "../utils"

export const searchRouter = express.Router()

searchRouter.get('/', asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
    const searchString = req.query.search
    const formMarkUp: string = `
    <!DOCTYPE html>
    <html>
        <head>
            <title> Search for Recipe </title>
        </head>
        <body>
            <h1> Recipe Form </h1>
            ${searchString ? '<h2>You searched for: ' + searchString + '</h2>' : ''}
            <form action="/" method="post">
                <label for="search">Search Recipe</label>
                <input id="search" name="search" type="text" value="" placeholder="Enter Ingredient" />
                <input type="submit" value="Submit" />
            </form>

        </body>
    </html>
    `
    res.send(formMarkUp)
}))

searchRouter.post('/', asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
    const searchTerm = req.body.search
    if(!searchTerm) res.status(400).send('Need an ingredient to proceed')
    else res.redirect(`${searchTerm}`)
}))
