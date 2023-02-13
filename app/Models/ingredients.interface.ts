interface BaseMeal {
     name: string
}

interface Ingredients {
     'ingredients': string[]
}
interface Measurements {
     'measurements': string[]
}

interface Meal extends BaseMeal{
          "idMeal": number,
          "strMeal": string,
          "strDrinkAlternate": null,
          "strCategory": string,
          "strArea": string,
          "strInstructions": string,
          "strMealThumb": string,
          "strTags": null,
          "strYoutube": string,
          "strIngredientsList": Ingredients,
          "strMeasurementList": Measurements,
          "strSource": string,
          "strImageSource": null,
          "strCreativeCommonsConfirmed": null,
          "dateModified": null
}
export interface Meals {
     [id: number] : Meal
}