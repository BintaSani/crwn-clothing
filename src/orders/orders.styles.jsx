import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  &:focus{
    background-color: pale-green;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuantityValue = styled.span`
    margin: 0 10px;
    padding-top: 4px;
`;

export const TextContainer = styled.span`
  width: 23%;
`;
export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  width: 60px;
  height: 4vh;
  border-radius: 8px;
  font-size: 0.7rem;
  &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
  }
`;