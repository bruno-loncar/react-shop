import ShopItem from 'components/shop-item/shop-item.component';
import React, { Component } from 'react';
import SHOP_DATA from '../../resources/collections.data';
import { useParams } from 'react-router-dom';

import "./signin.styles.css";

function SignInPage() {

    return (
        <div className="signin-signup-container">
            <div className="signin-signup-child signin-container">
                <h3 className="mb-0">I already have an account</h3>
                <h4 className="mt-2" style={{ fontWeight: 500 }}>Sign in with your email and password</h4>

                <div className="pt-4">
                    <form>
                        <input className="input" type="email" name="email" placeholder="Email" />
                        <input className="input" type="password" name="password" placeholder="Password" />
                        <div>
                            <div className="form-button-holder">
                                <button className="form-button">SIGN IN</button>
                            </div>
                            <div className="form-button-holder">
                                <button className="form-button" style={{ backgroundColor: "rgba(66,144,244)" }}>SIGN IN WITH GOOGLE</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="mt-2 signin-signup-child signup-container">
                <h3 className="mb-0">I do not have account</h3>
                <h4 className="mt-2" style={{ fontWeight: 500 }}>Sign up with your email and password</h4>

                <div className="pt-4">
                    <form>
                        <input className="input" type="text" name="displayName" placeholder="Display name" />
                        <input className="input" type="email" name="email" placeholder="Email" />
                        <input className="input" type="password" name="password" placeholder="Password" />
                        <input className="input" type="password" name="password2" placeholder="Confirm Password" />
                        <div>
                            <div className="form-button-holder">
                                <button className="form-button">SIGN UP</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignInPage;