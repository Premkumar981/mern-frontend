import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <p>
            We are committed to providing the best e-commerce experience with top-notch products and services.
          </p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: premkumarsuru@gmail.com</p>
          <p>Phone: +91 99594 08946</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suru Prem Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
