import styled from 'styled-components';

import { TiDeleteOutline } from 'react-icons/ti';

interface SearchInputProps {
  isSearchNumber?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input<SearchInputProps>`
  width: ${({isSearchNumber}) => isSearchNumber ? '135px' : '300px'};
  padding: 8px;
  border: 1px solid #3B3B3B;
  background-color: #3B3B3B;
  font-size: 15px;
  border-radius: 4px;

  :focus {
    outline: none;
    background-color: transparent;
    border: 1px solid #3B3B3B;
    transition: 0.4s;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Select = styled.select`
  width: 135px;
  height: 35px;
  background: #3B3B3B;
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 4px;

  :nth-child(2) {
    margin: 0 10px;
  }

  option {
    color: white;
    background: transparent;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FilterButton = styled.button`
  height: 35px;
  margin-left: 10px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: transparent;
  padding: 4px 6px;
  border-radius: 4px;
  outline-color: #fff;

  :hover {
    background-color: white;
    color: #181818;
    transition: 0.4s;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background: none;
  margin-left: 5px;
  outline: 0;
`;

export const DeleteIcon = styled(TiDeleteOutline)`
  fill: #8F8F8F;
  height: 30px;
  width: 30px;
`;