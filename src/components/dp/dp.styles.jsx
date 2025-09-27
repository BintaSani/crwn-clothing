import styled from "styled-components";
// Just some styles
export const Container = styled.div`
  flexdirection: "column";
  justifycontent: "center";
  alignitems: "center";
  paddingtop: 50px;
`;
export const Preview = styled.div`
  margintop: 50px;
  display: "flex";
  flexdirection: "column";
`;
export const Image = styled.img`
  width: 70%;
  height: 4vh;
  object-fit: contain;
  border-radius: 50px;
`;
export const Delete = styled.button`
  cursor: "pointer";
  padding: 15px;
  background: "red";
  color: "white";
  border: "none";
`;
