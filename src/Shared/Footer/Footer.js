import React from 'react';
import logo from '../../assets/images/logo-dark.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <div>
                    <img src={logo} alt="" />
                    <p className="font-bold">
                        Core Dental <br />Providing reliable dental service since 2020
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;