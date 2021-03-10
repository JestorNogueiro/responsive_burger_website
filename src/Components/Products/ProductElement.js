import styled from "styled-components";

export const Container = styled.div`
padding-top:2rem; 
width: 100;
  min-height: 100vh;
  padding: 2rem calc(100vw -1300px);
  background: black;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Card = styled.div`
  margin: 0 1rem;
  line-height: 2;
  width: 300px;
`;

export const Image = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 4px 6px 4px yellow  ;

`;

export const Header = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  padding: 1rem;
  text-align: center;
  margin-bottom:1rem;
`;
export const Name = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;
export const Desc = styled.p`
  margin-bottom: 1rem;
`;
export const Price = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Btn = styled.button`
  font-size: 1rem;
  padding: 1rem;
  border: none;
  background: red;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover{
    background: yellow;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: black;
  }
`;
