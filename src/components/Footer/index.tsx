import React from "react";

import * as S from "./styles";
import useFooter from "./footer.hook";

import footerImg from "../../assets/vader-footer.png";

const Footer: React.FC = () => {
  const { getCurrentYear } = useFooter();

  return (
    <S.Container>
      <img src={footerImg} alt="Darth Vader" />
      <span>{getCurrentYear()} - All Rights Reserved</span>
    </S.Container>
  );
};

export default Footer;
