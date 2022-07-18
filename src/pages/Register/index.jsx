import RegisterArea from "../../Components/RegisterArea";
import cadastro from "../../assets/image/Cadastro.png";
import { Conteiner, FormConteiner } from "./styles";
import Header from "../../Components/header";
const Register = () => {
  return (
    <>
      <Header />
      <Conteiner>
        <FormConteiner>
          <img src={cadastro} alt="" />
          <div></div>
          <RegisterArea />
        </FormConteiner>
      </Conteiner>
    </>
  );
};

export default Register;
