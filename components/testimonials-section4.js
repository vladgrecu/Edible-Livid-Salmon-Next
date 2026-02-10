import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialsSection4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`testimonials-section4-thq-thq-testimonials-section-elm-elm testimonials-section ${props.rootClassName} `}
      >
        <div className="testimonials-carousel-wrapper">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="testimonials-section4-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_Fzp7UQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div id="testimonialSlider" className="testimonials-container">
            <div className="testimonial-card">
              <div className="quote-icon">
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
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="testimonials-section4-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_ylzUOB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName ?? (
                    <Fragment>
                      <span className="testimonials-section4-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_Lg7auJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole ?? (
                    <Fragment>
                      <span className="testimonials-section4-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_tY5dmt'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
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
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="testimonials-section4-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_6sWZfy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName1 ?? (
                    <Fragment>
                      <span className="testimonials-section4-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_cSDYaT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole1 ?? (
                    <Fragment>
                      <span className="testimonials-section4-text12">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_E1OU0z'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
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
              <p className="section-content">
                {props.sectionContent2 ?? (
                  <Fragment>
                    <span className="testimonials-section4-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_uS3Zxc'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName2 ?? (
                    <Fragment>
                      <span className="testimonials-section4-text13">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_Lz9oEf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole2 ?? (
                    <Fragment>
                      <span className="testimonials-section4-text10">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_4hsanO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button id="prevBtn" className="carousel-btn prev">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5m7 7l-7-7l7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button id="nextBtn" className="carousel-btn next">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
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
        </div>
      </section>
      <style jsx>
        {`
          .testimonials-section4-thq-thq-testimonials-section-elm-elm {
            position: relative;
          }
          .testimonials-section4-text10 {
            display: inline-block;
          }
          .testimonials-section4-text11 {
            display: inline-block;
          }
          .testimonials-section4-text12 {
            display: inline-block;
          }
          .testimonials-section4-text13 {
            display: inline-block;
          }
          .testimonials-section4-text14 {
            display: inline-block;
          }
          .testimonials-section4-text15 {
            display: inline-block;
          }
          .testimonials-section4-text16 {
            display: inline-block;
          }
          .testimonials-section4-text17 {
            display: inline-block;
          }
          .testimonials-section4-text18 {
            display: inline-block;
          }
          .testimonials-section4-text19 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TestimonialsSection4.defaultProps = {
  authorRole2: undefined,
  sectionContent1: undefined,
  authorRole1: undefined,
  authorName2: undefined,
  sectionContent2: undefined,
  authorName: undefined,
  sectionTitle: undefined,
  authorName1: undefined,
  sectionContent: undefined,
  authorRole: undefined,
  rootClassName: '',
}

TestimonialsSection4.propTypes = {
  authorRole2: PropTypes.element,
  sectionContent1: PropTypes.element,
  authorRole1: PropTypes.element,
  authorName2: PropTypes.element,
  sectionContent2: PropTypes.element,
  authorName: PropTypes.element,
  sectionTitle: PropTypes.element,
  authorName1: PropTypes.element,
  sectionContent: PropTypes.element,
  authorRole: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default TestimonialsSection4
