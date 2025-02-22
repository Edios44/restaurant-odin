function aboutPage(){
  const content = document.querySelector("#content")
  const about = document.createElement("div")
  const aboutUsTitle = document.createElement("h3")
  aboutUsTitle.textContent = "About Dash & Dine"
  about.appendChild(aboutUsTitle)

  const aboutTxt1 = document.createElement("p")
  aboutTxt1.textContent = "Welcome to Dash & Dine, where speed meets quality, and delicious meals are served with a smile! We're more than just your average fast food joint—we're your go-to destination for mouth-watering burgers, crispy fries, and refreshing drinks, all crafted with care to satisfy your cravings in record time."
  
  about.appendChild(aboutTxt1)
  const aboutTxt2 = document.createElement("p")
  aboutTxt2.textContent = "At Dash & Dine, we believe in providing our customers with a fast, friendly, and fun dining experience. Whether you're grabbing a quick bite on the go or enjoying a meal with friends and family, we’ve got something for everyone. Our menu is designed to bring you the best of fast food—using fresh ingredients, bold flavors, and classic favorites that never disappoint."

  about.appendChild(aboutTxt2)

  const container = document.createElement("div")
  container.id = "container"
  container.appendChild(about)
  content.appendChild(container)
  
}

export {aboutPage}
