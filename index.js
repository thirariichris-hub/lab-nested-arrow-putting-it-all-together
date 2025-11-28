function createLoginTracker(userInfo) {
    let attempts = 0;          // private variable
    const maxAttempts = 3;     // allowed attempts

    // inner arrow function
    return (passwordAttempt) => {

        // already locked?
        if (attempts >= maxAttempts) {
            return "Account locked. Too many failed login attempts.";
        }

        // correct password?
        if (passwordAttempt === userInfo.password) {
            return "Login successful!";
        }

        // wrong password → increase attempts
        attempts++;

        // locked after too many wrong attempts
        if (attempts >= maxAttempts) {
            return "Account locked. Too many failed login attempts.";
        }

        // still has tries remaining
        return `Incorrect password. You have ${maxAttempts - attempts} attempt(s) remaining.`;
    };
}
// Example usage:
const user = { username: "user1", password: "securePass" };
const login = createLoginTracker(user);
console.log(login("wrongpass")); // Incorrect password. You have 2 attempt(s) remaining.
console.log(login("wrongPass")); // Incorrect password. You have 1 attempt(s) remaining.
console.log(login("wrongPass")); // Account locked. Too many failed login attempts.
console.log(login("securePass")); // Still locked. 
