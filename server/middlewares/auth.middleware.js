import jwt from 'jsonwebtoken';

// Middleware to check for a token and attach user ID if valid
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    req.isLoggedIn = false; // Default state

    if (token) {
        try {
            // Verify token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            // If valid, attach the user's ID
            req.userId = decoded.id; 
            req.isLoggedIn = true;
        } catch (err) {
            // Token is expired or malformed, treat as logged out for data retrieval
            req.isLoggedIn = false;
        }
    }
    next();
};

export { verifyToken };
