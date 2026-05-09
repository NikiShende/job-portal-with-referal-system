import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="logo">CareerBridge
</h2>
          <p>
            Connecting talent with opportunity through smart referrals.
            Build your career faster with trusted connections.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Referrals</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>💼</span>
            <span>📧</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ReferHire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;