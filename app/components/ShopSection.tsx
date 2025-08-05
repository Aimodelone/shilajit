'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopSection() {
  return (
    <section id="shop" className="shop z-3 pos-rel pt-140 pb-150" data-bg-color="#161614">
      <div className="container">
        <div className="ul_li_between mb-25">
          <div className="sec-title sec-title--white sec-title--two mb-30">
            <span className="sub-title">products</span>
            <h2 className="title">our popular products</h2>
          </div>
          <div className="shop-carousel ul_li">
            <div className="xb-swiper-arrow xb-swiper-arrow-prev">
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.892464 13.0607C0.306679 12.4749 0.306679 11.5251 0.892464 10.9393L10.4384 1.3934C11.0242 0.807611 11.9739 0.807611 12.5597 1.3934C13.1455 1.97919 13.1455 2.92893 12.5597 3.51472L4.07444 12L12.5597 20.4853C13.1455 21.0711 13.1455 22.0208 12.5597 22.6066C11.9739 23.1924 11.0242 23.1924 10.4384 22.6066L0.892464 13.0607ZM36.9531 13.5H1.95312V10.5H36.9531V13.5Z"
                  fill="#2F2F29"
                />
              </svg>
            </div>
            <div className="xb-swiper-arrow xb-swiper-arrow-next">
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807611 24.9792 0.807611 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM0 13.5H35V10.5H0V13.5Z"
                  fill="#2F2F29"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="product-slider swiper-container">
          <div className="swiper-wrapper">
            {[
              {
                title: 'nutraone protine',
                price: '$90.00',
                oldPrice: '$100.00',
                img: '/assets/img/shop/product_06.png',
                badge: false,
              },
              {
                title: 'clear whey protein',
                price: '$88.00',
                oldPrice: '$98.00',
                img: '/assets/img/shop/product_07.png',
                badge: false,
              },
              {
                title: 'strawberry protine',
                price: '$75.00',
                oldPrice: '$90.00',
                img: '/assets/img/shop/product_08.png',
                badge: true,
              },
              {
                title: 'candy bits protine',
                price: '$70.00',
                oldPrice: '$85.00',
                img: '/assets/img/shop/product_09.png',
                badge: false,
              },
              {
                title: 'nutraone protine',
                price: '$90.00',
                oldPrice: '$100.00',
                img: '/assets/img/shop/product_06.png',
                badge: false,
              },
            ].map((product, i) => (
              <div className="swiper-slide" key={i}>
                <div className="xb-product text-center pos-rel xb-hover-zoom">
                  <div className="xb-item--img">
                    <Link href="/shop-single">
                      <Image src={product.img} alt={product.title} width={250} height={250} />
                    </Link>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">
                      <Link href="/shop-single">{product.title}</Link>
                    </h2>
                    <h3 className="xb-item--price">
                      {product.price}
                      <span>{product.oldPrice}</span>
                    </h3>
                    <ul className="xb-rating ul_li_center">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star-half-alt"></i></li>
                      <li><span>(40)</span></li>
                    </ul>
                  </div>
                  <Link className="xb-item--cart" href="/shop-single">
                    <Image src="/assets/img/icon/bag.svg" alt="Cart" width={24} height={24} />
                  </Link>
                  {product.badge && <span className="xb-item--badge">-20</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shop-shape">
        <div className="shape shape--1">
          <Image src="/assets/img/shape/shop_shape1.png" alt="" width={70} height={70} />
        </div>
        <div className="shape shape--2">
          <Image src="/assets/img/shape/shop_shape2.png" alt="" width={70} height={70} />
        </div>
      </div>
    </section>
  );
}
