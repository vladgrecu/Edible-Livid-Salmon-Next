import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const SignIn11 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="sign-in11-container1">
        <Head>
          <title>{translate.raw('text_yzJFZg')}</title>
          <meta name="description" content={translate.raw('text_PL_CZ9')} />
          <meta property="og:title" content={translate.raw('text_yzJFZg')} />
          <meta
            property="og:description"
            content={translate.raw('text_PL_CZ9')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/sign-in11`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/sign-in11"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/sign-in11"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/sign-in11"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <section className="auth-section">
          <div className="auth-container">
            <div className="auth-layout">
              <aside className="auth-info">
                <div className="auth-info-content">
                  <h1 className="hero-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroTitle_jLqcLx'),
                      }}
                    ></span>
                  </h1>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_6jSHqL'),
                      }}
                    ></span>
                  </p>
                  <div className="auth-visual">
                    <img
                      alt="Streamlined workflow visualization"
                      src="https://images.pexels.com/photos/26109752/pexels-photo-26109752.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="auth-image"
                    />
                  </div>
                </div>
              </aside>
              <main className="sign-in11-thq-auth-forms-elm auth-forms">
                <div className="auth-card">
                  <div className="auth-tabs">
                    <button id="tab-login" className="active auth-tab">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthTab_8Y91fI'),
                        }}
                      ></span>
                    </button>
                    <button id="tab-register" className="auth-tab">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthTab_2_TaQI'),
                        }}
                      ></span>
                    </button>
                  </div>
                  <form
                    id="login-form"
                    action="/login"
                    method="POST"
                    data-form-id="2429bb79-ab7a-40cb-804f-07ef774e7613"
                    className="auth-form active"
                  >
                    <div className="sign-in-form-group">
                      <label htmlFor="login-email" className="form-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('FormLabel_4hkRii'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="email"
                        id="login-email"
                        name="email"
                        required="true"
                        placeholder="name@company.com"
                        data-form-field-id="login-email"
                        className="sign-in-form-input"
                      />
                    </div>
                    <div className="sign-in-form-group">
                      <label htmlFor="login-password" className="form-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('FormLabel_SlPySm'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        required="true"
                        placeholder="••••••••"
                        data-form-field-id="login-password"
                        className="sign-in-form-input"
                      />
                    </div>
                    <div className="form-actions">
                      <button
                        id="thq_button_nrtA"
                        name="button"
                        type="submit"
                        data-form-field-id="thq_button_nrtA"
                        className="btn btn-lg btn-primary"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('Btn_5yP4ym'),
                          }}
                        ></span>
                      </button>
                      <a href="#">
                        <div className="btn btn-link btn-sm">
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jGtmNz'),
                              }}
                            ></span>
                          </span>
                        </div>
                      </a>
                    </div>
                  </form>
                  <form
                    id="register-form"
                    action="/register"
                    method="POST"
                    data-form-id="9f9b6b38-9f4d-43d8-b1e6-bc321a3ca77e"
                    className="auth-form"
                  >
                    <div className="form-row">
                      <div className="sign-in-form-group">
                        <label htmlFor="reg-first" className="form-label">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('FormLabel__iEQkJ'),
                            }}
                          ></span>
                        </label>
                        <input
                          type="text"
                          id="reg-first"
                          name="first_name"
                          required="true"
                          placeholder="Jane"
                          data-form-field-id="reg-first"
                          className="sign-in-form-input"
                        />
                      </div>
                      <div className="sign-in-form-group">
                        <label htmlFor="reg-last" className="form-label">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('FormLabel_ABfWNL'),
                            }}
                          ></span>
                        </label>
                        <input
                          type="text"
                          id="reg-last"
                          name="last_name"
                          required="true"
                          placeholder="Doe"
                          data-form-field-id="reg-last"
                          className="sign-in-form-input"
                        />
                      </div>
                    </div>
                    <div className="sign-in-form-group">
                      <label htmlFor="reg-email" className="form-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('FormLabel_uXnEI1'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="email"
                        id="reg-email"
                        name="email"
                        required="true"
                        placeholder="jane@company.com"
                        data-form-field-id="reg-email"
                        className="sign-in-form-input"
                      />
                    </div>
                    <div className="sign-in-form-group">
                      <label htmlFor="reg-password" className="form-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('FormLabel_BxPN60'),
                          }}
                        ></span>
                      </label>
                      <input
                        type="password"
                        id="reg-password"
                        name="password"
                        required="true"
                        minlength="8"
                        placeholder="Min. 8 characters"
                        data-form-field-id="reg-password"
                        className="sign-in-form-input"
                      />
                    </div>
                    <div className="form-actions">
                      <button
                        id="thq_button_dsf-"
                        name="button"
                        type="submit"
                        data-form-field-id="thq_button_dsf-"
                        className="btn btn-lg btn-accent"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('Btn_44qtTc'),
                          }}
                        ></span>
                      </button>
                    </div>
                    <p className="form-footer">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FormFooter_qcWcDJ'),
                        }}
                      ></span>
                    </p>
                  </form>
                </div>
              </main>
            </div>
          </div>
        </section>
        <section className="sign-in-features-section">
          <div className="features-container">
            <div className="sign-in-features-header">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_Pm_WMM'),
                  }}
                ></span>
              </h2>
              <p className="section-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionSubtitle_pv5ake'),
                  }}
                ></span>
              </p>
            </div>
            <div className="features-bento">
              <div className="bento-wide bento-item">
                <div className="bento-content">
                  <div className="sign-in-bento-icon">
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
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_Fyb6Wo'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_uoL3fg'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="bento-media">
                  <img
                    alt="Cloud interface"
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="bento-img"
                  />
                </div>
              </div>
              <div className="bento-item">
                <div className="bento-content">
                  <div className="sign-in-bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_5XRmXx'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_lcEaTD'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="bento-item">
                <div className="bento-content">
                  <div className="sign-in-bento-icon">
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
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_FpDLWa'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_fbbDA6'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sign-in11-container2">
          <div className="sign-in11-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="sign-in11-container4">
          <div className="sign-in11-container5">
            <Script
              html={`<script defer data-name="auth-logic">
(function(){
  const loginTab = document.getElementById("tab-login")
  const registerTab = document.getElementById("tab-register")
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active")
    registerTab.classList.remove("active")
    loginForm.classList.add("active")
    registerForm.classList.remove("active")
  })

  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active")
    loginTab.classList.remove("active")
    registerForm.classList.add("active")
    loginForm.classList.remove("active")
  })

  // Basic validation visual feedback
  const inputs = document.querySelectorAll(".form-input")
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.checkValidity()) {
        input.style.borderColor = "var(--color-outline)"
      } else {
        input.style.borderColor = "#e74c3c"
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
      </div>
      <style jsx>
        {`
          .sign-in11-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .sign-in11-thq-auth-forms-elm {
            flex: 4;
          }
          .sign-in11-container2 {
            display: none;
          }
          .sign-in11-container3 {
            display: contents;
          }
          .sign-in11-container4 {
            display: none;
          }
          .sign-in11-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default SignIn11

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
