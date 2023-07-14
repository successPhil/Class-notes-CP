//First console log to make sure your link is properly working
//When you inspect in chrome you should see your console.log in the console

// console.log("hi there")

//window.onload() is an event handler
// we can pass it a function that will execute after our html and css has 'loaded' in the browser

// window.onload = () => {
//     console.log("hi there")
//   }

//We can see our event handler works similar to our first console.log (can see in chrome inspect console)

//Now we can see how we can create some html using javascript

//One thing to note is every html page whether you give it one or not has a body
//If you do not explicitly have a body included in your html, the browswer will render an empty one
//When creating the DOM (Document Object Model)

//This means we can define a variable and use the querySelector method to target our "body" tag
//The h1 element is different, but we can use the createElement method to create a "h1" tag
//After we have created an h1 element we can give it content with the textContent property
//Now that we have a h1 element with content, we can use the appendChild() method to
//add our element to the body

//We can see how this works below

// window.onload = () => {
//     let body = document.querySelector("body")
//     let h1 = document.createElement("h1")
//     h1.textContent = "Welcome Page"
//     body.appendChild(h1)
//   }

//We can put most of this information in a separate function, and instead onload call the appropriate
//function to build and append our h1 tag to the body

// function createH1(){
//     let body = document.querySelector("body")
//     let h1 = document.createElement("h1")
//     h1.textContent = "Welcome Page"
//     body.appendChild(h1)
// }

//This keeps the code much cleaner, and if anything needs to change the function can simply be updated

// window.onload = () => {
//     createH1()
//   }

//To create containers for our grid we can do something similar
//Use querySelectory to 'grab' our body
//Use createElement to create a div
//Give our div an id with div.id

// We can access style properties using div.style
//We set our display to grid to let the browser know we want our div to be treated as a grid container
//This allows us to use css grid properties on our div like gridTemplateColumns and gridTemplateRows
//We use the repeate function to set our rows to 5, columns to 5, all using fraction units
//These will be flexible depending on the available space on the screen

//finally we append our div. If you inspect you will see all 25 divs (The page will look the same)
//this is because our one div is a 5x5 grid container so css grid tells the browser to treat it appropriately

// function createContainer(){
//   let body = document.querySelector("body")
//   let div = document.createElement("div")
//   div.id = "container"
//   div.style.display = "grid"
//   div.style.gridTemplateColumns = "repeat(5, 1fr)"
//   div.style.gridTemplateRows = "repeat(5, 1fr)"
//   body.appendChild(div)
// }

// function createH1(){
//     let body = document.querySelector("body")
//     let h1 = document.createElement("h1")
//     h1.textContent = "Welcome Page"
//     body.appendChild(h1)
// }

// window.onload = () => {
//     createH1()
//     createContainer()
// }

//notice the order of our of our functions does not matter, the order we call them does

//Now that we have containers we can write a function to create our boxes
//Because the containers now exist we can target them with querySelector()
//We use a for loop to iterate through our divs and create our appropriately styled boxes
// On each iteration we also set the content of div we are styling to the value of our iteration variable
// This is just an easy way to number our boxes

// function createBoxes() {
//     let container = document.querySelector("#container")
//     for(let i = 1; i < 26; i++) {
//       let div = document.createElement("div")
//       div.style.backgroundColor = "aquamarine"
//       div.style.border = "1px solid black"
//       div.style.padding = "30px"
//       div.style.margin = "4px"
//       div.style.textAlign = "center"
//       div.textContent = i
//       container.appendChild(div)
//     }
//   }
  

// Finished example:

function createH1(){
    let body = document.querySelector("body")
    let h1 = document.createElement("h1")
    h1.textContent = "Welcome Page"
    body.appendChild(h1)
}

function createContainer(){
    let body = document.querySelector("body")
    let div = document.createElement("div")
    div.id = "container"
    
    div.style.display = "grid"
    div.style.gridTemplateColumns = "repeat(5, 1fr)"
    div.style.gridTemplateRows = "repeat(5, 1fr)"
    body.appendChild(div)
  }

function createBoxes() {
    let container = document.querySelector("#container")
    for(let i = 1; i < 26; i++) {
      let div = document.createElement("div")
      div.className = "items"
      // div.style.backgroundColor = "aquamarine"
      // div.style.border = "1px solid black"
      // div.style.padding = "30px"
      // div.style.margin = "4px"
      // div.style.textAlign = "center"
      div.textContent = i
      container.appendChild(div)
    }
  }

//This function is just additional styling
//We are targeting our container class (note the #)
//Adding a event listener for a click
//And executing a function that picks a random number
//Then setting the background color to the #number to generate a random color on click

function createColorChangeListner() {
     let container = document.querySelector("#container")                   
     container.addEventListener("click", (e) => {                           
       const randomColor = Math.floor(Math.random()*16777215).toString(16)
       e.target.style.backgroundColor = "#" + randomColor
})
}

window.onload = () => {
    createH1()
    createContainer()
    createBoxes()
    createColorChangeListner()
  }