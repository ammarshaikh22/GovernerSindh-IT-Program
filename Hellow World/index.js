//================
//Question : 2
//================
// let message:string = "Hello Eric, would you like to learn some Python today?"
// console.log(message)
//================
//Question : 3
//================
// let firstName:string = "jhon deo";
// console.log("ToUpperCase " + firstName.toUpperCase())
// console.log("ToLowerCase " + firstName.toLowerCase())
// console.log("ToTitleCase " + firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase())
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
var aline_colour = ['green', 'yellow', 'red'];
if (aline_colour.includes("blue")) {
    console.log("The player just earned 5 points.");
}
else {
    console.error("error");
}
