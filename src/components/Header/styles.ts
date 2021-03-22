import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImg});
`;

export const Logo = styled.img`
  width: 200px;
  padding: 30px 0;
`;