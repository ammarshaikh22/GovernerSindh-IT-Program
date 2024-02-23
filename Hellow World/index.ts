//================
// Question 2
//================
// let person:string = "Eric"
// let message:string = `Hello ${person} would you like to learn some Python today?`
// console.log(message);

//================
// Question 3
//================
// let person: string = "jhon deo"
// console.log(person.toLowerCase());
// console.log(person.toUpperCase());
// console.log(person.charAt(0).toUpperCase() + person.slice(1).toLowerCase());

//================
// Question 4
//================
//console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");

//================
// Question 5
//================
// let famous_person:string = "Albert Einstein"
// let message:string = `${famous_person + " once said"} “A person who never made a mistake never tried anything new.”`
// console.log(message);

//================
// Question 6
//================
// let person1: string = "\t" + "jhon" + "\n";
// console.log(person1);
// let person2: string = "\t" + "jhon" + "\n";
// console.log(person2.trim());

////================
// Question 7,8
//================
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);

//================
// Question 9
//================
// let favNum:number = 6
// let message:string = `my favorite number is ${favNum}`
// console.log(message);

///================
// Question 10
//================
// Name = "Ammar"
// date = 19/2/2024
//message = "This program is about the space between name and striping the space from the name"
// let person1: string = "\t" + "jhon" + "\n";
// console.log(person1);
// let person2: string = "\t" + "jhon" + "\n";
// console.log(person2.trim());

///================
// Question 11
//================
// let names:string[] = ['jhon', 'eric', 'salman']
// names.forEach(name => console.log(name))

///================
// Question 12
//================
// let names:string[] = ['jhon', 'eric', 'salman']
// for(let i = 0; i < names.length; i++){
//     console.log(`hi how are you ${names[i]}`);
// }

///================
// Question 13
//================
// let transportation:string[] = ['car', 'moterbike', 'cycle']
// for(let i = 0; i < transportation.length; i++){
//     console.log(`I would like to own a ${transportation[i]}`);
// }

///================
// Question 14
//================
// let guest:string[] = ['jhon', 'eric', 'salman']
// for(let i = 0; i < guest.length; i++){
//     console.log(`hello ${guest[i]} i like to invite you in dinner`);
// }

///================
// Question 15
//================
// let guest:string[] = ['jhon', 'eric', 'salman']
// let unableToAttend:string = "salman"
// let removePerson:number = guest.indexOf(unableToAttend)
// let newGuest = guest.splice(removePerson, 1, "ammar")
// for(let i = 0; i < guest.length; i++){
//     console.log(`hello ${guest[i]} i like to invite you in dinner`);
// }

///================
// Question 16
//================
// let guest: string[] = ['John', 'Eric', 'Salman'];
// console.log("Good news! We found a bigger dinner table!");
// guest.unshift("Momin");
// guest.splice(2, 0, "Ammar");
// guest.push("Rahman");
// for (let i = 0; i < guest.length; i++) {
//     console.log(`Hello ${guest[i]}, I would like to invite you to the biggest dinner.`);
// }

///================
// Question 17
//================
// let guests: string[] = ['John', 'Eric', 'Salman', 'Ahmad'];
// console.log("I can invite only two people for dinner.");
// while (guests.length > 2) {
//     let removePerson: string | undefined = guests.pop();
//     if (removePerson) {
//         let message: string = `${removePerson}, I'm sorry, but I can't invite you to dinner.`;
//         console.log(message);
//     }
// }
// // Print a message to each of the two people still on your list, letting them know they’re still invited.
// for (let i = 0; i < guests.length; i++) {
//     console.log(`Hello ${guests[i]}, you're still invited to the dinner.`);
// }
// // Remove the last two names from your list, so you have an empty list.
// while (guests.length > 0) {
//     guests.pop();
// }
// console.log(guests); // Should output: []

////================
// Question 18
//================
// let places:string[] = ['Pakistan', 'India', 'Bangladash', 'SoutAfirica']
// Print your array in its original order.
// console.log(places);
// Print your array in alphabetical order without modifying the actual list.
// let inAlphabetical:string[] = [...places]
// console.log(inAlphabetical.sort());
// console.log(places);
// Print your array in reverse alphabetical order without changing the order of the original list.
// console.log(inAlphabetical.reverse());
// console.log(places);
// Reverse the order of your list. Print the array to show that its order has changed.
// console.log(places.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log(places.reverse());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log(places.sort());

