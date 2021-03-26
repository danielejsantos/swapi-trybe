/* eslint-disable no-case-declarations */
import { usePlanets } from "../../../context";
import type { Planets } from '../../../types';

interface useTableReturn {
  planets: Planets[];
  formatFilms: (films: string[]) => string[];
  dateFormat: (date: string) => string;
  numberWithSeparator: (value: string) => string;
}

function useTable(): useTableReturn {
  const { planets, search } = usePlanets();

  function filterPlanets(): Planets[] {
    const filteredPlanetsByName = planets.filter((filteredPanet: Planets) => 
      filteredPanet?.name.toLowerCase().includes(search.filters.filterByName.name.toLowerCase())
    );

    if (!search.filters.filterByNumericValues[0].column || !search.filters.filterByNumericValues[0].comparison || !search.filters.filterByNumericValues[0].value) {
      return filteredPlanetsByName;
    }

    const filteredPlanetsByFilter = filteredPlanetsByName.filter((filteredPanet: Planets) => {
      const getPlanetByComparision = (value: number) => {
        switch (search.filters.filterByNumericValues[0].comparison) {
          case 'bigger than':
            return value > Number(search.filters.filterByNumericValues[0].value)
          case 'smaller than':
            return value < Number(search.filters.filterByNumericValues[0].value)
          default: 
            return value === Number(search.filters.filterByNumericValues[0].value)
        }
      }

      switch (search.filters.filterByNumericValues[0].column) {
        case 'population':
          return getPlanetByComparision(Number(filteredPanet?.population.toLowerCase()))
        case 'orbital_period':
          return getPlanetByComparision(Number(filteredPanet?.orbital_period.toLowerCase()))
        case 'diameter':
          return getPlanetByComparision(Number(filteredPanet?.diameter.toLowerCase()))
        case 'rotation_period':
          return getPlanetByComparision(Number(filteredPanet?.rotation_period.toLowerCase()))
        case 'surface_water':
          return getPlanetByComparision(Number(filteredPanet?.surface_water.toLowerCase()))
        default:
          return filteredPlanetsByName
      }
    });

    return filteredPlanetsByFilter;
  }

  function formatFilms(films: string[]): string[] {
    const newFilms: string[] = [];

    films.map((film: string) => {
      const filmNumber = Number(film?.match(/\d+/g));
      switch (filmNumber) {
        case 1:
          return newFilms.push('IV '); 
        case 2:
          return newFilms.push('V ');
        case 3:
          return newFilms.push('VI ');
        case 4:
          return newFilms.push('I ');
        case 5:
          return newFilms.push('II ');
        case 6:
          return newFilms.push('III');
        default:
          return newFilms.push('unkown film');
      }
    });

    return newFilms;
  }

  function dateFormat(date: string) {
    const format = date.split('-');
    const getDay = format[2].split('');
    return `${getDay[0] + getDay[1]}/${format[1]}/${format[0]}`;
  }

  function numberWithSeparator(value: string) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return { planets: filterPlanets(), formatFilms, dateFormat, numberWithSeparator };
}

export default useTable;