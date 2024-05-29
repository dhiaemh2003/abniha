import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import footerlogo from '../../assets/logo_app.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={footerlogo} alt="" />
            <p>معك في كل خطوة لتجربة افضل  اي استفسار او مشكلة تواصل معنا عبر صفحاتنا او اتصل برقم الهاتف</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+2137969035</li>
                <li>contact@abniha.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © abniha.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