///================
// Question 19
//================
// let guests: string[] = ['John', 'Eric', 'Salman'];
// console.log("Number of people invited to dinner: " + guests.length);

///================
// Question 20
//================
// let store:string[] = ['Mirpurkhas', 'Karachi', 'Hedrabad']
// store.forEach(elem => console.log(elem))

///================
// Question 21
//================
// let typescriptObject: {
//     name: string;
//     rollNumber: number;
//     cast?: string;
//     education?: string
// } = {
//     name: 'ammar',
//     rollNumber: 305704
// }
// console.log(typescriptObject);

//================
// Question 22
//================
// let fruits: string[] = ['apple', 'banana', 'orange'];
// console.log(fruits[3]);

//================
// Question 23
//================
// let car: string = "honda"
// // 5 true conditions
// console.log("Is car equal to 'honda'? I predict True.");
// console.log(car == "honda");
// console.log("Is car strictly equal to 'honda'? I predict True.");
// console.log(car === "honda");
// console.log("Does car include the string 'honda'? I predict True.");
// console.log(car.includes("honda"));
// console.log("Is car not equal to 'toyota'? I predict True.");
// console.log(car !== "toyota");
// console.log("Does car include the string 'hon'? I predict True.");
// console.log(car.includes("hon"));
// // 5 false conditions
// console.log("Is car equal to 'toyota'? I predict False.");
// console.log(car == "toyota");
// console.log("Is car strictly equal to 'toyota'? I predict False.");
// console.log(car === "toyota");
// console.log("Does car include the string 'toyota'? I predict False.");
// console.log(car.includes("toyota"));
// console.log("Is car not equal to 'honda'? I predict False.");
// console.log(car !== "honda");
// console.log("Does car include the string 'toyo'? I predict False.");
// console.log(car.includes("toyo"));

//================
// Question 24
//================
//Tests for equality and inequality with strings
// let place:string = "karachi"
// console.log(place === "karachi");
// console.log(place === "mirpurkhas");
// // Tests using the lower case function
// console.log(place.toLowerCase() === "karachi");
// console.log(place.toLowerCase() === "kARACHI");
// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num:number = 10
// console.log(num >= 10);
// console.log(num >= 11);
// console.log(num <= 10);
// console.log(num <= 9);
// // Tests using "and" and "or" operators
// console.log(num >= 10 && num <= 10);
// console.log(num >= 11 && num <= 10);
// console.log(num >= 10 || num <= 10);
// console.log(num >= 11 || num <= 1);

//================
// Question 25
//================
// let alien_color:string = ('green')
// if(alien_color === 'green'){
//     console.log('the player just earned 5 points.');
// }
// if(alien_color === 'blue'){
//     console.log('');
// }

//================
// Question 26
//================
// let alien_color:string = ('blue')
// if(alien_color === 'green'){
//     console.log('The player just earned 5 points for shooting the alien');
// }else{
//     console.log('The player just earned 10 points');
// }

//================
// Question 27
//================
// let alien_color:string = ('green')
// if(alien_color === 'green'){
//     console.log('The player earned 5 points');
// }else if(alien_color === 'yellow'){
//     console.log('The player earned 10 points');
// }else if(alien_color === 'red'){
//     console.log('The player earned 15 points');
// }
// let alien_color:string = ('yellow')
// if(alien_color === 'green'){
//     console.log('The player earned 5 points');
// }else if(alien_color === 'yellow'){
//     console.log('The player earned 10 points');
// }else if(alien_color === 'red'){
//     console.log('The player earned 15 points');
// }
// let alien_color:string = ('red')
// if(alien_color === 'green'){
//     console.log('The player earned 5 points');
// }else if(alien_color === 'yellow'){
//     console.log('The player earned 10 points');
// }else if(alien_color === 'red'){
//     console.log('The player earned 15 points');
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
