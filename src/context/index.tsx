import React, {
  useState,
  useEffect,
  createContext,
  ReactElement,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

import type { Planets } from "../types";

type Children = {
  children: JSX.Element[] | JSX.Element;
};

interface FilterByNumericValues {
  column: string;
  comparison: string;
  value: string;
}

export interface PlanetsContextProps {
  planets: Planets[];
  setSearch: Dispatch<
    SetStateAction<{
      filters: {
        filterByName: { name: string };
        filterByNumericValues: {
          column: string;
          comparison: string;
          value: string;
        }[];
      };
    }>
  >;
  search: {
    filters: {
      filterByName: {
        name: string;
      };
      filterByNumericValues: FilterByNumericValues[];
    };
  };
}

export const PlanetsContext = createContext({} as PlanetsContextProps);

const PlanetsProvider = ({ children }: Children): ReactElement => {
  const [planets, setPlanets] = useState<Planets[] | []>([]);
  const [search, setSearch] = useState({
    filters: {
      filterByName: {
        name: "",
      },
      filterByNumericValues: [
        {
          column: "",
          comparison: "",
          value: "",
        },
      ],
    },
  });

  const getPlanets = async () => {
    const response = await fetch(
      `https://swapi-trybe.herokuapp.com/api/planets`
    );
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={{ planets, search, setSearch }}>
      {children}
    </PlanetsContext.Provider>
  );
};

export const usePlanets = (): PlanetsContextProps => useContext(PlanetsContext);

export default PlanetsProvider;
