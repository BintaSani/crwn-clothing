import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:focus {
    color: grey;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const MobileOptionLink = styled(Link)`
  display: none;
  @media screen and (max-width: 760px) {
    display: flex;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
    justify-content: center;

    &:focus {
      color: grey;
    }
  }
`;
export const MenuButton = styled.button`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    background-color: transparent;
    border: none;
  }
`;
export const StyledMenuIcon = styled(MdMenu)`
  color: #333;
  font-size: 2rem;
  cursor: pointer;
`;
export const StyledCloseIcon = styled(MdClose)`
  color: #333;
  font-size: 2rem;
  cursor: pointer;
`;
export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    position: absolute;
    top: 90px;
    right: 40px;
    z-index: 999;
    width: 80vw;
    height: fit-content;
    gap: 10px;
    background-color: #fff;
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    justify-content: center;
  }
`;
