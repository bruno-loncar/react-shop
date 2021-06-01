import React from 'react';
import { NavLink } from 'react-router-dom';

import "./home-category.styles.css"

const HomeCategory = ({ category, index }) => (
    <NavLink to={category.linkUrl} exact className="category-div-container" style={{ width: index < 3 ? '32.2%' : '48.6%', height: index < 3 ? '13em' : '20em' }}>
        <div className="category-div-image" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
        <div className="category-div">
            <div className="category-name">
                <h3 className="category-title">{category.title}</h3>
                <h4 className="category-description">SHOP NOW</h4>
            </div>
        </div>
    </NavLink>
);

export default HomeCategory;