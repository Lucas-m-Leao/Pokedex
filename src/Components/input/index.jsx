import { InputContainer } from "./styles";

const Input = ({ label, name, ...rest }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...rest} />
    </InputContainer>
  );
};
export default Input;
