import { check } from 'express-validator';
// валидация логина и пароля при авторизации
export default [check('email').isEmail(), check('password').isLength({ min: 3 })];