import Input from "../input";

const RegisterArea = () => {
  return (
    <section>
      <h1>Cadastro</h1>
      <form action="">
        <Input
          type="text"
          name=""
          label={"Nome"}
          placeholder=" Digite seu nome."
        />
        <Input type="date" name="" label={"Data de Nascimento"} />
        <Input
          type="text"
          name=""
          label={"Contato"}
          placeholder="Digite o seu contato."
        />
        <Input
          type="text"
          name=""
          label={"Email"}
          placeholder="Digite seu Email."
        />
        <Input
          type="text"
          name=""
          label={"Confirmar Email."}
          placeholder="Confirme seu Email."
        />
        <Input
          type="text"
          name=""
          label={"Senha"}
          placeholder="Digite sua senha."
        />
        <Input
          type="text"
          name=""
          label={"Confirmar senha."}
          placeholder="Confirme sua senha."
        />
      </form>
    </section>
  );
};

export default RegisterArea;
