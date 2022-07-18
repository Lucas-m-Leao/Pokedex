import { useForm } from "react-hook-form";
import Input from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterShema } from "../yup";
import { Conteiner } from "./styles";

const RegisterArea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterShema) });
  const onSubmitFunction = (data) => {};
  return (
    <Conteiner action="" onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
        type="text"
        name="name"
        label={"Nome"}
        placeholder=" Digite seu nome."
        register={register}
        errors={errors.name}
      />
      <Input
        type="date"
        name="birthDate"
        label={"Data de Nascimento"}
        register={register}
        errors={errors.birthDate}
      />
      <Input
        type="text"
        name="contact"
        label={"Contato"}
        placeholder="Digite o seu contato."
        register={register}
        errors={errors.contact}
      />
      <Input
        type="text"
        name="email"
        label={"Email"}
        placeholder="Digite seu Email."
        register={register}
        errors={errors.email}
      />
      <Input
        type="text"
        name="confirmEmail"
        label={"Confirmar Email."}
        placeholder="Confirme seu Email."
        register={register}
        errors={errors.confirmEmail}
      />
      <Input
        type="passoword"
        name="passoword"
        label={"Senha"}
        placeholder="Digite sua senha."
        register={register}
        errors={errors.passoword}
      />
      <Input
        type="passoword"
        name="confirmPassoword"
        label={"Confirmar senha."}
        placeholder="Confirme sua senha."
        register={register}
        errors={errors.confirmPassoword}
      />
      <button>Cadastrar</button>
    </Conteiner>
  );
};

export default RegisterArea;
