'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SidebarInfo() {
  return (
    <>
      {/* <!-- sidebar-info start --> */}
      <div className="offcanvas-sidebar black-sidebar">
        <div className="sidebar-menu-close">
          <a className="xb-close" href="javascript:void(0);"></a>
        </div>

        <div className="sidebar-top mb-65">
          <div className="sidebar-logo mb-40">
            <Link href="/">
              <Image src="/assets/img/logo/logo2.svg" alt="logo" width={120} height={40} />
            </Link>
          </div>
          <div className="sidebar-content">
            Achieving optimal nutrition is a complex endeavor without the inclusion of supplementary support
          </div>
        </div>

        <div className="sidebar-contact-info mb-65">
          <h4 className="sidebar-heading">Contact Information</h4>
          <ul className="sidebar-info-list list-unstyled">
            <li>
              <span>
                <Image src="/assets/img/icon/star-2.svg" alt="" width={16} height={16} />
              </span>
              Wasington SY, UK, NY 12099
            </li>
            <li>
              <a href="#!">
                <span>
                  <Image src="/assets/img/icon/star-2.svg" alt="" width={16} height={16} />
                </span>
                +81 800 123 06 78
              </a>
            </li>
            <li>
              <a href="#!">
                <span>
                  <Image src="/assets/img/icon/star-2.svg" alt="" width={16} height={16} />
                </span>
                contact@purefit.com
              </a>
            </li>
          </ul>
        </div>

        <div className="xb-content-wrap d-flex">
          <div className="xb-title col-auto">Call us:</div>
          <div className="xb-inf-content-wrap col">
            <div className="xb-item-wrap row">
              <div className="xb-item col-auto">
                <span className="item-content">
                  <a href="tel:02456787535" className="tel">024 5678 7535</a>
                </span>
              </div>
              <div className="xb-item col-auto">
                <span className="item-content">
                  <a href="mailto:support@gmail.com">contact@purefit.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-socials-wrap mt-30">
          <a className="social-item" href="https://facebook.com" target="_blank">Facebook</a>
          <a className="social-item" href="https://www.behance.net/" target="_blank">Behance</a>
          <a className="social-item" href="#" target="_blank">Telegram</a>
          <a className="social-item" href="https://dribbble.com/" target="_blank">Dribbble</a>
        </div>
      </div>
      {/* <!-- sidebar-info end --> */}
    </>
  );
}
