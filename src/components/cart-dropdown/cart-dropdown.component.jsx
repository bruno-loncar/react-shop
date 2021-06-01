import { observer } from 'mobx-react-lite';
import React from 'react';
import { FaDove } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import "./cart-dropdown.styles.css"

const CartDropdown = ({ store }) => (
    <div className="cart-dropdown-container" style={{display: store.cartOpen ? 'block' : 'none'}}>
        <div className="cart-dropdown-items">
            <div className="cart-empty" style={{display: store.items.length === 0 ? 'block' : 'none'}}>
                Your cart is empty
            </div>
            <table style={{display: store.items.length > 0 ? 'block' : 'none'}}>
                {
                    store.items.map((item, index) => (
                        <tr>
                            <td>
                                <div className="cart-single-item-image" style={{ backgroundImage: `url(${item.item.imageUrl})` }}>&nbsp;</div>
                            </td>
                            <td>
                                <p className="cart-single-item-text mb-0">{item.item.name}</p>
                                <p className="mt-0" style={{paddingLeft: '10px'}}>{item.amount} x {item.item.price} €</p>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
        <NavLink to="/checkout" exact className="cart-dropdown-button-container">
            <div className="form-button" style={{ backgroundColor: "rgba(0,0,0)" }}>GO TO CHECKOUT</div>
        </NavLink>
    </div >
);

export default observer(CartDropdown);