function createLoginTracker(userInfo) {
  // 3. Initialize attempt counter
  let attemptCount = 0;

  // 4. Return nested arrow function
  return (passwordAttempt) => {
    // Increase count each time the function is called
    attemptCount++;

    // If attempts exceed 3 → lock the account
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check if the password is correct
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      // Failed attempts: 1–3
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}
// Example usage:
const user = { username: "student1", password: "pass123" };
const login = createLoginTracker(user);

console.log("Testing login tracker:");
console.log(login("pass123"));  // Login successful
console.log(login("wrong"));    // Attempt 2: Login failed
console.log(login("wrong"));    // Attempt 3: Login failed
console.log(login("wrong"));  // Account locked due to too many failed login attempts
