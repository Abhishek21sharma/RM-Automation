import { ENV } from "@/config/env.config";
import { User } from "./types/user.type";
import { Checkout } from "./types/checkout.type";

export const VALID_USER: User = {
  VALID_USER: ENV.VALID_USER,
  VALID_PWD: ENV.VALID_PWD,
};

export const INVALID_USER: User = {
  VALID_USER: "WrongUser",
  VALID_PWD: "PWD",
};

export const PERSONAL_INFO: Checkout = {
  firstName: "Bob",
  lastName: "Smith",
  postCode: "SE1 7ND",
};
