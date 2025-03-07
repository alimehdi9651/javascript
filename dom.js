//WINDOW object: it represent a open window in a brower. it is browser's object (not javascript's object)
//its automatically created in the brower.
//its a global object with lots of properties and methods.
//----------------------------

//Document object model: is use to perform some change in website dynamically 



//Methods is DOM
//1.) getElementById(id of tag)
// id is represented by "#"
// let heading = document.getElementById("heading");
// console.log(heading)

//2.).class: class is not unique , multiple tags can hold same class
// let heading = document.getElementsByClassName("input-group") // this fuction returns html collection it is similar to an array
// console.log(heading);
// console.dir(heading);

//3.) we can also acces tags using tagNames
// let paragraph = document.getElementsByTagName("p")// it also return html collection of tags of same name.
// console.dir(paragraph);

//4.) querySelector(): here we can pass .className/tagName/#id to access tags 
// for tag names
// let first_tags = document.querySelector("p");// for first tag use querySelector()
// // let all_tags = document.querySelectorAll("label");// for all tags we use querySelectorAll()
// console.dir(first_tags);
// console.dir(all_tags);
// //for .class
// let first_class = document.querySelector(".input-group");// for first class use querySelector()
// let all_class = document.querySelectorAll(".input-group");// for all class we use querySelectorAll()
// console.dir(first_class);
// console.dir(all_class);
// so as for #id 
//.querySelectorAll() or .querySelector() function returns a node stack of tags/classes/ids.


// PROPERTIES: we can get and set data using these properties
//get : to check data of text.
//set: to change or update data.
//1.).tagName : return tag name.
// let first_tags = document.querySelector("p");
// console.dir(first_tags);
// console.log(first_tags.tagName)

//2.).innerText:
//return the text content of element and all its children.
// let div = document.querySelector("div");
// console.dir(div.innerText);
//3.).innerHTML:
//return the HTML  content of element and all its children.
// let div = document.querySelector("div");
// console.dir(div.innerHTML);

// let boxes = document.querySelector(".container").children;
// function getRandomColour(){
//     let val1 = Math.ceil(Math.random() * (255 - 100 + 1)) - 100;
//     let val2 = Math.random() * 255;
//     let val3 = Math.random() * 255;
//     return `rgb(${val1}, ${val2}, ${val3})`;
// }
// // Array.from(boxes).forEach(e => {
// //     e.style.backgroundColour = "red"
// // })

// // boxes[3].style.backgroundColour = "red";
// // document.getElementById("red").style.background = "red"
// let boxes = document.querySelector(".container").children;
// Array.from(boxes).forEach(e => {
//     e.style.background = getRandomColour()
// })
