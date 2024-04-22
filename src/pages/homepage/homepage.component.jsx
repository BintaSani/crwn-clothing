import React from 'react';

import Directory from '../../components/directory/directory.component';
import CarouselPage from '../../components/carousel/carousel.components';
import images from '../../components/carousel/images';
  
import { HomePageContainer } from './homepage.styles';


const HomePage = () => (
    <HomePageContainer>
      <CarouselPage images={images}/>
      <Directory />
    </HomePageContainer>
);

export default HomePage;