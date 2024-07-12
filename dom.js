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

//2.)