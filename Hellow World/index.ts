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
// let transportation:string[] = ['car', 'motorbike', 'cycle']
// transportation.forEach(elem => console.log("I would like to own a " + elem))

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
// Question 28
//================
// let age:number = 65
// if(age < 2 ){
//     console.log('The person is a baby');
// }else if (age >= 2 && age < 4){
//     console.log('The person is a toddler.');
// }else if (age >= 4 && age < 13){
//     console.log('The person is a kid');
// }else if (age >= 13 && age < 20){
//     console.log('The person is a teenager.');
// }else if(age >= 20 && age < 65){
//     console.log('The person is an adult.');
// }else{
//     console.log('The person is an elder');
// }

//================
// Question 29
//================
// let favorite_fruits:string[] = ['banana', 'mango', 'pineapple']
// if(favorite_fruits.includes('banana')){
//     console.log("You really like bananas!");
// }
// if(favorite_fruits.includes('mango')){
//     console.log("You really like mango!");
// }
// if(favorite_fruits.includes('pineapple')){
//     console.log("You really like pineapple!");
// }
// if(favorite_fruits.includes('apple')){
//     console.log("You really like apple!");
// }else{
//     console.log("You do not really like apple!");

// }
// if(favorite_fruits.includes('orange')){
//     console.log("You really like orange!");
// }else{
//     console.log('You do not really like orange!');
// }

//================
// Question 30
//================
// let usernames: string[] = ['jhon', 'eric', 'marsh', 'admin', 'ammar']
// usernames.forEach((user) => {
//     if(user === "admin"){
//         console.log('Hello admin, would you like to see a status report?');
//     }else{
//         console.log(`${user}, thank you for logging in again.`);

//     }
// })

//================
// Question 31
//================
// let age:number;
// if(age < 2 ){
//     console.log('The person is a baby');
// }else if (age >= 2 && age < 4){
//     console.log('The person is a toddler.');
// }else if (age >= 4 && age < 13){
//     console.log('The person is a kid');
// }else if (age >= 13 && age < 20){
//     console.log('The person is a teenager.');
// }else if(age >= 20 && age < 65){
//     console.log('The person is an adult.');
// }else if(age >= 65 && age > 65){
//     console.log('The person is an elder');
// }else{
//     console.log('We need to find some users!')
// }

//================
// Question 32
//================
// let current_users:string[] = ['jhon', 'honey', 'ammar', 'muhammad', 'mills']
// let new_users:string[] = ['jhon', 'honey', 'basil', 'muneeb', 'ahmed']
// const finding_users = (new_user:string):boolean =>{
//     const changeToLower = new_user.toLowerCase()
//     return current_users.some((user)=> user.toLowerCase() === changeToLower)
// }
// for(let user of new_users){
//     if(finding_users(user)){
//         console.log(`${user}this user is already exsist`)
//     }else{
//         console.log(`${user}this user is avaliable`)
//     }
// }

//================
// Question 33
//================
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.forEach((num) =>{
//     if(num === 1){
//         console.log(num + "st")
//     }else if(num === 2){
//         console.log(num + "nd")
//     }else if(num === 3){
//         console.log(num + "rd")
//     }else if(num >= 4){
//         console.log(num + "th")
//     }
// })

//================
// Question 34
//================
// let pizza:string[] = ['pepperoni', 'chicken', 'vegetable']
// for(let i = 0; i < pizza.length; i++){
//     console.log(pizza[i])
// }
// for(let i = 0; i < pizza.length; i++){
//     console.log(`I like ${pizza[i]} pizza.`)
// }
// console.log("I really love pizza!")

//================
// Question 35
//================
// let animals: string[] = ['dog', 'cat', 'parrot']
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
// }
// for (let i = 0; i < animals.length; i++) {
//     console.log(`A ${animals[i]} would make a great pet.`)
// }
// console.log("Any of these animals would make a great pet!")

//================
// Question 36
//================
// const make_shirt = (size:string):string => {
//     return `The size of T-shirt is ${size}`
// }
// console.log(make_shirt("large"))

//================
// Question 37
//================
// const make_shirt = (size: string = 'large', message: string = 'I love TypeScript'): string => {
//     let shirtMessage: string;
//     if (size === 'large' || size === 'medium') {
//         shirtMessage = message;
//     } else {
//         shirtMessage = `The size of T-shirt is ${size}`;
//     }
//     return shirtMessage;
// }
// console.log(make_shirt('medium'));
// console.log(make_shirt());   
// console.log(make_shirt('small', 'Hello, World!'));

//================
// Question 38
//================
// const describe_city = (city:string, country:string = 'pakistan'):string => {
//     return `${city} is in ${country}`
// }
// console.log(describe_city('Mirpurkhas'))
// console.log(describe_city('karachi'))
// console.log(describe_city('Hongkong'))

//================
// Question 39
//================
// const city_country = (city:string, country:string):string => {
//     return `${city}, ${country}`
// }
// console.log(city_country('karachi', 'Pakistan'))
// console.log(city_country('Mumbai', 'India'))
// console.log(city_country('Wuhan', 'China'))

//================
// Question 40
//================
// const make_album = (artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } => {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     }
//     if(tracks !== undefined){
//         album.tracks = tracks
//     }
//     return album
// }

// let album1 = make_album('Artist1', 'Album1')
// let album2 = make_album('Artist2', 'Album2', 120)
// let album3 = make_album('Artist3', 'Album3')

// console.log(album1)
// console.log(album2)
// console.log(album3)

//================
// Question 41
//================
// let magicians:string[] = ['ammar', 'basil', 'momin']
// const show_magician = (magicians:string[]) => {
//     magicians.forEach((elem) => console.log(elem))
// }
// show_magician(magicians)

//================
// Question 42
//================
// let magicians:string[] = ['ammar', 'basil', 'momin']
// const show_magician = (magicians:string[]) => {
//     magicians.forEach((elem) => console.log(elem))
// }
// const make_great = (magicians:string[]) => {
//     magicians.map((elem) => console.log(`this is great ${elem}`))
// }
// show_magician(magicians)
// make_great(magicians)

//================
// Question 43
//================
// let magicians:string[] = ['ammar', 'basil', 'momin']
// const show_magician = (magicians:string[]) => {
//     magicians.forEach((elem) => console.log(elem))
// }
// const make_great = (magicians:string[]):string[] => {
//    return magicians.map((elem) => `great ${elem}`)
// }
// const greatMagician = make_great([...magicians]) 
// show_magician(magicians)
// show_magician(greatMagician)

//================
// Question 44
//================
// const summary = (...items:string[]) => {
//     console.log('sandwich summary')
//     items.forEach(elem => console.log(`- ${elem}`))
//     console.log('enjoy sandwich')
// }
// summary("Ham", "Cheese", "Lettuce", "Tomato");
// summary("Turkey", "Swiss cheese", "Mustard");
// summary("Peanut butter", "Jelly");

//================
// Question 45
//================
// interface Car {
//     manufacturer: string,
//     model: string,
//     [key:string]:any
// }
// const make_car = (manufacturer: string, model: string, ...more_information: [string, any][]): Car => {
//     let car: Car = {
//         manufacturer: manufacturer,
//         model: model
//     }
//     more_information.forEach(([key, value]) => car[key] = value)
//     return car
// }
// let myCar = make_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2023], ['size', 'large']);
// console.log(myCar);