import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import WhyExistSection from './why-exist-section'
import WhatIsSection from './what-is-section'
import TrustSection from './trust-section'
import TimelineSection from './timeline-section'
import TestimonialsSection from './testimonials-section'

const CtaBandSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-band-section-thq-cta-band-section-elm cta-band-section">
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
                  <span className="cta-band-section-text73">
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
                  <span className="cta-band-section-text76">
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
                        <span className="cta-band-section-text75">
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
                        <span className="cta-band-section-text74">
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
        <WhyExistSection
          text={
            <Fragment>
              <span className="cta-band-section-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ukIsCe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heroTitle={
            <Fragment>
              <span className="cta-band-section-text13">
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
              <span className="cta-band-section-text14">
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
              <span className="cta-band-section-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yOVA-2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="why-exist-sectionroot-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section-text16">
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
              <span className="cta-band-section-text17">
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
              <span className="cta-band-section-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8JLngs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></WhyExistSection>
        <WhatIsSection
          text={
            <Fragment>
              <span className="cta-band-section-text19">
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
              <span className="cta-band-section-text20">
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
              <span className="cta-band-section-text21">
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
              <span className="cta-band-section-text22">
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
              <span className="cta-band-section-text23">
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
              <span className="cta-band-section-text24">
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
              <span className="cta-band-section-text25">
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
              <span className="cta-band-section-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_41KKlD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel={
            <Fragment>
              <span className="cta-band-section-text27">
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
              <span className="cta-band-section-text28">
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
              <span className="cta-band-section-text29">
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
              <span className="cta-band-section-text30">
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
              <span className="cta-band-section-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BYR8YR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="what-is-sectionroot-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section-text32">
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
              <span className="cta-band-section-text33">
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
              <span className="cta-band-section-text34">
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
              <span className="cta-band-section-text35">
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
              <span className="cta-band-section-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EGPUGW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></WhatIsSection>
        <TrustSection
          text={
            <Fragment>
              <span className="cta-band-section-text37">
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
              <span className="cta-band-section-text38">
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
              <span className="cta-band-section-text39">
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
              <span className="cta-band-section-text40">
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
              <span className="cta-band-section-text41">
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
              <span className="cta-band-section-text42">
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
              <span className="cta-band-section-text43">
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
              <span className="cta-band-section-text44">
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
              <span className="cta-band-section-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jg833c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UxpbEu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="trust-sectionroot-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section-text47">
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
              <span className="cta-band-section-text48">
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
              <span className="cta-band-section-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jk4J9X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TrustSection>
        <TimelineSection
          dateStamp={
            <Fragment>
              <span className="cta-band-section-text50">
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
              <span className="cta-band-section-text51">
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
              <span className="cta-band-section-text52">
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
              <span className="cta-band-section-text53">
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
              <span className="cta-band-section-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IOFG70'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="timeline-sectionroot-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section-text55">
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
              <span className="cta-band-section-text56">
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
              <span className="cta-band-section-text57">
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
              <span className="cta-band-section-text58">
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
              <span className="cta-band-section-text59">
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
              <span className="cta-band-section-text60">
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
              <span className="cta-band-section-text61">
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
              <span className="cta-band-section-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tXgy-f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TimelineSection>
        <TestimonialsSection
          authorName={
            <Fragment>
              <span className="cta-band-section-text63">
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
              <span className="cta-band-section-text64">
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
              <span className="cta-band-section-text65">
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
              <span className="cta-band-section-text66">
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
              <span className="cta-band-section-text67">
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
              <span className="cta-band-section-text68">
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
              <span className="cta-band-section-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B-eVyY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="testimonials-sectionroot-class-name"
          sectionContent={
            <Fragment>
              <span className="cta-band-section-text70">
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
              <span className="cta-band-section-text71">
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
              <span className="cta-band-section-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6K_Ztl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TestimonialsSection>
      </section>
      <style jsx>
        {`
          .cta-band-section-thq-cta-band-section-elm {
            position: relative;
          }
          .cta-band-section-text12 {
            display: inline-block;
          }
          .cta-band-section-text13 {
            display: inline-block;
          }
          .cta-band-section-text14 {
            display: inline-block;
          }
          .cta-band-section-text15 {
            display: inline-block;
          }
          .cta-band-section-text16 {
            display: inline-block;
          }
          .cta-band-section-text17 {
            display: inline-block;
          }
          .cta-band-section-text18 {
            display: inline-block;
          }
          .cta-band-section-text19 {
            display: inline-block;
          }
          .cta-band-section-text20 {
            display: inline-block;
          }
          .cta-band-section-text21 {
            display: inline-block;
          }
          .cta-band-section-text22 {
            display: inline-block;
          }
          .cta-band-section-text23 {
            display: inline-block;
          }
          .cta-band-section-text24 {
            display: inline-block;
          }
          .cta-band-section-text25 {
            display: inline-block;
          }
          .cta-band-section-text26 {
            display: inline-block;
          }
          .cta-band-section-text27 {
            display: inline-block;
          }
          .cta-band-section-text28 {
            display: inline-block;
          }
          .cta-band-section-text29 {
            display: inline-block;
          }
          .cta-band-section-text30 {
            display: inline-block;
          }
          .cta-band-section-text31 {
            display: inline-block;
          }
          .cta-band-section-text32 {
            display: inline-block;
          }
          .cta-band-section-text33 {
            display: inline-block;
          }
          .cta-band-section-text34 {
            display: inline-block;
          }
          .cta-band-section-text35 {
            display: inline-block;
          }
          .cta-band-section-text36 {
            display: inline-block;
          }
          .cta-band-section-text37 {
            display: inline-block;
          }
          .cta-band-section-text38 {
            display: inline-block;
          }
          .cta-band-section-text39 {
            display: inline-block;
          }
          .cta-band-section-text40 {
            display: inline-block;
          }
          .cta-band-section-text41 {
            display: inline-block;
          }
          .cta-band-section-text42 {
            display: inline-block;
          }
          .cta-band-section-text43 {
            display: inline-block;
          }
          .cta-band-section-text44 {
            display: inline-block;
          }
          .cta-band-section-text45 {
            display: inline-block;
          }
          .cta-band-section-text46 {
            display: inline-block;
          }
          .cta-band-section-text47 {
            display: inline-block;
          }
          .cta-band-section-text48 {
            display: inline-block;
          }
          .cta-band-section-text49 {
            display: inline-block;
          }
          .cta-band-section-text50 {
            display: inline-block;
          }
          .cta-band-section-text51 {
            display: inline-block;
          }
          .cta-band-section-text52 {
            display: inline-block;
          }
          .cta-band-section-text53 {
            display: inline-block;
          }
          .cta-band-section-text54 {
            display: inline-block;
          }
          .cta-band-section-text55 {
            display: inline-block;
          }
          .cta-band-section-text56 {
            display: inline-block;
          }
          .cta-band-section-text57 {
            display: inline-block;
          }
          .cta-band-section-text58 {
            display: inline-block;
          }
          .cta-band-section-text59 {
            display: inline-block;
          }
          .cta-band-section-text60 {
            display: inline-block;
          }
          .cta-band-section-text61 {
            display: inline-block;
          }
          .cta-band-section-text62 {
            display: inline-block;
          }
          .cta-band-section-text63 {
            display: inline-block;
          }
          .cta-band-section-text64 {
            display: inline-block;
          }
          .cta-band-section-text65 {
            display: inline-block;
          }
          .cta-band-section-text66 {
            display: inline-block;
          }
          .cta-band-section-text67 {
            display: inline-block;
          }
          .cta-band-section-text68 {
            display: inline-block;
          }
          .cta-band-section-text69 {
            display: inline-block;
          }
          .cta-band-section-text70 {
            display: inline-block;
          }
          .cta-band-section-text71 {
            display: inline-block;
          }
          .cta-band-section-text72 {
            display: inline-block;
          }
          .cta-band-section-text73 {
            display: inline-block;
          }
          .cta-band-section-text74 {
            display: inline-block;
          }
          .cta-band-section-text75 {
            display: inline-block;
          }
          .cta-band-section-text76 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaBandSection.defaultProps = {
  sectionTitle: undefined,
  text1: undefined,
  text: undefined,
  sectionContent: undefined,
}

CtaBandSection.propTypes = {
  sectionTitle: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default CtaBandSection
