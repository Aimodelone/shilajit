'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section className="hero bg_img hero-style-two d-flex align-items-center">
        <div className="container">
          <div className="hero-inner ul_li_between">
            {/* Hero Image */}
            <div className="hero-img wow fadeInUp" data-wow-delay="150ms" data-wow-duration=".6s">
              <Image
                src="/assets/img/shop/hero_product2.png"
                alt="Hero Product"
                width={450}
                height={400}
              />
              <div className="hero-img-shape">
                <div className="shape shape--1">
                  <Image src="/assets/img/shape/h_shape1.png" alt="Shape 1" width={250} height={100} />
                </div>
                <div className="shape shape--2">
                  <Image src="/assets/img/shape/h_shape2.png" alt="Shape 2" width={250} height={100} />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="hero-content wow fadeInUp" data-wow-delay="0ms" data-wow-duration=".6s">
              <div className="sec-title sec-title--white sec-title--big sec-title--two mb-35">
                <span className="sub-title">fresh purefit</span>
                <h2 className="title">build up Your Life with purefit</h2>
              </div>
              <Link className="xb-btn" href="/shop-single">
                BUY NOW
              </Link>
            </div>

            {/* Hero Info */}
            <div className="hero-info wow fadeInUp" data-wow-delay="300ms" data-wow-duration=".6s">
              <p className="mb-75">
                At purefit, we&apos;re dedicated to helping you on a transformative health journey. Our mission
              </p>
              <div className="hero-info-feature mb-40">
                <h2>100%</h2>
                <span>Natural Ingredients</span>
              </div>
              <div className="hero-info-feature mb-50">
                <h2>100%</h2>
                <span>Increased Energy</span>
              </div>
              <div className="hero-review">
                <ul className="hero-rating ul_li">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star-half-alt"></i></li>
                  <li>4.9</li>
                </ul>
                <p>
                  From 200+ <span>reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Background Shapes */}
        <div className="xb-hero-shape">
          <div className="shape shape--1">
            <Image src="/assets/img/shape/h_shape3.png" alt="Shape 3" width={80} height={80} />
          </div>
          <div className="shape shape--2">
            <Image src="/assets/img/shape/h_shape4.png" alt="Shape 4" width={80} height={80} />
          </div>
        </div>
      </section>
    </>
  );
}
