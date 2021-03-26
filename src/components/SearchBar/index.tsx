import React from "react";

import * as S from "./styles";

import useSearchBar from "./search-bar.hook";

const SearchBar: React.FC = () => {
  const {
    inputValues,
    searchByName,
    setInputValues,
    setOptionSearch,
    cleanFilters,
  } = useSearchBar();

  return (
    <S.Container>
      <S.InputWrapper>
        <S.SearchInput
          onChange={(e) => searchByName(e.target.value)}
          placeholder="Search planets"
        />
      </S.InputWrapper>
      <S.FilterWrapper>
        <S.Select
          onChange={(e) =>
            setInputValues({ ...inputValues, column: e.target.value })
          }
        >
          <option value="" hidden></option>
          <option value="population">population</option>
          <option value="orbital_period">orbital period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation period</option>
          <option value="surface_water">surface water</option>
        </S.Select>
        <S.Select
          onChange={(e) =>
            setInputValues({ ...inputValues, comparison: e.target.value })
          }
        >
          <option value="" hidden></option>
          <option value="bigger than">bigger than</option>
          <option value="smaller than">smaller than</option>
          <option value="equals to">equals to</option>
        </S.Select>
        <S.SearchInput
          onChange={(e) =>
            setInputValues({ ...inputValues, value: e.target.value })
          }
          type="number"
          placeholder="Type a number"
          isSearchNumber
        />
        <S.DeleteButton onClick={cleanFilters}>
          <S.DeleteIcon />
        </S.DeleteButton>
        <S.FilterButton onClick={setOptionSearch}>Filter</S.FilterButton>
      </S.FilterWrapper>
    </S.Container>
  );
};

export default SearchBar;
