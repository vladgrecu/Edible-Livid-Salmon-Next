import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import WhyExistSection4 from './why-exist-section4'
import WhatIsSection4 from './what-is-section4'

const CtaBandSection5 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-band-section5-thq-thq-cta-band-section-elm-elm cta-band-section">
        <div className="portal-visual">
          <div className="portal-ring ring-outer"></div>
          <div className="portal-ring ring-inner"></div>
          <div className="portal-glow"></div>
        </div>
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-band-section5-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_NRYt8g'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-band-section5-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_g5YrGU'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta-actions">
              <a href="#">
                <div className="btn btn-xl btn-primary glowing-btn">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="cta-band-section5-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dtJb5H'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="btn btn-xl trace-btn btn-outline">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="cta-band-section5-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_3GGNSY'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <WhyExistSection4
          text={
            <Fragment>
              <span className="cta-band-section5-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ukIsCe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
          heroTitle={
            <Fragment>
              <span className="cta-band-section5-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BPznPR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark={
            <Fragment>
              <span className="cta-band-section5-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DcGeAB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark1={
            <Fragment>
              <span className="cta-band-section5-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yOVA-2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="why-exist-section4root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section5-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ee5nj2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plaqueStatement={
            <Fragment>
              <span className="cta-band-section5-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PK0dH5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          closingStatement={
            <Fragment>
              <span className="cta-band-section5-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8JLngs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></WhyExistSection4>
        <WhatIsSection4
          text={
            <Fragment>
              <span className="cta-band-section5-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wbSEaI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cta-band-section5-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5KqoXR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cta-band-section5-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hceNeR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cta-band-section5-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cj9EX5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cta-band-section5-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Gwtahv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cta-band-section5-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xqSRA4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="cta-band-section5-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uBoI2l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="cta-band-section5-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_41KKlD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
          specLabel={
            <Fragment>
              <span className="cta-band-section5-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OaRpGt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel1={
            <Fragment>
              <span className="cta-band-section5-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CB60Um'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel2={
            <Fragment>
              <span className="cta-band-section5-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3yVQNM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel3={
            <Fragment>
              <span className="cta-band-section5-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-Rixr0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section5-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BYR8YR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="what-is-section4root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section5-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZFhKyJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section5-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Rw59R0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section5-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FxVfI9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="cta-band-section5-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AtQm7p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="cta-band-section5-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EGPUGW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></WhatIsSection4>
      </section>
      <style jsx>
        {`
          .cta-band-section5-thq-thq-cta-band-section-elm-elm {
            position: relative;
          }
          .cta-band-section5-text12 {
            display: inline-block;
          }
          .cta-band-section5-text13 {
            display: inline-block;
          }
          .cta-band-section5-text14 {
            display: inline-block;
          }
          .cta-band-section5-text15 {
            display: inline-block;
          }
          .cta-band-section5-text16 {
            display: inline-block;
          }
          .cta-band-section5-text17 {
            display: inline-block;
          }
          .cta-band-section5-text18 {
            display: inline-block;
          }
          .cta-band-section5-text19 {
            display: inline-block;
          }
          .cta-band-section5-text20 {
            display: inline-block;
          }
          .cta-band-section5-text21 {
            display: inline-block;
          }
          .cta-band-section5-text22 {
            display: inline-block;
          }
          .cta-band-section5-text23 {
            display: inline-block;
          }
          .cta-band-section5-text24 {
            display: inline-block;
          }
          .cta-band-section5-text25 {
            display: inline-block;
          }
          .cta-band-section5-text26 {
            display: inline-block;
          }
          .cta-band-section5-text27 {
            display: inline-block;
          }
          .cta-band-section5-text28 {
            display: inline-block;
          }
          .cta-band-section5-text29 {
            display: inline-block;
          }
          .cta-band-section5-text30 {
            display: inline-block;
          }
          .cta-band-section5-text31 {
            display: inline-block;
          }
          .cta-band-section5-text32 {
            display: inline-block;
          }
          .cta-band-section5-text33 {
            display: inline-block;
          }
          .cta-band-section5-text34 {
            display: inline-block;
          }
          .cta-band-section5-text35 {
            display: inline-block;
          }
          .cta-band-section5-text36 {
            display: inline-block;
          }
          .cta-band-section5-text37 {
            display: inline-block;
          }
          .cta-band-section5-text38 {
            display: inline-block;
          }
          .cta-band-section5-text39 {
            display: inline-block;
          }
          .cta-band-section5-text40 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaBandSection5.defaultProps = {
  text: undefined,
  text1: undefined,
  sectionTitle: undefined,
  sectionContent: undefined,
}

CtaBandSection5.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default CtaBandSection5
