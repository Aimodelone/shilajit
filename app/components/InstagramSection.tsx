'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const images = [
  'img_01.jpg',
  'img_02.jpg',
  'img_03.jpg',
  'img_04.jpg',
  'img_01.jpg', // repeated intentionally
];

const InstagramSection = () => {
  return (
    <section className="instagram">
      <div className="container">
        <div className="instagram-inner ul_li">
          {/* Title */}
          <div className="instagram-title">
            <a href="#!"><i className="fab fa-instagram"></i></a>
            <h3>follow us on Instagram & get promotions</h3>
          </div>

          {/* Slider */}
          <div className="instagram-slider-inner">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              modules={[FreeMode]}
              freeMode={true}
              className="instagram-slider"
            >
              {images.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide xb-instagram xb-hover-zoom"
                >
                  {/* Ensure parent has aspect ratio and position */}
                  <div className="xb-item--img relative w-full aspect-square overflow-hidden rounded">
                    <Image
                      src={`/assets/img/instagram/${img}`}
                      alt={`Instagram ${i}`}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </div>

                  {/* Hover content */}
                  <div className="xb-item--holder">
                    <a className="xb-item--icon" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <span className="xb-item--title">Follow us on Instagram</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
