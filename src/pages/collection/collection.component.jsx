import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from 'react-redux';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId)) ;
    const {title, items } = collection;
    //console.log(collection);

  
    return (
        <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
         {
             items.map(item => (<CollectionItem key={item.id} item={item}/>))
         }
        </CollectionItemsContainer>
     </CollectionPageContainer>
    )
  };

  const mapStateToProps = (state, ownProps) => ({

    collection: selectCollection(ownProps.collectionId)(state)

});

export default connect(mapStateToProps)(CollectionPage);