// #4 Create three objects with four properties (one must be an image file path) using object literal notation


var spread1 ={ 
	img: "img/peanutbutter.jpg",
	name: "peanut butter",
	source: "peanuts", 
	rating: "9"}

var spread2 = {
	img: "img/almondbutter.jpg",
	name: "almond butter",
	source: "almonds",
	rating: "8"
}

var spread3= {
	img: "img/nutella.jpg", 
	name: "nutella",
	source: "hazelnuts",
	rating: "10"
	
}


console.log(spread1, spread2, spread3)

// 5. Create the same three objects, with the same four properties, using constructor notation.

function Spreads (image, name, source, rating) {
	this.img = image;
	this.name = name;
	this.source = source;
	this.rating = rating;
}

var conspread1 = new Spreads("img/peanutbutter.jpg", "peanut butter", "peanuts", "9" );
var conspread2 = new Spreads("img/almondbutter.jpg", "almond butter", "almonds", "8");
var conspread3 = new Spreads("img/nutella.jpg", "nutella", "hazelnuts", "10");

console.log(conspread1, conspread2, conspread3)