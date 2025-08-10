import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="footer-style-two pb-40"
      style={{
        backgroundImage: 'url("/assets/img/bg/footer_bg2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        {/* CTA Section */}
        <div className="footer-cta text-center mb-40">
          <span className="xb-item--title">Call Us</span>
          <h2 className="xb-item--number">+254 750 910 003</h2>
        </div>

        {/* Newsletter */}


        {/* Nav Links */}

        {/* Bottom Section */}
        <div className="footer-bottom mt-50 ul_li_between">
          {/* Copyright */}
          <div className="footer-copyright mt-30">
            Copyright © 2025 Shilajit Kenya. All rights reserved.
          </div>

          {/* Social Icons */}
          <ul className="footer-social ul_li mt-30">
            <li>
              <a href="https://facebook.com/shilajitkenya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/shilajitkenya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

          {/* Legal Links */}
          <ul className="footer-links ul_li mt-30">
            <li><a href="#!">Terms of Service</a></li>
            <li><a href="#!">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
