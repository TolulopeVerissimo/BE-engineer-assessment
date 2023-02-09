# EcoCart Sciences Inc
## Senior BE Engineer (NodeJS) Assessment

### Challenge Part 1 (code)

### Context: 
     We're looking to beta-test a new feature for calculating the carbon used when cooking meals at home. As a POC, we're leveraging this free API - https://www.themealdb.com/api.php

###  Ask: 
     Create a new app/api + endpoint to "get meals using the main ingredient"

###  Requirements:
     Communicates with / backed-by MealsDB
     Request parameter is a “string” that represents the main ingredient, e.g. “chicken”
     Response is an array of “Meal”s - specified below, with initial values as examples
     Tech: Node / Express / Typescript (anything beyond that is welcome!)
     Testable via Postman

### Bonus:
     Some security mechanisms!
     Hosted on public url

```
     class Meal {
          id: number = 52820,

          name: string = 'Katsu Chicken curry',

          instructions: string = 'Prep:15min > Cook:30min > Ready in:...',

          tags: string[] = ['Curry', 'Meat'],

          thumbUrl: string = 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg'

          youtubeUrl: string = 'https://www.youtube.com/watch?v=MWzxDFRtVbc',

          ingredients: { ingredient: string, measurement: string }[] = [
          {
               ingredient: 'chicken breast',
               measurement: '4 pounded to 1cm thickness'
          },
          {
               ingredient: 'plain flour',
               measurement: '2 tablespoons'
          },
          ...
     }
```
Challenge Part 2 (written)
Context: Our beta test was a hit! We now want to scale up to what we anticipate to be
millions of users/requests daily. In order to do this, we'll have to migrate away from
MealsDB
Ask: How might you build this?
- Touch on all parts of the backend system, touching on this like scale, security,
technologies used, strategies implemented.
- Be as descriptive as possible, use whichever tools you need to convey
(diagrams, etc)