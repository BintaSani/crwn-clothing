import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 40px;

  /* Tablets & smaller desktops */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
