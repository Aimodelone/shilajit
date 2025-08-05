'use client';
import Image from 'next/image';

const brands = [
  'brand_01.png',
  'brand_02.png',
  'brand_03.png',
  'brand_04.png',
  'brand_05.png',
  'brand_06.png',
  'brand_07.png',
];

export default function BrandSection() {
  return (
    <section className="brand pb-140">
      <div className="container">
        <div className="sec-title sec-title--white sec-title--two text-center mb-70">
          <span className="sub-title">Perfect Brand is Featured on</span>
        </div>

        <div className="brand-inner">
          {brands.map((brand, index) => (
            <div className="xb-brand" key={index}>
              <a href="#!" className="brand-logo">
                <Image
                  src={`/assets/img/brand/${brand}`}
                  alt={`Brand ${index + 1}`}
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
