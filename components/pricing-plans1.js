import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const PricingPlans1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="pricing-plans1-container1">
        <section id="pricing-plans" className="pricing-plans-section">
          <div className="pricing-plans-container">
            <div className="pricing-plans-header">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_Mrnpb-'),
                  }}
                ></span>
              </h2>
              <p className="section-content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionContent_a3YNva'),
                  }}
                ></span>
              </p>
              <div className="pricing-plans-toggle-wrapper">
                <span className="pricing-plans-toggle-label">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('PricingPlansToggleLabel_YQwqgx'),
                    }}
                  ></span>
                </span>
                <button
                  id="pricingToggle"
                  aria-label="Toggle between monthly and annual billing"
                  aria-pressed="false"
                  className="pricing-plans-toggle-btn"
                >
                  <span className="pricing-plans1-thq-pricing-plans-toggle-indicator-elm"></span>
                </button>
                <span className="pricing-plans-toggle-label">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('PricingPlansToggleLabel_Jl8y4v'),
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
                          __html: translate.raw('PricingPlansCardTitle_3IL7ue'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_k841cP'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_ojEoQi'
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
                            __html: translate.raw('PricingPlansAmount__gEFOr'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod__3Js-t'),
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
                            __html: translate.raw('text_Tgn8XV'),
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
                            __html: translate.raw('text_hgRrUp'),
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
                            __html: translate.raw('text_iC-FAm'),
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
                            __html: translate.raw('text_aOSlOK'),
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
                            __html: translate.raw('text_RTlkLU'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <h3 className="pricing-plans-card-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardTitle_tSIDXd'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_svInMl'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_VnrDJQ'
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
                            __html: translate.raw('PricingPlansAmount_eGl7vh'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod_jbsjZU'),
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
                            __html: translate.raw('text_BeAGe0'),
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
                            __html: translate.raw('text_ZxPzKx'),
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
                            __html: translate.raw('text_604TsD'),
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
                            __html: translate.raw('text_hMZtV3'),
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
                          __html: translate.raw('PricingPlansCardTitle_FngVsN'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_OW3s6V'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-currency">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansCurrency_HbSzt5'
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
                            __html: translate.raw('PricingPlansAmount_hRjIWI'),
                          }}
                        ></span>
                      </span>
                      <span className="pricing-plans-period">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansPeriod_3MPysr'),
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
                            __html: translate.raw('text_hmBDuy'),
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
                            __html: translate.raw('text_qyNB4T'),
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
                            __html: translate.raw('text_7sKyV7'),
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
                            __html: translate.raw('text_EwewKq'),
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
                          __html: translate.raw('PricingPlansCardTitle_U2XmjY'),
                        }}
                      ></span>
                    </h3>
                    <p className="pricing-plans-card-desc">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('PricingPlansCardDesc_JkGjhG'),
                        }}
                      ></span>
                    </p>
                    <div className="pricing-plans-price-container">
                      <span className="pricing-plans-amount">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PricingPlansAmount_aXQR2s'),
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
                            __html: translate.raw('text_cjibn0'),
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
                            __html: translate.raw('text_lyG3fl'),
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
                            __html: translate.raw('text_uKvb09'),
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
                            __html: translate.raw('text_E8fukE'),
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
                        __html: translate.raw('SectionSubtitle_RnoPsj'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_fIP1Rs'),
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
                                'PricingPlansAddonName_h_maCR'
                              ),
                            }}
                          ></span>
                        </span>
                        <span className="pricing-plans-addon-price">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonPrice_CmAhBF'
                              ),
                            }}
                          ></span>
                        </span>
                      </div>
                      <p className="pricing-plans-addon-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansAddonDesc_umzhp5'
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
                                'PricingPlansAddonName_E_fwRw'
                              ),
                            }}
                          ></span>
                        </span>
                        <span className="pricing-plans-addon-price">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw(
                                'PricingPlansAddonPrice_ITD4QO'
                              ),
                            }}
                          ></span>
                        </span>
                      </div>
                      <p className="pricing-plans-addon-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw(
                              'PricingPlansAddonDesc_FfCgcL'
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
                          __html: translate.raw('text_738lsk'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <div className="pricing-plans1-container2">
          <div className="pricing-plans1-container3">
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
          .pricing-plans1-container1 {
            display: contents;
          }
          .pricing-plans1-thq-pricing-plans-toggle-indicator-elm {
            width: 20px;
            height: 20px;
            display: block;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 50%;
            background-color: var(--color-on-primary);
          }
          .pricing-plans1-container2 {
            display: none;
          }
          .pricing-plans1-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default PricingPlans1
