import React, { Component } from 'react';

import "./home.styles.css";

import CATEGORIES from '../../resources/categories.data';

import HomeCategory from 'components/home-category/home-category.component';

class HomePageCategories extends Component {

    constructor() {
        super();

        this.state = {
            categories: CATEGORIES
        }
    }
    render() { 
        const { categories } = this.state;
        return (
        <div className="homepage-categories-container">
            {
                categories?.map((category, index) => (
                    <div className="category-box" key={index}>
                        <HomeCategory category={category} index={index} />
                    </div>
                ))
            }
        </div>
        );
    }
}

const HomePage = () => (
    <div>
        <HomePageCategories />
    </div>
);

export default HomePage;