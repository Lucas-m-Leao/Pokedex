import { InputContainer } from "./styles";

const Input = ({ label, name, register, errors, ...rest }) => {
  console.log(errors);
  return (
    <InputContainer>
      <label htmlFor="name">{label}</label>
      <input {...rest} {...register(name)} />
      {errors && <span>{errors.message}</span>}
    </InputContainer>
  );
};
export default Input;
