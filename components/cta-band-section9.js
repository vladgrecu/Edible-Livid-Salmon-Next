import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import WhyExistSection8 from './why-exist-section8'
import WhatIsSection8 from './what-is-section8'
import TrustSection8 from './trust-section8'
import TimelineSection3 from './timeline-section3'
import TestimonialsSection3 from './testimonials-section3'

const CtaBandSection9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-band-section9-thq-thq-cta-band-section-elm-elm cta-band-section">
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
                  <span className="cta-band-section9-text73">
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
                  <span className="cta-band-section9-text76">
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
                        <span className="cta-band-section9-text75">
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
                        <span className="cta-band-section9-text74">
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
        <WhyExistSection8
          text={
            <Fragment>
              <span className="cta-band-section9-text12">
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
              <span className="cta-band-section9-text13">
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
              <span className="cta-band-section9-text14">
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
              <span className="cta-band-section9-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yOVA-2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="why-exist-section8root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section9-text16">
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
              <span className="cta-band-section9-text17">
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
              <span className="cta-band-section9-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8JLngs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></WhyExistSection8>
        <WhatIsSection8
          text={
            <Fragment>
              <span className="cta-band-section9-text19">
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
              <span className="cta-band-section9-text20">
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
              <span className="cta-band-section9-text21">
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
              <span className="cta-band-section9-text22">
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
              <span className="cta-band-section9-text23">
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
              <span className="cta-band-section9-text24">
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
              <span className="cta-band-section9-text25">
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
              <span className="cta-band-section9-text26">
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
              <span className="cta-band-section9-text27">
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
              <span className="cta-band-section9-text28">
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
              <span className="cta-band-section9-text29">
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
              <span className="cta-band-section9-text30">
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
              <span className="cta-band-section9-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BYR8YR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="what-is-section8root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section9-text32">
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
              <span className="cta-band-section9-text33">
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
              <span className="cta-band-section9-text34">
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
              <span className="cta-band-section9-text35">
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
              <span className="cta-band-section9-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EGPUGW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></WhatIsSection8>
        <TrustSection8
          text={
            <Fragment>
              <span className="cta-band-section9-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U2mEPT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cta-band-section9-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xjXk2h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cta-band-section9-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hzkmq_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cta-band-section9-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sY8Afc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cta-band-section9-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8RT8pk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cta-band-section9-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HGol0A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="cta-band-section9-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n-JrQF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="cta-band-section9-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ACSdWU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="cta-band-section9-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jg833c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
          sectionTitle={
            <Fragment>
              <span className="cta-band-section9-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UxpbEu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="trust-section8root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section9-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ODa1Pr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section9-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qk_PVl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section9-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jk4J9X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></TrustSection8>
        <TimelineSection3
          locale={props?.locale ?? ''}
          dateStamp={
            <Fragment>
              <span className="cta-band-section9-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u1QAOB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp1={
            <Fragment>
              <span className="cta-band-section9-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y5LHHu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp2={
            <Fragment>
              <span className="cta-band-section9-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0V4qAV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp3={
            <Fragment>
              <span className="cta-band-section9-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zwq20O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section9-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IOFG70'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="timeline-section3root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section9-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cp1wGL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="cta-band-section9-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-T9hNx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="cta-band-section9-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_azfK0K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="cta-band-section9-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W5AUEA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section9-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5Xz5L5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section9-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kJzzYk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="cta-band-section9-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8XegKv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="cta-band-section9-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tXgy-f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></TimelineSection3>
        <TestimonialsSection3
          locale={props?.locale ?? ''}
          authorName={
            <Fragment>
              <span className="cta-band-section9-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eDNctQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          authorRole={
            <Fragment>
              <span className="cta-band-section9-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__MCNu-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          authorName1={
            <Fragment>
              <span className="cta-band-section9-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FBIQ-L'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          authorName2={
            <Fragment>
              <span className="cta-band-section9-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JuPBob'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          authorRole1={
            <Fragment>
              <span className="cta-band-section9-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hIrZdA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          authorRole2={
            <Fragment>
              <span className="cta-band-section9-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JqLr0w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section9-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B-eVyY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="testimonials-section3root-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section9-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FlJC1W'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="cta-band-section9-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8JX2lL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="cta-band-section9-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6K_Ztl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></TestimonialsSection3>
      </section>
      <style jsx>
        {`
          .cta-band-section9-thq-thq-cta-band-section-elm-elm {
            position: relative;
          }
          .cta-band-section9-text12 {
            display: inline-block;
          }
          .cta-band-section9-text13 {
            display: inline-block;
          }
          .cta-band-section9-text14 {
            display: inline-block;
          }
          .cta-band-section9-text15 {
            display: inline-block;
          }
          .cta-band-section9-text16 {
            display: inline-block;
          }
          .cta-band-section9-text17 {
            display: inline-block;
          }
          .cta-band-section9-text18 {
            display: inline-block;
          }
          .cta-band-section9-text19 {
            display: inline-block;
          }
          .cta-band-section9-text20 {
            display: inline-block;
          }
          .cta-band-section9-text21 {
            display: inline-block;
          }
          .cta-band-section9-text22 {
            display: inline-block;
          }
          .cta-band-section9-text23 {
            display: inline-block;
          }
          .cta-band-section9-text24 {
            display: inline-block;
          }
          .cta-band-section9-text25 {
            display: inline-block;
          }
          .cta-band-section9-text26 {
            display: inline-block;
          }
          .cta-band-section9-text27 {
            display: inline-block;
          }
          .cta-band-section9-text28 {
            display: inline-block;
          }
          .cta-band-section9-text29 {
            display: inline-block;
          }
          .cta-band-section9-text30 {
            display: inline-block;
          }
          .cta-band-section9-text31 {
            display: inline-block;
          }
          .cta-band-section9-text32 {
            display: inline-block;
          }
          .cta-band-section9-text33 {
            display: inline-block;
          }
          .cta-band-section9-text34 {
            display: inline-block;
          }
          .cta-band-section9-text35 {
            display: inline-block;
          }
          .cta-band-section9-text36 {
            display: inline-block;
          }
          .cta-band-section9-text37 {
            display: inline-block;
          }
          .cta-band-section9-text38 {
            display: inline-block;
          }
          .cta-band-section9-text39 {
            display: inline-block;
          }
          .cta-band-section9-text40 {
            display: inline-block;
          }
          .cta-band-section9-text41 {
            display: inline-block;
          }
          .cta-band-section9-text42 {
            display: inline-block;
          }
          .cta-band-section9-text43 {
            display: inline-block;
          }
          .cta-band-section9-text44 {
            display: inline-block;
          }
          .cta-band-section9-text45 {
            display: inline-block;
          }
          .cta-band-section9-text46 {
            display: inline-block;
          }
          .cta-band-section9-text47 {
            display: inline-block;
          }
          .cta-band-section9-text48 {
            display: inline-block;
          }
          .cta-band-section9-text49 {
            display: inline-block;
          }
          .cta-band-section9-text50 {
            display: inline-block;
          }
          .cta-band-section9-text51 {
            display: inline-block;
          }
          .cta-band-section9-text52 {
            display: inline-block;
          }
          .cta-band-section9-text53 {
            display: inline-block;
          }
          .cta-band-section9-text54 {
            display: inline-block;
          }
          .cta-band-section9-text55 {
            display: inline-block;
          }
          .cta-band-section9-text56 {
            display: inline-block;
          }
          .cta-band-section9-text57 {
            display: inline-block;
          }
          .cta-band-section9-text58 {
            display: inline-block;
          }
          .cta-band-section9-text59 {
            display: inline-block;
          }
          .cta-band-section9-text60 {
            display: inline-block;
          }
          .cta-band-section9-text61 {
            display: inline-block;
          }
          .cta-band-section9-text62 {
            display: inline-block;
          }
          .cta-band-section9-text63 {
            display: inline-block;
          }
          .cta-band-section9-text64 {
            display: inline-block;
          }
          .cta-band-section9-text65 {
            display: inline-block;
          }
          .cta-band-section9-text66 {
            display: inline-block;
          }
          .cta-band-section9-text67 {
            display: inline-block;
          }
          .cta-band-section9-text68 {
            display: inline-block;
          }
          .cta-band-section9-text69 {
            display: inline-block;
          }
          .cta-band-section9-text70 {
            display: inline-block;
          }
          .cta-band-section9-text71 {
            display: inline-block;
          }
          .cta-band-section9-text72 {
            display: inline-block;
          }
          .cta-band-section9-text73 {
            display: inline-block;
          }
          .cta-band-section9-text74 {
            display: inline-block;
          }
          .cta-band-section9-text75 {
            display: inline-block;
          }
          .cta-band-section9-text76 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaBandSection9.defaultProps = {
  sectionTitle: undefined,
  text1: undefined,
  text: undefined,
  sectionContent: undefined,
}

CtaBandSection9.propTypes = {
  sectionTitle: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default CtaBandSection9
