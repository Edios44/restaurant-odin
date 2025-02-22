import burgerImg from "./burger1.jpg";
import pizzaImg from "./pizza.jpg"
import burgerImg2 from "./burger2.jpg"
import { menuParser } from "./menu.js";


function frontPage(){
  const h1 = document.createElement("h1")
  h1.innerHTML = `<h1 class="title"><span class="red">Dash</span>&<span class="yellow">Dine</span></h1>`
  h1.id = "title"
   
  const p1 = document.createElement("p")
  p1.textContent = "The #1 fast food restaurant"
  p1.id = "n1food"
  

  const p3 = document.createElement("p")
  p3.textContent = "We know you are busy, so your order is prepared immediatly!"
  p3.classList.add("paragraph")

  const content = document.querySelector("#content")
  
  const imageContainer = document.createElement("div")
  imageContainer.id = "imgcontainer"
  const image1 = document.createElement("img")
  image1.src = burgerImg
  image1.classList.add("image")
  const image2 = document.createElement("img")
  image2.src = pizzaImg
  image2.classList.add("image")
  const image3 = document.createElement("img")
  image3.src = burgerImg2
  image3.classList.add("image")
  const btn = document.createElement("button")
  btn.textContent = "VIEW MENU"
  btn.addEventListener("click", ()=>{content.replaceChildren();menuParser()})
  btn.classList.add("btn")

  //imageContainer.appendChild(image1)
  imageContainer.appendChild(image2)
  imageContainer.appendChild(image3)
  
  const container = document.createElement("div")
  container.id = "container"
  
  container.appendChild(h1)
  container.appendChild(p1)
  container.appendChild(imageContainer)
  container.appendChild(p3)
  container.appendChild(btn)
  content.appendChild(container)
  
}

export {frontPage}
