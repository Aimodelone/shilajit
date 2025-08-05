
'use client';
import React from 'react';

export default function HeaderSearch() {
  return (
    <>
      {/* <!-- header search start --> */}
      <div className="header-search-form-wrapper">
        <div className="xb-search-close xb-close"></div>
        <div className="header-search-container container">
          <form role="search" className="search-form" action="#">
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
              defaultValue=""
            />
            <button type="submit" className="search-submit">
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      {/* <!-- header search end --> */}

      {/* <!-- body overlay --> */}
      <div className="body-overlay"></div>
    </>
  );
}
