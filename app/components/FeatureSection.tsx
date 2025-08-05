'use client';
import React from 'react';
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <>
      {/* <!-- feature start --> */}
      <section id="features" className="feature pt-35">
        <div className="container">
          <div className="sec-title sec-title--white text-center sec-title--two mb-55">
            <span className="sub-title">How It ‘s Work</span>
            <h2 className="title">the easy way to eat</h2>
          </div>

          <div className="row mt-none-60">
            {[
              {
                img: '/assets/img/icon/feat_01.svg',
                title: 'Ingredient Breakdown',
              },
              {
                img: '/assets/img/icon/feat_02.svg',
                title: 'Targeted Benefits',
              },
              {
                img: '/assets/img/icon/feat_03.svg',
                title: 'Scientific Mechanisms',
              },
              {
                img: '/assets/img/icon/feat_04.svg',
                title: 'Usage Instructions',
              },
            ].map((item, idx) => (
              <div className="col-lg-3 col-md-6 mt-60" key={idx}>
                <div className="xb-feature text-center">
                  <div className="xb-item--icon">
                    <Image src={item.img} alt={item.title} width={80} height={80} />
                  </div>
                  <h3 className="xb-item--title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- feature end --> */}
    </>
  );
}
