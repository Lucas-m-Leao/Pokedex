import { useState } from "react";
import { Conteiner, Mobile } from "./styles";

const Header = () => {
  const [activate, setActivate] = useState(false);
  return (
    <Conteiner>
      <Mobile></Mobile>
    </Conteiner>
  );
};

export default Header;
