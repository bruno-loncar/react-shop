import React from 'react';
import { NavLink } from 'react-router-dom';

import "./shop-item.styles.css"

const ShopItem = ({ category, store }) => (
    <div className="shop-category-container" style={category.id === 0 ? {opacity: 0, pointerEvents: 'none'} : {}}>
        <div className="shop-category-image" style={{ backgroundImage: `url(${category.imageUrl})` }}>
            <button className="shop-category-button" onClick={() => {store.addItem(category)}}><b>ADD TO CART</b></button>
        </div>
        <div>
            <h3 className="mt-0 float-right">{category.price} €</h3>
            <h3 className="mt-1">{category.name}</h3>
        </div>
    </div>
);

export default ShopItem;