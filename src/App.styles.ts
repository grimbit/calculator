import styled, { css } from 'styled-components';
import NoiseImage from './img/noise.png';

export const FrameStyle = styled.div`
    background-color: #2C414C;
    background-image: url(${NoiseImage});
    
`;
export const AppPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    height: 100vh;
    flex-direction: column;
`;

export const Button = styled.div<{special?:boolean}>`
  display: flex;
  background-color: #006B86;
  color: #B9FFE7;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 5px;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  min-height: 2rem;
  min-width: 2rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
  &:hover {
    background-color: #00E3DA;
    transform: scale(1.1);
    text-shadow: 2px 2px 5px #1D7F94;
    box-shadow: 2px 2px 5px #363D4E;
  }
  &:active{
    background-color: #004759;
    transform: scale(0.95);
  }
  ${props => props.special && css`
  
  background-color: #54AFAF;

  &:hover {
     background-color: #40F09D;
     transform: scale(1.1);
     text-shadow: 2px 2px 5px #1D7F94;
     box-shadow: 2px 2px 5px #363D4E;
  }
  &:active{
    background-color: #004759;
    transform: scale(0.95);
  }
  `};
`;

export const GridWrapper = styled.div`
display: grid;
background-color: #171A22;
border: 0.2rem solid #171A22;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-gap: 0.2rem;
border-radius: 5px;
box-shadow: 2px 2px 8px #091C25;

`;

export const StrechWrapper = styled.div`
display: grid;
grid-column-end:span 2;
max-width: 183.6px;
`;

export const CalcForm = styled.div`
display: grid;
grid-column-end:span 4;
color: #B9FFE7;
font-family: 'Arial', sans-serif;
font-size: 1.5rem;
font-weight: lighter;
justify-items: end;
align-items: end;
border-radius: 5px;
`;

export const Uwudiv = styled.div`
user-select: none;
color: white;
font-size: 0.8rem;
font-family: 'Calibri', sans-serif;
font-weight: lighter;
align-self: center;
justify-self: center;
text-shadow: 2px 2px 8px #7AEAD7;
`;

export const SymbolView = styled.div`
position: absolute;
user-select: none;
color: #88FFBC;
font-size: 1.4rem;
font-family: 'Calibri', sans-serif;
font-weight: lighter;
align-self: start;
justify-self: start;
text-shadow: 0px 0px 2px #50FF7D;
`;
