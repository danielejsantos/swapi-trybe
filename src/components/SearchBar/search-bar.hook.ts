import { Dispatch, SetStateAction, useState } from 'react';
import { usePlanets } from '../../context';

interface UseSearchBar {
  inputValues: {column: string, comparison: string, value: string}
  searchByName: (value: string) => void;
  setInputValues: Dispatch<SetStateAction<{ column: string; comparison: string; value: string; }>>;
  setOptionSearch: () => void;
  cleanFilters: () => void;
}

const useSearchBar = (): UseSearchBar => {
  const { search, setSearch } = usePlanets();
  const [inputValues, setInputValues] = useState({column: '', comparison: '', value: ''})

  function searchByName(value: string): void {
    setSearch({
      filters: {
        ...search.filters,
        filterByName: {
          name: value,
        },
      },
    });
  }

  function setOptionSearch() {
    if (!inputValues.column || !inputValues.comparison || !inputValues.value) {
      return alert('Oops! You need to fill all the fields')
    }
    setSearch({
      filters: {
        ...search.filters,
        filterByNumericValues: [
          {
            column: inputValues.column,
            comparison: inputValues.comparison,
            value: inputValues.value,
          },
        ]
      },
    });
  }

  function cleanFilters() {
    setSearch({
      filters: {
        ...search.filters,
        filterByNumericValues: [
          {
            column: "",
            comparison: "",
            value: "",
          },
        ]
      },
    });
    setInputValues({column: '', comparison: '', value: ''});
  }
  
  return {inputValues, searchByName, setInputValues, setOptionSearch, cleanFilters };
};

export default useSearchBar;