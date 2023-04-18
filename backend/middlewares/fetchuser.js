import { verify } from 'jsonwebtoken';
const JWT_SECRET = 'PUT_A_SECRET_CODE_HERE';

let success = false;
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        success = false;
        res.status(401).send({success:success, error: "Please authenticate using a valid token" })
    }
    try {
        const data = verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        success = false;
        res.status(401).send({success:success, error: "Please authenticate using a valid token" })
    }

}

export default fetchuser;