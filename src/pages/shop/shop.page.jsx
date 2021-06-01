import ShopItem from 'components/shop-item/shop-item.component';
import React from 'react';
import SHOP_DATA from '../../resources/collections.data';
import { toJS } from 'mobx'

import "./shop.styles.css";

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        const shopData = Object.entries(SHOP_DATA);

        this.state = {
            shopData: shopData
        }
    }
    render() {
        const { shopData } = this.state;
        return (
            <div className="shop-data-container">
                {
                    shopData?.map((shopData, index) => (
                        <div key={index}>
                            <h1 className="shop-data-title">{shopData[0]}</h1>
                            <div className="shop-data-flex-container">
                                {
                                    shopData[1].items.slice(0, 4).map((shopDataItem, index) => (
                                        <ShopItem category={shopDataItem} key={index} store={this.props.store} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}


export default ShopPage;