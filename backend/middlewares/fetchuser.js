import { verify } from 'jsonwebtoken'
import config from '../config.js'

const JWT_SECRET = config.JWT_SECRET
let success = false;

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        success = false;
        res.status(401).json({success:success, error: "Please authenticate using a valid token." })
    }
    try {
        const data = verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        success = false;
        res.status(401).json({success:success, error: "Please authenticate using a valid token." })
    }

}

export default fetchuser;