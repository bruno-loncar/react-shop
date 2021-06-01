import ShopItem from 'components/shop-item/shop-item.component';
import React, { Component } from 'react';
import SHOP_DATA from '../../resources/collections.data';
import { useParams } from 'react-router-dom';

import "./collection.styles.css";

function CollectionPage({ store }) {

    // @ts-ignore
    const { collectionName } = useParams();
    const shopData = Object.entries(SHOP_DATA);
    const collectionToShow = shopData.filter(x => x[0] === collectionName)[0];

    // Handling hidden flexbox items so it can be drawn properly
    while (collectionToShow[1].items.length % 4 !== 0) {
        collectionToShow[1].items.push({ id: 0, name: '', imageUrl: '', price: 0 });
    }

    return (
        <div className="collection-data-container">
            <h1 className="collection-data-title">{collectionToShow[0]}</h1>
            <div className="collection-data-flex-container">
                {
                    collectionToShow[1].items.map((shopDataItem, index) => (
                        <ShopItem category={shopDataItem} key={index} store={store} />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPage;