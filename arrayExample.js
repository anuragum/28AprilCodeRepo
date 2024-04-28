//Creating an array and copying its items to another array, and displaying the copied items.
// Create and initialize an array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; 

// Display the array items 
console.log(courses); 

// Create a new empty array 
let newArray = []; 

// forEach loop to push elements 
// into new array 
courses.forEach(course => { 
	newArray.push(course); 
}); 

// Display the new array of items 
console.log(newArray);