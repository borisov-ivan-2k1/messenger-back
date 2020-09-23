import { check } from "express-validator";
// валидация логина и пароля при регистрации
export default [
  check("email").isEmail(),
  check("fullname").isLength({ min: 3 }),
  check("password").isLength({ min: 3 })
];