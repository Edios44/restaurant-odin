
const tacos = [{name:"cantina Chiken Crispy",price:"2.99$"},
        {name:"Double Stacked Taco", price:"1.99$"},
        {name:"Crunchy Taco",price:"1.79$"},
        {name:"Spicy Potato Soft Taco",price:"1.29$"}]

const burger = [{name:"Grilled Chicken Sandwich",price:"1.99$"},
          {name:"Veggie Burger with Cheese",price:"1.29$"},
          {name:"Chicken Club",price:"2.99$"}]

const pizza = [{name:"NY Style Pizza",price:"1.99$"},
          {name:"Seasoned Cauliflower Pizza",price:"2.49$"},
          {name:"Gluten Free Pizza",price:"2.29$"}]

const fries = [{name:"small",price:"0.39$"},
        {name:"large",price:"0.99$"}]

const drinks = [{name:"Cola",price:"0.99$"},
          {name:"Iced tea",price:"0.79$"},
          {name:"Frozen Coffee",price:"1.19$"},
          {name:"Milkshake",price:"1.49$"}]


class Menumaker {

  constructor(type,variations){
    this.type = type
    this.variations = variations
  }

  make = (menu) =>{
    const menuCard = document.createElement("div")
    const name = document.createElement("h1")
    name.textContent = this.type
    name.id = "foodname"
    menuCard.appendChild(name)
    
    const list = document.createElement("ul")
    this.variations.forEach( (food, i) => {
      const li = document.createElement("li")
      li.textContent = `${food.name}`
      list.appendChild(li)
    });
    const price = document.createElement("ul")
    price.id = "priceList"
    this.variations.forEach((food) =>{
      const li = document.createElement("li")
      li.textContent = `${food.price}`
      price.appendChild(li)
    })

    menuCard.classList.add("card")

    menuCard.appendChild(list)
    menuCard.appendChild(price)
    menu.appendChild(menuCard)
  }
}

function menuParser() {
  const menu = document.createElement("div")
  const content = document.querySelector("#content")
  menu.id = "menupage"

  const title = document.createElement("h1")
  title.textContent = "Dine & Dash Menu :"

  const burgerMenu = new Menumaker("Burger",burger)
  burgerMenu.make(menu)

  const tacoMenu = new Menumaker("Taco",tacos)
  tacoMenu.make(menu)

  const pizzaMenu = new Menumaker("Pizza",pizza)
  pizzaMenu.make(menu)

  const friesMenu = new Menumaker("Fries",fries)
  friesMenu.make(menu)

  const drinksMenu = new Menumaker("Drinks",drinks)
  drinksMenu.make(menu)

  const container = document.createElement("div")
  container.id = "container"

  container.appendChild(title)
  container.appendChild(menu)

  content.appendChild(container)
}

export{menuParser}
