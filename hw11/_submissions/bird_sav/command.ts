function createDonut(attributes) {
    const attr = {
      name: attributes.name,
      bakery: attributes.bakery,
      calories: attributes.calories,
      carbs: attributes.carbs,
    }
  
    const ingredients = []
  
    return {
      getOption(key) {
        return attr[key]
      },
      getIngredients() {
        return ingredients
      },
      makeDough(ingredient) {
        console.log(`"${ingredient.name}" has been added to the mix for the following donut: ${attr.name}`)
        ingredients.push(ingredient)
      },
      fryDough() {
        console.log(`"${attr.name}" has been fried`)
      },
      addIcing() {
        console.log(`"${attr.name}" has been iced or frosted. Now ready to eat, it contains ${attr.calories} calories and ${attr.carbs} carbs`)
      },
    }
  }