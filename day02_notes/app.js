//EXAMPLE 1:
//Showing our html button in the console

// const btn = document.querySelector("button")
// console.log(btn)

//Shows "<button id="alert-button">Alert Me!</button>" in the console when we inspect our webpage

// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {})
// Does not do anything by itself, the function is empty



// const btn = document.querySelector("button")
// btn.addEventListener("click", (myEventFunction) => {
//   console.log(myEventFunction.target)
//   myEventFunction.target.innerText = "clicked"
// })


//The querySelector method takes a string, in this case we are passing the tag "button"
//This will find a reference to the first button tag in our html document

// The "click" in our addEventListener attaches a click event listner to our button (btn)
// When the button is clicked, it will invoke the function we passed (myEventFuntion) and
// execute its code

//The target property is a property of the event object that represents the element on which the event occurred.
//It provides a way to access the specific element that triggered the event.

//We console log the target property of our event function just to show it in the console

//We then access that target property and set its inner text to "clicked" using the innerText property
//This changes the text of our button from "Alert Me!" to "clicked" when the button is clicked


// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//     alert("Are you from Code Platoon?!")
// })

//This time we are just using an alert in our anonymous function
// An alert will just create a pop-up containing the string passed to the alert method
// Our Event Listener still is attaching a "click" listner to our btn
//So when that button is clicked, our anonymous function runs and executes the alert
  







//EXERCISE 2: Function to remove img tags and replace them with text contained from the
//alt attribute

// backwards loop is not affected by shifting, as an image at the end is replaced
// it has no impact on the other images position in the collection

// function imgToText(){
//     let imgs = document.body.getElementsByTagName("img");
//     for (let i = imgs.length-1; i >= 0; i--){
//         let img = imgs[i];
//         if (img.alt){
//             let txt = document.createTextNode(img.alt);
//             img.parentNode.replaceChild(txt, img)
//         }
//     }
// }

//forwards loop does not work, if we replace the first image in imgs, we will go to the next
//iteration, but the collection of images will shift because the first item has been replaced
//This will cause us to miss images as they shift

// function showAltText(){
//     let imgs = document.body.getElementsByTagName("img");
//     for (let i = 0; i < imgs.length; i++){
//         let img = imgs[i];
//         if (img.alt){
//             let txt = document.createTextNode(img.alt);
//             img.parentNode.replaceChild(txt, img)
//         }
//     }
// }


//One way to handle this is to use a while loop and update images on each iteration
// function showAltText(){
//     let imgs = document.body.getElementsByTagName("img");
//     while (imgs.length > 0){
//         let img = imgs[0];
//         if (img.alt){
//             let txt = document.createTextNode(img.alt);
//             img.parentNode.replaceChild(txt, img)
//         }
//         imgs = document.body.getElementsByTagName("img");
//     }
// }

// To iterate forwards and get the expected result we can turn the HTML collection of img tags into
// a real array. This will prevent the unexpected behavior we saw before
function showAltText(){
    let imgs = document.body.getElementsByTagName("img");
    let imgArray = Array.from(imgs) //create an array of the collection imgs
    for (let i = 0; i < imgArray.length; i++){
        let img = imgArray[i];
        if (img.alt){
            let txt = document.createTextNode(img.alt);
            img.parentNode.replaceChild(txt, img)
        }
    }
}