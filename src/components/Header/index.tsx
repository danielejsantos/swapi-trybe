import React from 'react';

import logoImg from '../../assets/logo.png';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src={logoImg} alt="Star Wars"/>
    </S.Container>
  );
}

export default Header;