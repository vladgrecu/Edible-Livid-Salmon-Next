import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer1-container1">
        <footer className="footer-wrapper">
          <div aria-hidden="true" className="footer-wave-container">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="footer-wave-svg"
            >
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"></path>
            </svg>
          </div>
          <div className="footer-main-content">
            <div className="footer-grid">
              <div className="footer-brand-column">
                <a href="Homepage">
                  <div className="footer-logo-link">
                    <span className="footer-logo-text">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FooterLogoText_bKuX7K'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <p className="footer-brand-description section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_7CFP9P'),
                    }}
                  ></span>
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="GitHub" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <nav
                aria-labelledby="footer-platform-heading"
                className="footer-nav-column"
              >
                <h2
                  id="footer-platform-heading"
                  className="footer-nav-title section-subtitle"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_N5hbdm'),
                    }}
                  ></span>
                </h2>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_DTYRY2'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VvsZMB'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TufB9l'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dUKT57'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_LfG1rn'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                aria-labelledby="footer-company-heading"
                className="footer-nav-column"
              >
                <h2
                  id="footer-company-heading"
                  className="footer-nav-title section-subtitle"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_bo3cgF'),
                    }}
                  ></span>
                </h2>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_U3kS8c'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4xcRRn'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_sSVi4g'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iRqS_W'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4Mpfyj'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="footer-newsletter-column">
                <h2 className="footer-nav-title section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_HXYmcy'),
                    }}
                  ></span>
                </h2>
                <p className="footer-newsletter-text section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_mVcXNG'),
                    }}
                  ></span>
                </p>
                <form
                  action="/subscribe"
                  method="POST"
                  data-form-id="342caa3c-6237-4eda-a384-750d9dda2ee8"
                  className="footer-newsletter-form"
                >
                  <div className="footer-input-group">
                    <input
                      type="email"
                      id="thq_textinput_4MkT"
                      name="textinput"
                      required="true"
                      aria-label="Email address"
                      placeholder="Enter your email"
                      data-form-field-id="thq_textinput_4MkT"
                      className="footer-newsletter-input"
                    />
                    <button
                      id="thq_button_kjeF"
                      name="button"
                      type="submit"
                      aria-label="Subscribe"
                      data-form-field-id="thq_button_kjeF"
                      className="btn footer-newsletter-btn btn-secondary"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-legal-links">
                <span className="footer-copyright">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterCopyright_V3JJzB'),
                    }}
                  ></span>
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Kvq-9T'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lhtZPO'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5sP_oU'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-trust-badges">
                <span className="footer-badge">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterBadge_IogNnE'),
                    }}
                  ></span>
                </span>
                <span className="footer-badge">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterBadge_5kxioh'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer1-container2">
          <div className="footer1-container3">
            <Script
              html={`<script defer data-name="footer-newsletter-handler">
(function(){
  const newsletterForm = document.querySelector('.footer-newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      const emailInput = newsletterForm.querySelector('.footer-newsletter-input');
      const submitBtn = newsletterForm.querySelector('.footer-newsletter-btn');
      
      if (emailInput.checkValidity()) {
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        setTimeout(() => {
          emailInput.value = '';
          emailInput.placeholder = 'Thank you for joining!';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          
          setTimeout(() => {
            emailInput.placeholder = 'Enter your email';
          }, 3000);
        }, 1000);
      }
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
          .footer1-container1 {
            display: contents;
          }
          .footer1-container2 {
            display: none;
          }
          .footer1-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer1
