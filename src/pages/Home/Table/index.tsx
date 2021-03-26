import React from "react";

import * as S from "./styles";
import useTable from "./table.hook";

const Table: React.FC = () => {
  const { planets, formatFilms, dateFormat, numberWithSeparator } = useTable();

  return (
    <S.Table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
      </tr>
      {planets.map((planet: any) => {
        if (planet.lenght === 0) return <div key={planet.name} />;

        return (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{numberWithSeparator(planet.orbital_period)}</td>
            <td>{numberWithSeparator(planet.diameter)}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{numberWithSeparator(planet.population)}</td>
            <td>{formatFilms(planet.films)}</td>
            <td>{dateFormat(planet.created)}</td>
            <td>{dateFormat(planet.edited)}</td>
          </tr>
        );
      })}
    </S.Table>
  );
};

export default Table;
