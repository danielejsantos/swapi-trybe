import React from 'react';

import * as S from './styles';

const Table: React.FC = () => {
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
        {/* <th>Url</th> */}
      </tr>
      <tr>
        <td>Tatooine</td>
        <td>23</td>
        <td>304</td>
        <td>10.465</td>
        <td>Arid</td>
        <td>1 standard</td>
        <td>Desert</td>
        <td>1</td>
        <td>200.000</td>
        <td>Episode IV, Episode VI, Episode I, Episode II and Episode III</td>
        <td>09/12/2014</td>
        <td>20/12/2014</td>
        {/* <td></td> */}
      </tr>
    </S.Table>
  );
}

export default Table;