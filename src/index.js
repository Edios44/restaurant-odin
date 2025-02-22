import "./styles.css"
import {frontPage as home} from "./front.js";
import { menuParser as menu } from "./menu.js";
import { aboutPage as about} from "./about.js"

home()

const content = document.querySelector("#content")

const homebtn = document.querySelector("#home")
const menubtn = document.querySelector("#menu")
const aboutbtn = document.querySelector("#about")

const nav = document.querySelector("nav")
nav.addEventListener("click",(e)=>{
  let tar = e.target.id
  console.log(tar)
  if (tar == "home"){
    content.replaceChildren()
    home()
  }
  else if (tar == "menu"){
    content.replaceChildren()
    menu()
  }
  else if (tar == "about"){
    content.replaceChildren()
    about()
  }
})
