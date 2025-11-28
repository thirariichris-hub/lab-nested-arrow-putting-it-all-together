function createLoginTracker(userInfo) {
    let attempts = 0;
    const maxAttempts = 3;

    return (passwordAttempt) => {
        if (attempts >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        attempts++;

        if (attempts >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        return `Attempt ${attempts}: Login failed`;
    };
}

module.exports = { createLoginTracker };
