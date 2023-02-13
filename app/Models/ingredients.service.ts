import fetch from 'node-fetch';
import { Meals } from "./ingredients.interface";
let meals: Meals | void = []

export const findAll = async (name: string): Promise<Meals | void> => {
     dumpList()
     meals = await updateList(name)
     return meals
}

export const updateList = async (name: string): Promise<Meals | void> => await fetchList(name)

export const dumpList = async (): Promise<null | void> => {meals = [], meals}

const fetchList = async (name: string, url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`) => {
     try {
          let data = await fetch(url)
          return await data.json()
     } catch (err) {
          console.log(err)
     }
}