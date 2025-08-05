'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const blogPosts = [
  {
    date: { day: '15', month: 'oct' },
    title: 'Your Ultimate Guide to Dietary Supplements..',
    category: 'supplement',
    img: 'img_01.jpg',
    href: '/blog-single',
  },
  {
    date: { day: '18', month: 'nov' },
    title: 'The Role of Supplements in Athletic Performance..',
    category: 'supplement',
    img: 'img_02.jpg',
    href: '/blog-single',
  },
  {
    date: { day: '20', month: 'oct' },
    title: 'Weight Management with Supplements Health..',
    category: 'supplement',
    img: 'img_03.jpg',
    href: '/blog-single',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="blog pb-150">
      <div className="container">
        {/* Section header */}
        <div className="ul_li_between align-items-end mb-35 flex-wrap gap-4 justify-between">
          <div className="sec-title sec-title--white sec-title--two mb-20">
            <span className="sub-title">Blog</span>
            <h2 className="title">blog and article</h2>
          </div>
          <Link href="/blog" className="blog-link xb-right-link mb-25">
            see all article
            <span className="ml-10">
              <svg width="31" height="16" viewBox="0 0 31 16" fill="none">
                <path
                  d="M30.7071 8.7076C31.0976 8.31707 31.0976 7.68391 30.7071 7.29338L24.3431 0.929423C23.9526 0.538898 23.3195 0.538898 22.9289 0.929422C22.5384 1.31995 22.5384 1.95311 22.9289 2.34364L28.5858 8.00049L22.9289 13.6573C22.5384 14.0479 22.5384 14.681 22.9289 15.0716C23.3195 15.4621 23.9526 15.4621 24.3431 15.0716L30.7071 8.7076ZM0 9.00049H30V7.00049H0V9.00049Z"
                  fill="#2F2F29"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },      // Mobile full-width
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="xb-blog2 xb-hover-zoom h-full">
                {/* Image */}
                <div className="xb-item--img overflow-hidden rounded">
                  <Link href={post.href}>
                    <Image
                      src={`/assets/img/blog/${post.img}`}
                      alt={post.title}
                      width={615}
                      height={473}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="xb-item--holder ul_li mt-25">
                  <h3 className="xb-item--date">
                    {post.date.day} <br />
                    <span>{post.date.month}</span>
                  </h3>
                  <div className="xb-item--body">
                    <span className="xb-item--cat">{post.category}</span>
                    <h2 className="xb-item--title border-effect">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <Link href={post.href} className="xb-item--link xb-right-link">
                      Read more
                      <span>
                        <svg width="31" height="16" viewBox="0 0 31 16" fill="none">
                          <path
                            d="M30.7071 8.7076C31.0976 8.31707 31.0976 7.68391 30.7071 7.29338L24.3431 0.929423C23.9526 0.538898 23.3195 0.538898 22.9289 0.929422C22.5384 1.31995 22.5384 1.95311 22.9289 2.34364L28.5858 8.00049L22.9289 13.6573C22.5384 14.0479 22.5384 14.681 22.9289 15.0716C23.3195 15.4621 23.9526 15.4621 24.3431 15.0716L30.7071 8.7076ZM0 9.00049H30V7.00049H0V9.00049Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
