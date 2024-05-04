const { check, validationResult } = require("express-validator");

//register rules
exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  check("lastname", "lastname is required").notEmpty(),
  check("phone", "phone must be numeric").isNumeric(), 
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
 // check("role", "role is required").notEmpty(),
 check("password", "password is required").isLength({ min: 6, max: 20 })
 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/)
 .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."),
];




//login rules
exports.loginRules = () => 
  [
    check("email", "email is required").notEmpty(),
    check("email", "check email again").isEmail(),
    check("password", "password is required").isLength({ min: 6, max: 20 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/)
    .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."),
];


exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors: errors.array().map((el) => ({
                msg: el.msg,
            })),
        });
    }
    next();
};