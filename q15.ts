// Q14 Answer:
let guests: string[] = ["Kamran Tessori", "Allama Iqbal", "Quaid-e-Azam", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Ameen Alam";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});