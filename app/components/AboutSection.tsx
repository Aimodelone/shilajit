'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <>
      {/* <!-- about start --> */}
      <section className="about pb-150">
        <div className="container">
          <div className="row align-items-center mt-none-60">
            <div className="col-xl-6 col-lg-6 mt-70">
              <div
                className="about-img-inner text-center wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration=".6s"
              >
                <div className="about-img">
                  <Image
                    src="/assets/img/shop/abt_product.png" // ← uses existing image
                    alt="Shilajit Kenya Product"
                    width={500}
                    height={500}
                  />
                  <div className="about-shape">
                    <div className="shape shape--1">
                      <Image
                        src="/assets/img/shape/ab_shape1.png"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="shape shape--2">
                      <Image
                        src="/assets/img/shape/ab_shape2.png"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
                <span className="about-img-title">Best Seller</span>
              </div>
            </div>

            <div className="col-xl-5 offset-xl-1 col-lg-6 mt-70">
              <div
                className="xb-about-content wow fadeInRight"
                data-wow-delay="150ms"
                data-wow-duration=".6s"
              >
                <div className="sec-title sec-title--white sec-title--two mb-20">
                  <span className="sub-title">Shilajit Kenya</span>
                  <h2 className="title">Pure Himalayan Power, Refined for You</h2>
                </div>
                <ul className="xb-rating ul_li">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star-half-alt"></i></li>
                  <li><span>(4.8)</span></li>
                </ul>

                <div className="about-list-inner mt-30">
                  <span>Key Benefits:</span>
                  <ul className="xb-about-list list-unstyled">
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      100% Pure Himalayan Shilajit Resin
                    </li>
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Boosts natural energy, stamina & focus
                    </li>
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Rich in fulvic acid & 85+ trace minerals
                    </li>
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Enhances immunity & muscle recovery
                    </li>
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Lab-tested & sustainably harvested
                    </li>
                    <li>
                      <Image
                        src="/assets/img/icon/check2.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      No fillers, preservatives, or additives
                    </li>
                  </ul>
                </div>

                <div className="about-cta ul_li mt-45">
                  <h3>KSh 4,999</h3>
                  <Link className="xb-btn" href="/shop-single">BUY NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}
    </>
  );
}
