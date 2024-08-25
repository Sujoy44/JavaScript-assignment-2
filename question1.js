const users = ["Mithun", "Prabir", "Alka", "Shivam", "Farman"];

function isUserPresent(username) {
    if (users.includes(username)) {
        console.log(`Yes, ${username} is a valid user.`);
    } else {
        console.log(`No, ${username} is not a valid user.`);
    }
}

// Example usage:
isUserPresent("Mithun"); // OUTPUT: Yes, Mithun is a valid user.
isUserPresent("Someone"); // OUTPUT: No, Someone is not a valid user.
