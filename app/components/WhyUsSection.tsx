'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyUsSection() {
  return (
    <section
      className="why-us bg_img pt-70 pb-70"
      style={{ backgroundImage: 'url(/assets/img/bg/why_us_bg.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="xb-why-us">
              <div className="sec-title sec-title--white sec-title--two mb-50">
                <span className="sub-title">WHY US</span>
                <h2 className="title">Welcome to purefit</h2>
              </div>

              <div className="row mt-none-50">
                {[
                  {
                    icon: '/assets/img/icon/wus_01.svg',
                    title: 'Multi Fruits Flavors',
                    desc: 'Multi Fruits Flavors" typically refers to a blend of various.',
                  },
                  {
                    icon: '/assets/img/icon/wus_02.svg',
                    title: 'Flower Formula',
                    desc: 'Some flowers have been traditionally used health.',
                  },
                  {
                    icon: '/assets/img/icon/wus_03.svg',
                    title: 'Fishbone Diagram',
                    desc: 'The Fishbone Diagram is a valuable tool in various.',
                  },
                  {
                    icon: '/assets/img/icon/wus_04.svg',
                    title: 'drug interactions',
                    desc: 'These occur when two drugs with similar effects are taken.',
                  },
                ].map((item, i) => (
                  <div className="col-lg-6 mt-50" key={i}>
                    <div className="why-us-item">
                      <div className="xb-item--icon">
                        <Image src={item.icon} alt={item.title} width={50} height={50} />
                      </div>
                      <h3 className="xb-item--title">{item.title}</h3>
                      <p className="xb-item--desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-4">
            <div className="xb-why-video pos-rel h-100">
              <a
                className="popup-video btn-video btn-video-center"
                href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
