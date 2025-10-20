import * as dotenv from "dotenv";
import randomString from "../utils/data/stringOperations";
dotenv.config();

export const ENV = {
  STANDARD_USER: process.env.STANDARD_USER || "",
  LOCKED_OUT_USER: process.env.LOCKED_OUT_USER || "",
  PROBLEM_USER: process.env.PROBLEM_USER || "",
  PERFORMANCE_GLITCH_USER: process.env.PERFORMANCE_GLITCH_USER || "",
  ERROR_USER: process.env.ERROR_USER || "",
  VISUAL_USER: process.env.VISUAL_USER || "",
  OTHER_USER: randomString(),
  STANDARD_PASSWORD: process.env.STANDARD_PASSWORD || "",
  PRODUCTS: process.env.PRODUCTS || "",
  LOGIN: process.env.LOGIN || "",
  CART: process.env.CART || "",
  OVERVIEW: process.env.OVERVIEW || "",
  INFORMATION: process.env.INFORMATION || "",
  COMPLETION: process.env.COMPLETION || "",
  ORDER_COMPLETE_IMG_SRC: process.env.ORDER_COMPLETE_IMG_SRC || "",

  // Inventory Expected Data
  INVENTORY: {
    BACKPACK: {
      name: process.env.NAME_BACKPACK,
      img: process.env.IMG_BACKPACK,
      desc: process.env.DESC_BACKPACK,
      price: process.env.PRICE_BACKPACK,
    },
    BIKE_LIGHT: {
      name: process.env.NAME_BIKE_LIGHT,
      img: process.env.IMG_BIKE_LIGHT,
      desc: process.env.DESC_BIKE_LIGHT,
      price: process.env.PRICE_BIKE_LIGHT,
    },
    JACKET: {
      name: process.env.NAME_JACKET,
      img: process.env.IMG_JACKET,
      desc: process.env.DESC_JACKET,
      price: process.env.PRICE_JACKET,
    },
    BOLT_SHIRT: {
      name: process.env.NAME_BOLT_SHIRT,
      img: process.env.IMG_BOLT_SHIRT,
      desc: process.env.DESC_BOLT_SHIRT,
      price: process.env.PRICE_BOLT_SHIRT,
    },
    ONESIE: {
      name: process.env.NAME_ONESIE,
      img: process.env.IMG_ONESIE,
      desc: process.env.DESC_ONESIE,
      price: process.env.PRICE_ONESIE,
    },
    RED_TATT: {
      name: process.env.NAME_RED_TATT,
      img: process.env.IMG_RED_TATT,
      desc: process.env.DESC_RED_TATT,
      price: process.env.PRICE_RED_TATT,
    },
  },
};
