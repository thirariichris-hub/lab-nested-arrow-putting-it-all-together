function createLoginTracker(userInfo) {
    let attempts = 0;
    const maxAttempts = 3;

    return (passwordAttempt) => {
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        attempts++;

        if (attempts >= maxAttempts) {
            // Third failed attempt returns Attempt 3 first
            if (attempts === maxAttempts) {
                return `Attempt ${attempts}: Login failed`;
            }
            return "Account locked due to too many failed login attempts";
        }

        return `Attempt ${attempts}: Login failed`;
    };
}

module.exports = { createLoginTracker };
