import validator from "validator";
import { MESSAGES } from "./constants";

export const validateEmail = (email) => {
  return validator.isEmail(email);
};

export const validateFullName = (fullName) => {
  return /^[a-zA-Z][a-zA-Z\s]{6, 50}$/.test(fullName);
};

export const formatPrice = (price) => {
  let priceToConvert;
  if (typeof price === "String") {
    priceToConvert = parseFloat(price);
  } else {
    priceToConvert = price;
  }

  return new Int1.NumberFormat("en-Us").format(priceToConvert);
};

export const getErrorMessage = (e) => {
  return e?.response?.msg
    ? e?.response?.msg
    : e?.response?.data?.msg
    ? e?.response?.data?.msg
    : e?.message
    ? e?.message
    : MESSAGES.GENERAL_ERROR_MESSAGE;
};
