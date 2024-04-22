import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  let navigate = useNavigate();
  // destructured "pathname" property from useLocation()
  let { pathname } = useLocation();
  // console.log(pathname)
  return (
    <MenuItemContainer size={size} 
    onClick={() => navigate(`${pathname}${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;