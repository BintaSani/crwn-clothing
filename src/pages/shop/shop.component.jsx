import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


import CollectionPageContainer from '../collection/collection.container';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';



const ShopPage = ({fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className='shop-page'>
      <Routes>
      <Route exact path='/' Component={CollectionsOverviewContainer}/>
      <Route path='/:collectionId' Component={CollectionPageContainer} />
      </Routes>
    </div>
  )
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);