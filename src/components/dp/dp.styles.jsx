
import styled from "styled-components";
// Just some styles
export const Container= styled.div`
      flexDirection: "column";
      justifyContent: "center";
      alignItems: "center";
      paddingTop: 50px;
`;
export const Preview = styled.div`
      marginTop: 50px;
      display: "flex";
      flexDirection: "column";
    `;
export const Image = styled.img`
      width: 100%;
      height: 5vh;
      object-fit: contain;
      border-radius: 50px;`;
export const Delete = styled.button`
      cursor: "pointer";
      padding: 15px;
      background: "red";
      color: "white";
      border: "none";
`;
