import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Table from './Table';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.BodyWrapper>
        <SearchBar />
        <Table />
      </S.BodyWrapper>
    </S.Container>
  );
}

export default Home;