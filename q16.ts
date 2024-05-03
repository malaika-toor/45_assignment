let guests: string[] = ["Allama Iqbal", "Quaid-e-Azam", "Kamran Tessori"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Sir Zia Khan");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Sir Asharib Ali");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});