import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from "mobx-react-lite";

import "./header.styles.css"
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

function Header({ store }) {
    return (
        <div className="header">
            <NavLink to="/" exact>
                <img src="svg/algebra_crown.svg" alt="Algebra shop" className="header-logo" />
            </NavLink>
            <div style={{ flexGrow: 1 }}></div>
            <div>
                <NavLink to="/shop" exact className="mx-2">ALGEBRA SHOP</NavLink>
            </div>
            <div>
                <NavLink to="/signin" exact className="mx-2">SIGN IN</NavLink>
            </div>
            <div onClick={() => store.cartOpen = !store.cartOpen } className="shopping-cart-button">
                <div className="mx-2">
                    <img src="svg/shopping-bag.svg" alt="Shopping card" className="header-cart-img" />
                    <b className="header-cart-amount" style={{ right: store.cartSize < 10 ? '55.5px' : '51.5px' }}>{store.cartSize}</b>
                </div>
            </div>
            <div className="cart-dropdown"></div>
            <CartDropdown store={store} />
        </div>
    );
}

// @ts-ignore
export default observer(Header);