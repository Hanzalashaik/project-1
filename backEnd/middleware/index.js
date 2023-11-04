import { body, validationResult } from "express-validator";

const userLoginValidator = () => {
  return [
    body("name", "Name Must be >2 adn <15").isLength({ min: 2, max: 15 }),
    body("email", "Should be a valid email").isEmail(),
    body("phone", "Should be valid phone number").isMobilePhone(),
  ];
};

const errorMiddleware = (req, res, next) => {
    let errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }
    return next();
};

export {userLoginValidator,errorMiddleware}