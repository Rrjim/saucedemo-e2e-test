import * as dotenv from 'dotenv';
import randomString from '../utils/data/stringOperations'
dotenv.config();

export const ENV = {
    STANDARD_USER: process.env.STANDARD_USER || '',
    LOCKED_OUT_USER: process.env.LOCKED_OUT_USER || '',
    PROBLEM_USER: process.env.PROBLEM_USER || '',
    PERFORMANCE_GLITCH_USER: process.env.PERFORMANCE_GLITCH_USER || '',
    ERROR_USER: process.env.ERROR_USER || '',
    VISUAL_USER: process.env.VISUAL_USER || '',
    OTHER_USER: randomString(),
    STANDARD_PASSWORD: process.env.STANDARD_PASSWORD || '',
    INVENTORY: process.env.INVENTORY || '',
    LOGIN: process.env.LOGIN || '',
    CART: process.env.CART || '',
    INFORMATION: process.env.INFORMATION || '',

};
