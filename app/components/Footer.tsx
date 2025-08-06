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
          <h2 className="xb-item--number">+254 712 345 678</h2>
          <span className="xb-item--mail">
            Email: <a href="mailto:info@shilajit.co.ke">info@shilajit.co.ke</a>
          </span>
        </div>

        {/* Newsletter */}
        <form className="footer-newsletter" action="#">
          <span className="icon"></span>
          <input type="text" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>

        {/* Nav Links */}
        <ul className="footer-nav ul_li_center mt-45">
          <li><a href="#!">All Products</a></li>
          <li><a href="#!">Track Order</a></li>
          <li><a href="#!">My Account</a></li>
          <li><a href="#!">Gift Cards</a></li>
          <li><a href="#!">Our Story</a></li>
          <li><a href="#!">Careers</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>

        {/* Bottom Section */}
        <div className="footer-bottom mt-50 ul_li_between">
          {/* Copyright */}
          <div className="footer-copyright mt-30">
            Copyright © 2024 Shilajit Kenya. All rights reserved.
          </div>

          {/* Social Icons */}
          <ul className="footer-social ul_li mt-30">
            <li>
              <a href="https://facebook.com/shilajitkenya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/shilajitkenya" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M9.4893 6.77784L15.3176 0.00292969H13.9365L8.87577 5.88549L4.8338 0.00292969H0.171875L6.28412 8.8984L0.171875 16.0029H1.55307L6.8973 9.79075L11.1659 16.0029H15.8278L9.48896 6.77784H9.4893ZM7.59756 8.97677L6.97826 8.09098L2.05073 1.04267H4.17217L8.14874 6.73088L8.76804 7.61667L13.9371 15.0105H11.8157L7.59756 8.97711V8.97677Z"
                    fill="#DDDDDD"
                  />
                </svg>
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
