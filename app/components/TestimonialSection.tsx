'use client';
import Image from 'next/image';

export default function TestimonialSection() {
  const testimonials = [
    {
      avatar: '/assets/img/avatar/tst_04.png',
      quote: '/assets/img/icon/quote.svg',
      text: `"Since I started using Shilajit Kenya, my energy levels have skyrocketed. I'm more alert and focused, and it's transformed my daily productivity. Highly recommended!"`,
      rating: '/assets/img/icon/tst_rating.png',
      name: 'KENNETH JOSHUA',
      date: 'Aug 3, 2025',
    },
    {
      avatar: '/assets/img/avatar/tst_05.png',
      quote: '/assets/img/icon/quote.svg',
      text: `"As a fitness enthusiast, Shilajit Kenya is a game-changer. It boosts my workout endurance and recovery, so I can push harder and feel great the next day."`,
      rating: '/assets/img/icon/tst_rating.png',
      name: 'Tomas Alexander',
      date: 'Aug 1, 2025',
    },
    {
      avatar: '/assets/img/avatar/tst_06.png',
      quote: '/assets/img/icon/quote.svg',
      text: `"I'm a busy professional, and stress used to take a toll on my health. Shilajit Kenya has helped me manage stress, and I feel calmer and more in control. It's a lifeline in my demanding life."`,
      rating: '/assets/img/icon/tst_rating.png',
      name: 'Richard Charles',
      date: 'Jul 30, 2025',
    },
  ];

  return (
    <section
      className="testimonial z-3 pos-rel pt-140 pb-130"
      style={{ backgroundColor: '#161614' }}
    >
      <div className="container">
        <div className="sec-title sec-title--white sec-title--two text-center mb-55">
          <span className="sub-title">testimonial</span>
          <h2 className="title">15k+ satisfied users</h2>
        </div>

        <div className="testimonial-slider2 swiper-container">
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div className="swiper-slide xb-testimonial2 text-center" key={i}>
                <div className="xb-item--avatar pos-rel">
                  <Image src={t.avatar} alt={t.name} width={100} height={100} />
                  <div className="xb-item--quote">
                    <Image src={t.quote} alt="Quote" width={40} height={40} />
                  </div>
                </div>
                <div className="xb-item--desc mb-40">{t.text}</div>
                <span className="xb-item--rating">
                  <Image src={t.rating} alt="Rating" width={100} height={20} />
                </span>
                <div className="xb-item--author mt-30">
                  <h3 className="xb-item--name">{t.name}</h3>
                  <span className="xb-item--date">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="testimonial-shape">
        <div className="shape shape--1">
          <Image src="/assets/img/shape/tst_shape.png" alt="" width={120} height={120} />
        </div>
        <div className="shape shape--2">
          <Image src="/assets/img/shape/tst_shape2.png" alt="" width={120} height={120} />
        </div>
      </div>
    </section>
  );
}
