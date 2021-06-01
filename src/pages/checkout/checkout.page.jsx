import ShopItem from 'components/shop-item/shop-item.component';
import React, { Component } from 'react';
import SHOP_DATA from '../../resources/collections.data';
import { NavLink, useParams } from 'react-router-dom';
import { FaTimes, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import "./checkout.styles.css";
import { observer } from 'mobx-react-lite';

function CheckoutPage({ store }) {

    const items = store.getItems();

    return (
        <div>
            <div className="checkout-table" style={{display: items.length === 0 ? 'block' : 'none'}}>
                <h1 className="mb-0">No items to display.</h1>
                <h3 className="mt-1">Go back to <NavLink to="/shop" exact className="store-link">shop</NavLink>.</h3>
            </div>

            <table className="checkout-table" style={{display: items.length > 0 ? 'block' : 'none'}}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img style={{ width: '100%' }} src={item.item.imageUrl} alt={item.item.name} />
                                </td>
                                <td>
                                    {item.item.name}
                                </td>
                                <td>
                                    <FaAngleLeft className="pointer" style={{ marginRight: '0.5em' }} onClick={() => store.decreaseAmount(item)} />
                                    <span style={{ fontSize: '1.2em' }}>{item.amount}</span>
                                    <FaAngleRight className="pointer" style={{ marginLeft: '0.5em' }} onClick={() => store.increaseAmount(item)} />
                                </td>
                                <td>
                                    {item.item.price} €
                            </td>
                                <td>
                                    <FaTimes className="pointer" onClick={() => store.removeItem(item)} />
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={6} className="total-row">TOTAL: {store.total} €</td>
                    </tr>
                </tbody>
            </table>
        </div>
        // <div className="collection-data-container">
        //     <h1 className="collection-data-title">{collectionToShow[0]}</h1>
        //     <div className="collection-data-flex-container">
        //         {
        //             collectionToShow[1].items.map((shopDataItem, index) => (
        //                 <ShopItem category={shopDataItem} key={index} store={store} />
        //             ))
        //         }
        //     </div>
        // </div>
    );
}

export default observer(CheckoutPage);