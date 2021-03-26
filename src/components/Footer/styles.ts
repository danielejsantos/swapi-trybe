import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #000;

  @media (min-height: 835px) {
    position: fixed;
    bottom: 0;
  }

  > span {
    color: #CCCCCC;
    font-size: 15px;
    position: absolute;
  }
  
  > img {
    width: 150px;
    opacity: 0.3;
  }
`; 