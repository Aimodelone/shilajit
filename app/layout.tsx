import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import Header from './components/Header';
import HeaderSearch from './components/HeaderSearch';
import Footer from './components/Footer';
import SidebarInfo from './components/SidebarInfo';
import BackToTop from './components/BackToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Purefit - Health Supplement Landing Page',
  description: 'Premium supplements for your health and fitness',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className={`demo-dark ${geistSans.variable} ${geistMono.variable}`}>
        {/* <!-- backtotop - start --> */}
        <BackToTop />
        {/* <!-- backtotop - end --> */}

        {/* <!-- sidebar-info start --> */}
        <SidebarInfo />
        {/* <!-- sidebar-info end --> */}

        {/* <!-- header start --> */}
        <Header />
        <HeaderSearch />
        {/* <!-- header end --> */}

        {/* <!-- page content start --> */}
        {children}
        {/* <!-- page content end --> */}

        {/* <!-- footer start --> */}
        <Footer />
        {/* <!-- footer end --> */}

        {/* <!-- scripts start --> */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.easing.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.inview.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/scrollspy.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/touchspin.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        {/* <!-- scripts end --> */}
      </body>
    </html>
  );
}
