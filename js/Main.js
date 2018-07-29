// #4 Create three objects with four properties (one must be an image file path) using object literal notation


var spread1 ={
	img: "img/peanutbutter.jpg",
	name: "peanut butter",
	source: "peanuts",
	rating: 9
	}


var spread2 = {
	img: "img/almondbutter.jpg",
	name: "almond butter",
	source: "almonds",
	rating: 8	
}


var spread3= {
	img: "img/nutella.jpg",
	name: "nutella",
	source: "hazelnuts",
	rating: 10
	}



console.log(spread1, spread2, spread3)

// 5. Create the same three objects, with the same four properties, using constructor notation.

function Spreads (image, name, source, rating) {
	this.img = image;
	this.name = name;
	this.source = source;
	this.rating = rating;
	this.score = function() {
		return this.rating * .10}
	}

var conspread1 = new Spreads("img/peanutbutter.jpg", "peanut butter", "peanuts", "9" );
var conspread2 = new Spreads("img/almondbutter.jpg", "almond butter", "almonds", "8");
var conspread3 = new Spreads("img/nutella.jpg", "nutella", "hazelnuts", "10");

console.log(conspread1, conspread2, conspread3)


// 6. In JS: Add to a method to each literal object. The method should tmultiply two numbers and return the product.


var spread1 ={
	img: "img/peanutbutter.jpg",
	name: "peanut butter",
	source: "peanuts",
	rating: 9,
	score: function() {
    return this.rating * 0.10}
}

var spread2 = {
	img: "img/almondbutter.jpg",
	name: "almond butter",
	source: "almonds",
	rating: 8,
	score: function() {
    return this.rating * 0.10}
}


var spread3= {
	img: "img/nutella.jpg",
	name: "nutella",
	source: "hazelnuts",
	rating: 10, 
	score: function() {
    return this.rating * 0.10}
}

// 7. In JS: Add the same method to your constructor function.
//see above

// 8. In JS: Add each object created by the constructor function to an array.

var spreadArray = [conspread1, conspread2, conspread3];

// #9. Loop through the array of objects
for (var i = 0; i < spreadArray.length; i++) {
  // for each one create an element to add the content to (one needs to be an image element).
  var newDiv  = document.createElement("div")
  var newImg  = document.createElement("img");
  var newH1   = document.createElement("h1");
  var newH5   = document.createElement("h5");
  var newP    = document.createElement("p");
  var newSpan = document.createElement("span");
  console.log(newDiv, newImg, newH1, newH5, newP, newSpan);


//  #10 Still in the loop, create text nodes for each piece of content
  var newH1Text   = document.createTextNode(spreadArray[i].name);
  var newH5Text   = document.createTextNode(spreadArray[i].source);
  var newPText    = document.createTextNode("rating:" + spreadArray[i].rating);
  var newSpanText = document.createTextNode("score: " + spreadArray[i].score());
  console.log(newH1Text, newH5Text, newPText, newSpanText);


  // add those to the elements you created.
  newH1.appendChild(newH1Text);
  newH5.appendChild(newH5Text);
  newP.appendChild(newPText);
  newSpan.appendChild(newSpanText);

  // #11 Still in the loop, update the source and alt attributes of the image.
  newImg.src = spreadArray[i].img;
  newImg.alt = spreadArray[i].name + " " + spreadArray[i].source;

  // #13 Add the elements to the HTML so a user can view them.
  newDiv.appendChild(newImg);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newH5);
  newDiv.appendChild(newP);
  newDiv.appendChild(newSpan);

  document.getElementById("display").appendChild(newDiv)

}



