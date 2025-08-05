'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // <!-- header start -->
    <header id="home" className="header-area header-style-two is-sticky">
      <div className="xb-header stricky">
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="main-menu__wrap ul_li_between w-100 navbar navbar-expand-lg">
              <div className="header-logo d-lg-none">
                <Link href="/">
                  <Image src="/assets/img/logo/logo2.svg" alt="Logo" width={120} height={40} />
                </Link>
              </div>

              <div className="xb-menu-inner d-none d-lg-block">
                <div className="menu-left ul_li_between">
                  <a className="header__bar offcanvas-sidebar-btn" href="#">
                    <div className="header__bar-icon">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </a>

                  <div className="header-logo">
                    <Link href="/">
                      <Image src="/assets/img/logo/logo2.svg" alt="Logo" width={120} height={40} />
                    </Link>
                  </div>

                  <nav className="main-menu collapse navbar-collapse">
                    <ul>
                      <li className="menu-item-has-children active">
                        <a className="section-link" href="#home"><span>Home</span></a>
                        <ul className="submenu">
                          <li><Link href="/"><span>Home Style 01</span></Link></li>
                          <li className="active"><Link href="/home-2"><span>Home Style 02</span></Link></li>
                        </ul>
                      </li>
                      <li><a className="section-link" href="#features"><span>Features</span></a></li>
                      <li className="menu-item-has-children">
                        <a className="section-link" href="#shop"><span>Shop</span></a>
                        <ul className="submenu">
                          <li><Link href="/shop"><span>Products</span></Link></li>
                          <li><Link href="/shop-single"><span>Single Product</span></Link></li>
                          <li><Link href="/cart"><span>Cart</span></Link></li>
                          <li><Link href="/checkout"><span>Checkout</span></Link></li>
                        </ul>
                      </li>
                      <li><a className="section-link" href="#pricing"><span>Pricing</span></a></li>
                      <li className="menu-item-has-children">
                        <a className="section-link" href="#blog"><span>Blog</span></a>
                        <ul className="submenu">
                          <li><Link href="/blog"><span>Blog</span></Link></li>
                          <li><Link href="/blog-single"><span>Blog Details</span></Link></li>
                        </ul>
                      </li>
                      <li><a className="section-link" href="#contact"><span>Contact</span></a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="menu-right ul_li">
                <div className="d-none d-lg-block">
                  <div className="header__right ul_li ml-50">
                    <div className="header-shop-cart">
                      <a href="#"><img src="/assets/img/icon/bag.svg" alt="" /><span className="mini-cart-count">2</span></a>
                      <div className="header-mini-cart">
                        <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                          <li className="woocommerce-mini-cart-item d-flex align-items-center">
                            <a href="#" className="remove remove_from_cart_button">×</a>
                            <div className="mini-cart-img">
                              <img src="/assets/img/shop/product_02.png" alt="Product" />
                            </div>
                            <div className="mini-cart-content">
                              <h4 className="product-title"><a href="#">xplode powder</a></h4>
                              <div className="mini-cart-price">1 × <span className="woocommerce-Price-amount amount">$49</span></div>
                            </div>
                          </li>
                          <li className="woocommerce-mini-cart-item d-flex align-items-center">
                            <a href="#" className="remove remove_from_cart_button">×</a>
                            <div className="mini-cart-img">
                              <img src="/assets/img/shop/product_03.png" alt="Product" />
                            </div>
                            <div className="mini-cart-content">
                              <h4 className="product-title"><a href="#">creatine powder</a></h4>
                              <div className="mini-cart-price">2 × <span className="woocommerce-Price-amount amount">$69</span></div>
                            </div>
                          </li>
                        </ul>
                        <p className="woocommerce-mini-cart__total">
                          <strong>Subtotal:</strong>
                          <span className="woocommerce-Price-amount">$149</span>
                        </p>
                        <p className="checkout-link">
                          <a href="#" className="button wc-forward">View cart</a>
                          <a href="#" className="button checkout wc-forward">Checkout</a>
                        </p>
                      </div>
                    </div>
                    <div className="header-search">
                      <a className="header-search-btn" href="#"><img src="/assets/img/icon/search.svg" alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="header-bar-mobile header__bar d-lg-none">
                  <a className="xb-nav-mobile" href="#">
                    <div className="header__bar-icon">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="xb-header-wrap">
              <div className="xb-header-menu">
                <div className="xb-header-menu-scroll">
                  <div className="xb-menu-close xb-hide-xl xb-close"></div>
                  <div className="xb-logo-mobile xb-hide-xl">
                    <a href="#"><img src="/assets/img/logo/logo2.svg" alt="" /></a>
                  </div>
                  <div className="xb-header-mobile-search xb-hide-xl">
                    <form role="search" action="#">
                      <input type="text" placeholder="Search..." name="s" className="search-field" />
                    </form>
                  </div>
                  <nav className="xb-header-nav">
                    <ul className="xb-menu-primary clearfix">
                      <li className="menu-item menu-item-has-children active">
                        <a className="section-link" href="#home"><span>Home</span></a>
                        <ul className="sub-menu">
                          <li className="active"><a href="#"><span>Home Style 01</span></a></li>
                          <li><a href="#"><span>Home Style 02</span></a></li>
                        </ul>
                      </li>
                      <li className="menu-item"><a className="section-link" href="#features"><span>Features</span></a></li>
                      <li className="menu-item menu-item-has-children">
                        <a className="section-link" href="#shop"><span>Shop</span></a>
                        <ul className="sub-menu">
                          <li><a href="#"><span>Products</span></a></li>
                          <li><a href="#"><span>Single Product</span></a></li>
                          <li><a href="#"><span>Cart</span></a></li>
                          <li><a href="#"><span>Checkout</span></a></li>
                        </ul>
                      </li>
                      <li className="menu-item"><a className="section-link" href="#pricing"><span>Pricing</span></a></li>
                      <li className="menu-item menu-item-has-children">
                        <a className="section-link" href="#blog"><span>Blog</span></a>
                        <ul className="sub-menu">
                          <li><a href="#"><span>Blog</span></a></li>
                          <li><a href="#"><span>Blog Details</span></a></li>
                        </ul>
                      </li>
                      <li className="menu-item"><a className="section-link" href="#contact"><span>Contact</span></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="xb-header-menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <!-- header end -->
  );
}
