'use client';
import Image from 'next/image';

const pricingPlans = [
  {
    id: 'essential',
    heading: 'Essential',
    price: 'KES 4,000',
    priceNote: 'Per Jar',
    title: '1-Month Supply',
    icon: '/assets/img/icon/prc_icon.svg',
    features: [
      '1 Jar of Shilajit Kenya',
      '30g Pure Resin',
      'Ideal for Beginners',
    ],
    disabledFeature: 'Free Shipping',
    active: false,
  },
  {
    id: 'premium',
    heading: 'Premium',
    price: 'KES 3,600',
    priceNote: 'Per Jar',
    title: '3-Month Supply (KES 10,800)',
    icon: '/assets/img/icon/prc_icon2.svg',
    features: [
      '3 Jars of Shilajit Kenya',
      '3 x 30g Pure Resin',
      'Boosted Strength Formula',
      'Free Shipping',
    ],
    disabledFeature: null,
    active: true,
    guarantee: '30-Day Money Back Guarantee',
  },
  {
    id: 'enterprise',
    heading: 'Family Pack',
    price: 'KES 3,300',
    priceNote: 'Per Jar',
    title: '6-Month Supply (KES 19,800)',
    icon: '/assets/img/icon/prc_icon.svg',
    features: [
      '6 Jars of Shilajit Kenya',
      '6 x 30g Pure Resin',
      'Best Value Deal',
      'Free Shipping',
    ],
    disabledFeature: null,
    active: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing z-1 pt-140 pb-140">
      <div className="container">
        <div className="sec-title sec-title--white sec-title--two text-center mb-90">
          <span className="sub-title">Pricing Plans</span>
          <h2 className="title">Choose Your Package</h2>
        </div>
        <div className="row g-0 align-items-center mt-none-60">
          {pricingPlans.map((plan, index) => (
            <div className="col-lg-4 mt-60" key={plan.id}>
              <div
                className={`xb-pricing2 text-center ${
                  index === 0 ? 'br-0' : index === 2 ? 'bl-0' : ''
                } ${plan.active ? 'active' : ''}`}
              >
                <div className="xb-item--icon">
                  <Image src={plan.icon} alt={plan.heading} width={60} height={60} />
                </div>
                <span className="xb-item--heading">{plan.heading}</span>
                <h3 className="xb-item--price">
                  {plan.price}
                  <span>{plan.priceNote}</span>
                </h3>
                <h3 className="xb-item--title">{plan.title}</h3>
                <ul className="xb-item--list mt-35">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Image
                        src="/assets/img/icon/check3.svg"
                        alt="check"
                        width={16}
                        height={16}
                      />
                      {feature}
                    </li>
                  ))}
                  {plan.disabledFeature && (
                    <li className="deactive">
                      <Image
                        src="/assets/img/icon/check_x.svg"
                        alt="x"
                        width={16}
                        height={16}
                      />
                      {plan.disabledFeature}
                    </li>
                  )}
                </ul>
                <a className="xb-item--btn xb-btn mt-40 mb-40" href="#!">
                  <Image
                    src="/assets/img/icon/bag.svg"
                    alt="cart"
                    width={16}
                    height={16}
                  />
                  BUY NOW
                </a>
                {plan.guarantee && (
                  <span className="xb-item--guarantee">{plan.guarantee}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-shape">
        <div className="shape shape--1">
          <Image
            src="/assets/img/shape/h_shape3.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="shape shape--2">
          <Image
            src="/assets/img/shape/h_shape4.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
