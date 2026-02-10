import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="navigation11-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <div className="navigation-main">
              <Link href="/">
                <a>
                  <div
                    aria-label="FlowVista Home"
                    className="navigation11-thq-navigation-brand-elm navigation-brand"
                  >
                    <span className="navigation11-thq-section-title-elm1 section-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_edDqDJ'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </Link>
              <div className="navigation-desktop-links">
                <div className="navigation-dropdown-container">
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="navigation-dropdown-trigger navigation-link"
                  >
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kqFN0y'),
                        }}
                      ></span>
                    </span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="navigation11-thq-navigation-icon-sm-elm1"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div className="navigation-dropdown-menu">
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iHY7Nt'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_h_i3Cz'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_IlANfN'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ee1NqC'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="#">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bNkroV'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="navigation-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ceoFke'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <Link href="/about-nimbus-cloud">
                  <a>
                    <div className="navigation11-thq-navigation-link-elm4 navigation-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NJhxv8'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="navigation-sidebar-right">
              <div className="navigation-actions">
                <Link href="/sign-in">
                  <a>
                    <div className="navigation11-thq-btn-elm1 btn btn-link btn-sm">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1Gj9Uh'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </Link>
                <a href="#">
                  <div className="btn btn-sm btn-primary">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9ElcY3'),
                        }}
                      ></span>
                    </span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="navigation-icon-sm"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <button
                id="nav-toggle"
                aria-label="Toggle Menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="navigation11-thq-navigation-icon-md-elm1"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="mobile-menu" className="navigation-mobile-overlay">
          <header className="navigation-mobile-header">
            <span className="section-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('SectionTitle_CbvWjm'),
                }}
              ></span>
            </span>
            <button
              id="nav-close"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation11-thq-navigation-icon-md-elm2"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </header>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <details className="navigation-mobile-details">
                <summary className="navigation-mobile-summary">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yRHt_M'),
                      }}
                    ></span>
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-icon-sm"
                  >
                    <path
                      d="m6 9l6 6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="navigation-mobile-sublinks">
                  <a href="#">
                    <div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_haccfg'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_EPVvx5'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qh5cpz'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_noEP_Y'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </details>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1wWhnz'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4wII9G'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mK8vXd'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <a href="#">
                <div className="navigation11-thq-btn-elm3 btn btn-lg btn-outline">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_u0VnVJ'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="navigation11-thq-btn-elm4 btn btn-lg btn-primary">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DoJ9qP'),
                      }}
                    ></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation11-container6">
          <div className="navigation11-container7">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  const openMenu = () => {
    mobileMenu.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  };

  navToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  const dropdownTrigger = document.querySelector('.navigation-dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      const isExpanded = dropdownTrigger.getAttribute('aria-expanded') === 'true';
      dropdownTrigger.setAttribute('aria-expanded', !isExpanded);
    });
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation11-container1 {
            display: contents;
          }
          .navigation11-thq-navigation-brand-elm {
            text-decoration: none;
          }
          .navigation11-thq-section-title-elm1 {
            fill: var(--color-accent);
            color: var(--color-accent);
            font-size: 50px;
          }
          .navigation11-thq-navigation-icon-sm-elm1 {
            width: 16px;
            height: 16px;
          }
          .navigation11-thq-navigation-link-elm4 {
            text-decoration: none;
          }
          .navigation11-thq-btn-elm1 {
            text-decoration: none;
          }
          .navigation11-thq-navigation-icon-md-elm1 {
            width: 24px;
            height: 24px;
          }
          .navigation11-thq-navigation-icon-md-elm2 {
            width: 24px;
            height: 24px;
          }
          .navigation11-thq-btn-elm3 {
            width: 100%;
          }
          .navigation11-thq-btn-elm4 {
            width: 100%;
          }
          .navigation11-container6 {
            display: none;
          }
          .navigation11-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation11
