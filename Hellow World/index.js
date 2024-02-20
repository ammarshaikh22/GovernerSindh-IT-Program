//================
//Question : 2
//================
// let message:string = "Hello Eric, would you like to learn some Python today?"
// console.log(message)
//================
//Question : 3
//================
var firstName = "jhon deo";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase());
//================
//Question : 4
//================
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein ";
// console.log(`${author + "said"}: ${quote}`);
//================
//Question : 5
//================
// let famous_Person:string = "Albert Einstein"
// let Quote:string = "A person who never made a mistake never tried anything new."
// let Message:string = `${famous_Person + " said"}: ${Quote}`
// console.log(Message)
//================
//Question : 6
//================
// let personName: string = "\t\n   John Doe   \t\n";
// console.log("Original Name:");
// console.log("'" + personName + "'");
// console.log("Stripped Name:");
// console.log("'" + personName.trim() + "'");
//================
//Question : 7 , 8
//================
// console.log(5 + 3)
// console.log(10 - 2)
// console.log(2 * 4)
// console.log(16 / 2)
//================
//Question : 9
//================
// let favorite_Num:number = 6
// let message = favorite_Num
// console.log(message)
//================
//Question : 10
//================
// Author: ChatGPT
// Date: February 17, 2024
// Description: This program stores a person's name with whitespace characters at the beginning and end, then prints the name with and without whitespace.
// let personName: string = "\t\n   John Doe   \t\n";
// console.log("Original Name:");
// console.log("'" + personName + "'");
// console.log("Stripped Name:");
// console.log("'" + personName.trim() + "'");
//================
//Question : 11
//================
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// //Printing each person's name by accessing each element in the list one at a time
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//================
//Question : 12
//================
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// for (let i = 0; i < names.length; i++) {
//     console.log("How are you " + names[i]);
// }
//================
//Question : 13
//================
// let favoriteTransportation: string[] = ["motorcycle", "car", "bicycle", "scooter"];
// // Printing statements about favorite modes of transportation
// favoriteTransportation.forEach((transport) => {
//     console.log(`I would like to own a ${transport}.`);
// });
//================
//Question : 14
//================
// let Guest:string[] = [
//     "Alice", "Bob", "Charlie", "David", "Emily"
// ]
// Guest.forEach((invite) => console.log(`Dear ${invite}, you are invited to dinner! Please join us for an evening of stimulating conversation.`))
//================
//Question : 15
//================
// let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// let unableToAttend: string = "Alice"; // Assuming Ada Lovelace can't make it
// // Removing the guest who can't attend and adding a new guest
// let indexToRemove: number = guestList.indexOf(unableToAttend);
// if (indexToRemove !== -1) {
//     guestList.splice(indexToRemove, 1 , "Nikola Tesla");
// }
// // Loop through the updated guest list and print a message inviting each person to dinner
// guestList.forEach((invite)=> console.log(`Dear ${invite}, you are invited to dinner! Please join us for an evening of stimulating conversation.`))
//================
//Question : 16
//================
// let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// .forEach((ilet new_Guest = guestList.push("Jake","Jhon")
// let unableToAttend: string = "Alice"; // Assuming Ada Lovelace can't make it
// // Removing the guest who can't attend and adding a new guest
// let indexToRemove: number = guestList.indexOf(unableToAttend);
// if (indexToRemove !== -1) {
//     guestList.splice(indexToRemove, 1 , "Nikola Tesla");
// }
//console.log("We found a biggest Dinner table")
// // Loop through the updated guest list and print a message inviting each person to dinner
// guestListnvite)=> console.log(`Dear ${invite}, you are invited to a biggest dinner! Please join us for an evening of stimulating conversation. Thanks`))
//================
//Question : 17
//================
// let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Nikola Tesla"];
// // Informing that only two people can be invited for dinner
// console.log("Sorry, we can only invite two people for dinner.");
// // Removing guests from the list one at a time until only two names remain
// while (guestList.length > 2) {
//     let removedGuest = guestList.pop(); // Removing the last guest
//     console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
// }
// // Printing invitations for the two remaining guests
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are still invited to dinner!`);
// }
// // Removing the last two names from the list
// guestList.pop();
// guestList.pop();
// // Printing the empty list to confirm
// console.log("Updated guest list:", guestList);
//================
//Question : 18
//================
// let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Machu Picchu", "Santorini"];
// // Print the array in its original order
// console.log("Original Order:");
// console.log(placesToVisit);
// // Print the array in alphabetical order without modifying the actual list
// console.log("\nAlphabetical Order:");
// console.log([...placesToVisit].sort());
// // Show that the array is still in its original order by printing it
// console.log("\nOriginal Order (Still):");
// console.log(placesToVisit);
// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("\nReverse Alphabetical Order:");
// console.log([...placesToVisit].sort().reverse());
// // Show that the array is still in its original order by printing it again
// console.log("\nOriginal Order (Still):");
// console.log(placesToVisit);
// // Reverse the order of the list and print the array to show that its order has changed
// console.log("\nReversed Order:");
// console.log(placesToVisit.reverse());
// // Reverse the order of the list again and print the list to show it’s back to its original order
// console.log("\nOriginal Order Again:");
// console.log(placesToVisit.reverse());
// // Sort the array so it’s stored in alphabetical order and print the array to show that its order has been changed
// console.log("\nSorted in Alphabetical Order:");
// console.log(placesToVisit.sort());
// // Sort to change your array so it’s stored in reverse alphabetical order and print the list to show that its order has changed
// console.log("\nSorted in Reverse Alphabetical Order:");
// console.log(placesToVisit.sort().reverse());
//================
//Question : 19
//================
// let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// // Printing the number of people invited to dinner
// console.log(`You are inviting ${guestList.length} people to dinner.`);
//================
//Question : 20
//================
// let fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
// console.log("List of Fruits:", fruits);
//================
//Question : 21
//================
// let person: { [key: string]: { name: string, lastName: string, Age: number } } = {
//    About:{name: "ammar", lastName: "shaikh", Age: 17}
// };
// console.log("Information about Cars:", person);
//================
//Question : 22
//================
// let myArray: number[] = [1, 2, 3, 4, 5];
// try {
//     // Change the index here to produce an index error
//     console.log(myArray[-5]);
// } catch (error) {
//     if (error instanceof RangeError || error instanceof TypeError) {
//         console.error("Index Error:", error.message);
//         // Correct the error by accessing a valid index instead
//         console.log("Accessing the last element instead:", myArray[myArray.length - 1]);
//     } else {
//         throw error; // Re-throw any other unexpected errors
//     }
// }
//================
//Question : 23
//================
// let car = 'subaru';
// // Tests evaluating to True
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');
// console.log("Is car !== 'toyota'? I predict True.");
// console.log(car !== 'toyota');
// console.log("Is car.includes('su')? I predict True.");
// console.log(car.includes('su'));
// // Tests evaluating to False
// console.log("Is car == 'toyota'? I predict False.");
// console.log(car == 'toyota');
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru');
// console.log("Is car === 'toyota'? I predict False.");
// console.log(car === 'toyota');
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');
// console.log("Is car.includes('to')? I predict False.");
// console.log(car.includes('to'));
//================
//Question : 24
//================
// let num:number = 10
// let first:string = "PAKISTAN"
// //Tests for equality and inequality with strings
// console.log(num === 3)
// console.log(num !== 10)
// //Tests using the lower case function
// console.log(first.toLowerCase() === "pakistan")
// console.log(first.toLowerCase() !== "pakistan")
// //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let number = 10;
// // Equality and inequality tests
// console.log("Is number == 10? I predict True.");
// console.log(number == 10);
// console.log("Is number != 5? I predict True.");
// console.log(number != 5);
// // Greater than and less than tests
// console.log("Is number > 5? I predict True.");
// console.log(number > 5);
// console.log("Is number < 15? I predict True.");
// console.log(number < 15);
// // Greater than or equal to and less than or equal to tests
// console.log("Is number >= 10? I predict True.");
// console.log(number >= 10);
// console.log("Is number <= 10? I predict True.");
// console.log(number <= 10);
// //Tests using "and" and "or" operators
// let x = 5;
// let y = 10;
// console.log("Is x < 10 and y > 5? I predict True.");
// console.log(x < 10 && y > 5);
// console.log("Is x > 10 or y < 5? I predict False.");
// console.log(x > 10 || y < 5);
// //Test whether an item is in a array
// let colors = ['red', 'green', 'blue'];
// console.log("Is 'green' in colors? I predict True.");
// console.log(colors.includes('green'));
// //Test whether an item is not in a array
// console.log("Is 'yellow' not in colors? I predict True.");
// console.log(!colors.includes('yellow'));
//================
//Question : 25
//================
//Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.
// let aline_colour: string[] = ['green', 'yellow', 'red']
// if (aline_colour.includes("blue")) {
//     console.log("The player just earned 5 points.")
// }else{
//     console.error("error")
// }
//================
//Question : 26
//================
// let aline_colour: string[] = ['green', 'yellow', 'red']
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// if(aline_colour.includes("green")){
//     console.log('The player just earned 5 points for shooting the alien.')
// }
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// if(!aline_colour.includes("green")){
//     console.log('The player just earned 10 points.')
// }
// Write one version of this program that runs the if block and another that runs the else block.
// if(aline_colour.includes('green')){
//     console.log('The player just earned 5 points for shooting the alien')
// }else if(!aline_colour.includes('green')){
//     console.log('The player just earned 10 points.')
// }
//================
//Question : 27
//================
// const alienColor: string = "green";
// if (alienColor === "green") {
//     console.log("Congratulations! You earned 5 points.");
// } else if (alienColor === "yellow") {
//     console.log("Congratulations! You earned 10 points.");
// } else if (alienColor === "red") {
//     console.log("Congratulations! You earned 15 points.");
// }
// const alienColor: string = "yellow";
// if (alienColor === "green") {
//     console.log("Congratulations! You earned 5 points.");
// } else if (alienColor === "yellow") {
//     console.log("Congratulations! You earned 10 points.");
// } else if (alienColor === "red") {
//     console.log("Congratulations! You earned 15 points.");
// }
// const alienColor: string = "red";
// if (alienColor === "green") {
//     console.log("Congratulations! You earned 5 points.");
// } else if (alienColor === "yellow") {
//     console.log("Congratulations! You earned 10 points.");
// } else if (alienColor === "red") {
//     console.log("Congratulations! You earned 15 points.");
// }
//================
//Question : 28
//================
//If the person is less than 2 years old, print a message that the person is a baby.
// let age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
//================
//Question : 29
//================
// Define an array of favorite fruits
// const favoriteFruits: string[] = ["apple", "banana", "mango"];
// // Check for specific fruits in the array
// if (favoriteFruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favoriteFruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favoriteFruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }
// if (favoriteFruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// if (favoriteFruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }
//================
//Question : 30
//================
// Array of usernames
// const usernames: string[] = ["john", "alice", "admin", "smith", "emma"];
// // Loop through the array and print greetings
// for (const username of usernames) {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
//================
//Question : 31
//================
// let age: number;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else if (age >= 65 && age > 65) {
//     console.log("The person is an elder.");
// } else {
//     console.log('We need to find some users!')
// }
//================
//Question : 32
//================
// List of current users
// const currentUsers: string[] = ["john", "alice", "bob", "emma", "smith"];
// // List of new users
// const newUsers: string[] = ["emily", "John", "ALICE", "charlie", "bob"];
// const isUsernameTaken = (username:string):boolean => { 
//     const changeLowercase = username.toLowerCase()
//     return currentUsers.some((user)=> user.toLowerCase() === changeLowercase)
// }
// for(const newUser of newUsers){
//     if(isUsernameTaken(newUser)){
//         console.log(`Sorry, the username '${newUser}' is already taken. Please enter`)
//     }else{
//         console.log(`Congratulations, the username '${newUser}' is available.`);
//     }
// }
//================
//Question : 33
//================
// Store numbers 1 through 9 in an array
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (const number of numbers) {
//     // Use an if-else chain to determine the proper ordinal ending
//     let ordinalEnding: string;
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     console.log(`${number}${ordinalEnding}`);
// }
//================
//Question : 34
//================
// Array of favorite pizza names
// const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
// // Print each pizza name using a for loop
// for (const pizza of favoritePizzas) {
//     console.log(pizza);
// }
// console.log("\n");
// // Print a sentence for each pizza
// for (const pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// console.log("\n");
// // Additional statement expressing love for pizza
// console.log("I really love pizza!");
//================
//Question : 35
//================
// let animals:string[] = ['cat', 'cow', 'dog']
// for(const animal of animals){
//     console.log(animal)
// }
// console.log('\n')
// for(const animal of animals){
//     console.log(`${animal.toUpperCase()} is a great pet animal`)
// }
// console.log('\n')
//================
//Question : 36
//================
// const makeTshirt = (size: string):any => {
//     return `The shirt size is ${size}`
// }
// console.log(makeTshirt("large"))
//================
//Question : 37
//================
// Define the make_shirt function with default parameters
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt size is ${size} and it says "${message}".`);
// }
// make_shirt();
// make_shirt("Medium");
// make_shirt("Small", "Hello, World!");
//================
//Question : 38
//================
//  const describe_city = (city:string , country:string = "pakistan"): void =>{
//    console.log(`${city} is in ${country}`)
//  }
// describe_city("karachi")
// describe_city("Mirpurkhas")
// describe_city("Multan")
//================
//Question : 39
//================
// const city_country = (city: string, country: string):void => {
//     console.log(`${city},${country}`)
// }
// city_country("karachi", "pakistan")
// city_country("Lahore", "pakistan")
// city_country("Mirpurkhas", "pakistan")
//================
//Question : 40
//================
// Define the make_album function
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     const album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Create three dictionaries representing different albums
// const album1 = make_album("Artist 1", "Album 1");
// const album2 = make_album("Artist 2", "Album 2", 12); // With number of tracks
// const album3 = make_album("Artist 3", "Album 3");
// // Print each return value to show that objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);
//================
//Question : 41
//================
// let magicians: string[] = [
//     "Harry Houdini",
//     "David Copperfield",
//     "Penn Jillette",
//     "Teller"
// ];
//const show_magicians = (magicians:string[]):void => {
//     magicians.forEach(magician => {
//        console.log(magician)
//     })
// } 
// show_magicians(magicians)
//================
//Question : 42
//================
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// let magicians: string[] = [
//     "Harry Houdini",
//     "David Copperfield",
//     "Penn Jillette",
//     "Teller"
// ];
// magicians = make_great(magicians);
// show_magicians(magicians);
//================
//Question : 43
//================
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// let originalMagicians: string[] = [
//     "Harry Houdini",
//     "David Copperfield",
//     "Penn Jillette",
//     "Teller"
// ];
// let greatMagicians: string[] = make_great([...originalMagicians]); // Create a copy of the original array
// console.log("Original Magicians:");
// show_magicians(originalMagicians);
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);
//================
//Question : 44
//================
// function makeSandwich(...items: string[]): void {
//     console.log("Making a sandwich with the following items:");
//     items.forEach(item => console.log(`- ${item}`));
//     console.log("Enjoy your sandwich!\n");
// }
// makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
// makeSandwich("Turkey", "Swiss cheese", "Mustard");
// makeSandwich("Peanut butter", "Jelly");
//================
//Question : 45
//================
// interface Car {
//     manufacturer: string;
//     modelName: string;
//     [key: string]: any; // Allow any additional properties
// }
// function createCar(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]): Car {
//     const car: Car = {
//         manufacturer,
//         modelName
//     };
//     // Add additional information
//     additionalInfo.forEach(([key, value]) => {
//         car[key] = value;
//     });
//     return car;
// }
// const myCar = createCar("Toyota", "Camry", "color", "red", "year", 2022);
// console.log(myCar);
