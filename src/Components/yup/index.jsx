import * as yup from "yup";

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const magicRegex = /\W|_/;

const RegisterShema = yup.object().shape({
  name: yup.string().required("Campo obrigatório."),
  birthDate: yup.string().required("Campo obrigatório."),
  email: yup.string().required("Campo obrigatório.").email("Email invalido"),
  confirmEmail: yup
    .string()
    .required("Campo obrigatório.")
    .oneOf([yup.ref("email"), "Email não coincidem."]),
  passoword: yup
    .string()
    .required("Campo obrigatório.")
    .min(6, "Mínimo 6 caracteres.")
    .matches(upperCaseRegex, "No mínimo uma letra maiúsculo.")
    .matches(lowerCaseRegex, "No mínimo uma letra minúsculo.")
    .matches(numericRegex, "No mínimo um numero.")
    .matches(magicRegex, "No mínimo um caractere especial(!@#$)."),
  confirmPassoword: yup
    .string()
    .required("Campo obrigatório.")
    .oneOf([yup.ref("passoword"), "Senha não coincidem."]),
});
const LoginShema = () => {};
export { RegisterShema, LoginShema };
