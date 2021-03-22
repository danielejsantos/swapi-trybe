import React from 'react';

import * as S from './styles';

const SearchBar: React.FC = () => {
  return (
    <S.Container>
      <S.InputWrapper>
        <S.SearchInput placeholder="Search planets" />
      </S.InputWrapper>
      <S.FilterWrapper>
        <S.Select>
          <option value="" hidden></option>
          <option value="1">Population</option>
          <option value="2">Orbital Period</option>
          <option value="3">Diameter</option>
          <option value="4">Rotation Period</option>
          <option value="5">Surface Water</option>
        </S.Select>
        <S.Select>
          <option value="" hidden></option>
          <option value="1">bigger than</option>
          <option value="2">smaller than</option>
          <option value="3">equals to</option>
        </S.Select>
        <S.SearchInput placeholder="Type a number" />
        <S.DeleteButton>
          <S.DeleteIcon />
        </S.DeleteButton>
        <S.FilterButton>Filter</S.FilterButton>
      </S.FilterWrapper>
    </S.Container>
  )
}

export default SearchBar;