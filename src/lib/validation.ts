import { Rule } from "antd/lib/form";

export const generalValidationRules: Rule[] = [
  { required: true, message: "Field is required!" },
];
export const generalValidationRulesOp: Rule[] = [
  { required: false, message: "Field is required!" },
];

export const textInputValidationRules: Rule[] = [
  ...generalValidationRules,
  { whitespace: true },
];
export const textInputValidationRulesOp: Rule[] = [
  ...generalValidationRulesOp,
  { whitespace: true },
];
export const numberInputValidationRules: Rule[] = [
  ...generalValidationRules,
  { type: "number" },
];
export const numberInputValidationRulesOp: Rule[] = [
  ...generalValidationRulesOp,
  { type: "number" },
];

export const textInputValidationRulesOpt: Rule[] = [
  { whitespace: true },
  { required: false },
];

export const emailValidationRules: Rule[] = [
  {
    required: true,
    message: "Field is required",
  },
  {
    type: "email",
    message: "Invalid Email Address",
  },
];
export const emailValidationRulesOp: Rule[] = [
  {
    required: false,
    message: "Field is required",
  },
  {
    type: "email",
    message: "Invalid Email Address",
  },
];
