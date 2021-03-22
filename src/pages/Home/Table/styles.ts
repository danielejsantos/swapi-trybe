import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td, th {
    border: 1px solid #5D5D5D;
    text-align: left;
    font-size: 14px;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #5D5D5D;
  }
`;