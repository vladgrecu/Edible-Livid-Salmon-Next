import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const PricingPlans = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="pricing-plans-container1">
        <section id="pricing-plans" className="pricing-plans-section">
          <div className="pricing-plans-container">
            <div className="pricing-plans-header">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_2mdhAH'),
                  }}
                ></span>
              </h2>
              <p className="section-content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionContent_fhIyII'),
                  }}
                ></span>
              </p>
              <div className="pricing-plans-toggle-wrapper">
                <span className="pricing-plans-toggle-label">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('PricingPlansToggleLabel_vxEkSg'),
                    }}
                  ></span>
                </span>
                <button
                  id="pricingToggle"
                  aria-label="Toggle between monthly and annual billing"
                  aria-pressed="false"
                  className="pricing-plans-toggle-btn"
                >
                  <span className="pricing-plans-thq-pricing-plans-toggle-indicator-elm"></span>
                </button>
                <span className="pricing-plans-toggle-label">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('PricingPlansToggleLabel_imj4JM'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div className="pricing-plans-layout">
              <div className="pricing-plans-grid">
                <article className="pricing-plans-card">
                  <div className="pricing-plans-card-header">
                    <h3 className="pricing-plans-card-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardTitle_-4AvLI'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_bkTKXE'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_O1jQr3'
                            ),
                          }}
                        ></span>
                      </span>
                      <span
                        data-annual="24"
                        data-monthly="29"
                        className="pricing-plans-amount"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansAmount_xLi69J'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod_S0nxig'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                  <ul className="pricing-plans-features">
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ICifmM'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CDWbdI'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XZK57I'),
                          }}
                        ></span>
                      </span>
                    </li>
                  </ul>
                  <a href="Homepage">
                    <div className="btn pricing-plans-btn btn-outline">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lQu9mI'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </article>
                <article className="pricing-plans-card-featured pricing-plans-card">
                  <div className="pricing-plans-card-header">
                    <div className="pricing-plans-tag">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Dww2D4'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <h3 className="pricing-plans-card-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardTitle_BHw8df'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_s6704k'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_FRKgeU'
                            ),
                          }}
                        ></span>
                      </span>
                      <span
                        data-annual="64"
                        data-monthly="79"
                        className="pricing-plans-amount"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansAmount__TA__0'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod_ju2AZr'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                  <ul className="pricing-plans-features">
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cBU9uv'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_u5-vti'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_idptHI'),
                          }}
                        ></span>
                      </span>
                    </li>
                  </ul>
                  <a href="Homepage">
                    <div className="btn btn-primary pricing-plans-btn">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BPlylZ'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </article>
                <article className="pricing-plans-card">
                  <div className="pricing-plans-card-header">
                    <h3 className="pricing-plans-card-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardTitle_a8SLkB'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_eudl7V'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_gzOSAU'
                            ),
                          }}
                        ></span>
                      </span>
                      <span
                        data-annual="159"
                        data-monthly="199"
                        className="pricing-plans-amount"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansAmount_Grp5aY'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod_BcX4B1'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                  <ul className="pricing-plans-features">
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_j1Dwts'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6I44tx'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ujHEGU'),
                          }}
                        ></span>
                      </span>
                    </li>
                  </ul>
                  <a href="Homepage">
                    <div className="btn pricing-plans-btn btn-outline">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bgno1W'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </article>
                <article className="pricing-plans-card">
                  <div className="pricing-plans-card-header">
                    <h3 className="pricing-plans-card-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardTitle_vorl3d'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_6buUgm'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-amount">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansAmount_cZr2DL'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                  <ul className="pricing-plans-features">
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_rH-IGG'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Hk7wnp'),
                          }}
                        ></span>
                      </span>
                    </li>
                    <li className="pricing-plans-feature-item">
                      <div className="pricing-plans-feature-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jZyDeB'),
                          }}
                        ></span>
                      </span>
                    </li>
                  </ul>
                  <a href="Homepage">
                    <div className="btn pricing-plans-btn btn-outline">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0WOuiJ'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </article>
              </div>
              <aside className="pricing-plans-addon">
                <div className="pricing-plans-addon-inner">
                  <div className="pricing-plans-addon-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_Vrv6e7'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_lplVEx'),
                      }}
                    ></span>
                  </p>
                  <div className="pricing-plans-addon-list">
                    <div className="pricing-plans-addon-item">
                      <div className="pricing-plans-addon-item-header">
                        <span className="pricing-plans-addon-name">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonName_HadZFQ'
                              ),
                            }}
                          ></span>
                        </span>
                        <span className="pricing-plans-addon-price">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonPrice_QtkVXG'
                              ),
                            }}
                          ></span>
                        </span>
                      </div>
                      <p className="pricing-plans-addon-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansAddonDesc_29E2hj'
                            ),
                          }}
                        ></span>
                      </p>
                    </div>
                    <div className="pricing-plans-addon-item">
                      <div className="pricing-plans-addon-item-header">
                        <span className="pricing-plans-addon-name">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonName_nQJGnO'
                              ),
                            }}
                          ></span>
                        </span>
                        <span className="pricing-plans-addon-price">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonPrice_xqRLO6'
                              ),
                            }}
                          ></span>
                        </span>
                      </div>
                      <p className="pricing-plans-addon-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansAddonDesc_kta81D'
                            ),
                          }}
                        ></span>
                      </p>
                    </div>
                  </div>
                  <div className="pricing-plans-security-badge">
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
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WmarW9'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <div className="pricing-plans-container2">
          <div className="pricing-plans-container3">
            <Script
              html={`<script defer data-name="pricing-plans-logic">
(function(){
  const toggleBtn = document.getElementById("pricingToggle")
  const priceAmounts = document.querySelectorAll(".pricing-plans-amount")

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isAnnual = toggleBtn.classList.toggle("is-active")
      toggleBtn.setAttribute("aria-pressed", isAnnual)

      priceAmounts.forEach((amount) => {
        const monthlyValue = amount.getAttribute("data-monthly")
        const annualValue = amount.getAttribute("data-annual")

        if (monthlyValue && annualValue) {
          // Add a small fade effect during transition
          amount.style.opacity = "0"

          setTimeout(() => {
            amount.textContent = isAnnual ? annualValue : monthlyValue
            amount.style.opacity = "1"
          }, 150)
        }
      })
    })
  }

  // Smooth opacity transition for price changes
  priceAmounts.forEach((amount) => {
    amount.style.transition = "opacity 0.2s ease"
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pricing-plans-container1 {
            display: contents;
          }
          .pricing-plans-thq-pricing-plans-toggle-indicator-elm {
            width: 20px;
            height: 20px;
            display: block;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 50%;
            background-color: var(--color-on-primary);
          }
          .pricing-plans-container2 {
            display: none;
          }
          .pricing-plans-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default PricingPlans
