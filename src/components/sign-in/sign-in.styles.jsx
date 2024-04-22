import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 354px
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CheckBox = styled.input`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  height: 15px;
  width: 15px;
  
`;
export const Label = styled.label`
  color: grey; 
  
`;