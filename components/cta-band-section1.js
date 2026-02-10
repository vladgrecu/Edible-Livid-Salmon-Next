import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import CtaSection11 from './cta-section11'
import FeaturesSection2 from './features-section2'
import FeaturesSection1 from './features-section1'
import InteractiveHero11112 from './interactive-hero11112'
import MissionSection from './mission-section'
import TeamSection from './team-section'
import TrustSection from './trust-section'
import WhyExistSection from './why-exist-section'
import WhatIsSection from './what-is-section'

const CtaBandSection1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-band-section1-thq-cta-band-section-elm cta-band-section">
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
                  <span className="cta-band-section1-text106">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Q_W9NM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-band-section1-text107">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_XU7oEl'),
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
                        <span className="cta-band-section1-text108">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Kpp2-1'),
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
                        <span className="cta-band-section1-text105">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qagtz_'),
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
        <CtaSection11
          btn={
            <Fragment>
              <span className="cta-band-section1-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2BfQHo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="cta-band-section1-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4ekmFZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cta-band-section1-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6Fi4RY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cta-band-section1-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vcW1Bn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cta-band-section1-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EbB9ap'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cta-band-section1-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oj8oyZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__6P2_z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="cta-section11root-class-name1"
          sectionTitle1={
            <Fragment>
              <span className="cta-band-section1-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6jTWmB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle2={
            <Fragment>
              <span className="cta-band-section1-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QtecWw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          formDisclaimer={
            <Fragment>
              <span className="cta-band-section1-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uu7JED'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6T6aCg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8321Bi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaSection11>
        <FeaturesSection2
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jsPjwW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="features-section2root-class-name1"
          sectionTitle1={
            <Fragment>
              <span className="cta-band-section1-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CeifS5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle2={
            <Fragment>
              <span className="cta-band-section1-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zCtf5P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle3={
            <Fragment>
              <span className="cta-band-section1-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jHDTru'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle4={
            <Fragment>
              <span className="cta-band-section1-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__j9IEe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle5={
            <Fragment>
              <span className="cta-band-section1-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o1lRhL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LlpStj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="cta-band-section1-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_H6aVWC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="cta-band-section1-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mrKP8n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="cta-band-section1-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EiLz4i'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent4={
            <Fragment>
              <span className="cta-band-section1-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_opyEIV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aUX8-D'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FeaturesSection2>
        <FeaturesSection1
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CbQBgH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="features-section1root-class-name1"
          sectionTitle1={
            <Fragment>
              <span className="cta-band-section1-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_g120ii'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle2={
            <Fragment>
              <span className="cta-band-section1-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ah4P1r'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle3={
            <Fragment>
              <span className="cta-band-section1-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qncvrc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle4={
            <Fragment>
              <span className="cta-band-section1-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bXPHYA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle5={
            <Fragment>
              <span className="cta-band-section1-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6NiEZT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9ImB5L'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="cta-band-section1-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ta-KWw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="cta-band-section1-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9UTZT5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="cta-band-section1-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3O5ch4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent4={
            <Fragment>
              <span className="cta-band-section1-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wth3PW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ko6D19'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FeaturesSection1>
        <InteractiveHero11112
          rootClassName="interactive-hero11112root-class-name1"
          locale={props?.locale ?? ''}
        ></InteractiveHero11112>
        <MissionSection
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1tk9TF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="mission-sectionroot-class-name1"
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DZ9IVn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="cta-band-section1-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KdFV9E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="cta-band-section1-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_afN4C_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="cta-band-section1-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_As6c2m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kFdung'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section1-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kyHuQI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="cta-band-section1-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4oDfr5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></MissionSection>
        <TeamSection
          chip={
            <Fragment>
              <span className="cta-band-section1-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IMyZTL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          chip1={
            <Fragment>
              <span className="cta-band-section1-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VhQcBW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          chip2={
            <Fragment>
              <span className="cta-band-section1-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iEJTJd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gBaitw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="team-sectionroot-class-name1"
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QEqLpx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pRYFyB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section1-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_59pBR7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="cta-band-section1-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rN9VmX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="cta-band-section1-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_czxf2B'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle4={
            <Fragment>
              <span className="cta-band-section1-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__jkUwg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle5={
            <Fragment>
              <span className="cta-band-section1-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wSMIq1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TeamSection>
        <TrustSection
          text={
            <Fragment>
              <span className="cta-band-section1-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IcTY1K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cta-band-section1-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VbUDPX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cta-band-section1-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4emvj3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cta-band-section1-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tMnc9k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cta-band-section1-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FkBiy5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cta-band-section1-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AFvjb_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="cta-band-section1-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hmXoZW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="cta-band-section1-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QmdANx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="cta-band-section1-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ExlJvc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q0ZI4E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="trust-sectionroot-class-name1"
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OMbZT2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5XvI0k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section1-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6nfHyz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TrustSection>
        <WhyExistSection
          text={
            <Fragment>
              <span className="cta-band-section1-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vnpEGK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heroTitle={
            <Fragment>
              <span className="cta-band-section1-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aFbUuN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark={
            <Fragment>
              <span className="cta-band-section1-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uOCZyt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark1={
            <Fragment>
              <span className="cta-band-section1-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lQT03b'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="why-exist-sectionroot-class-name1"
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_smVvyo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plaqueStatement={
            <Fragment>
              <span className="cta-band-section1-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ma34Bp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          closingStatement={
            <Fragment>
              <span className="cta-band-section1-text86">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vzqyb8'),
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
              <span className="cta-band-section1-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fmpr9M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cta-band-section1-text88">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K3Og71'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cta-band-section1-text89">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cN7jR9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cta-band-section1-text90">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gsNoc-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cta-band-section1-text91">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3JVHXD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cta-band-section1-text92">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wRsaro'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="cta-band-section1-text93">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gO3iOw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="cta-band-section1-text94">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sef7k5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel={
            <Fragment>
              <span className="cta-band-section1-text95">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c40XBQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel1={
            <Fragment>
              <span className="cta-band-section1-text96">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_caEW2W'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel2={
            <Fragment>
              <span className="cta-band-section1-text97">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RzJXnc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel3={
            <Fragment>
              <span className="cta-band-section1-text98">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7yYGs5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="cta-band-section1-text99">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_92MJXT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="what-is-sectionroot-class-name1"
          sectionContent={
            <Fragment>
              <span className="cta-band-section1-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YoFcBL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="cta-band-section1-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_reoWrH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="cta-band-section1-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8Vx_bp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="cta-band-section1-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z2k0BU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="cta-band-section1-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_e8rmZh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></WhatIsSection>
      </section>
      <style jsx>
        {`
          .cta-band-section1-thq-cta-band-section-elm {
            position: relative;
          }
          .cta-band-section1-text12 {
            display: inline-block;
          }
          .cta-band-section1-text13 {
            display: inline-block;
          }
          .cta-band-section1-text14 {
            display: inline-block;
          }
          .cta-band-section1-text15 {
            display: inline-block;
          }
          .cta-band-section1-text16 {
            display: inline-block;
          }
          .cta-band-section1-text17 {
            display: inline-block;
          }
          .cta-band-section1-text18 {
            display: inline-block;
          }
          .cta-band-section1-text19 {
            display: inline-block;
          }
          .cta-band-section1-text20 {
            display: inline-block;
          }
          .cta-band-section1-text21 {
            display: inline-block;
          }
          .cta-band-section1-text22 {
            display: inline-block;
          }
          .cta-band-section1-text23 {
            display: inline-block;
          }
          .cta-band-section1-text24 {
            display: inline-block;
          }
          .cta-band-section1-text25 {
            display: inline-block;
          }
          .cta-band-section1-text26 {
            display: inline-block;
          }
          .cta-band-section1-text27 {
            display: inline-block;
          }
          .cta-band-section1-text28 {
            display: inline-block;
          }
          .cta-band-section1-text29 {
            display: inline-block;
          }
          .cta-band-section1-text30 {
            display: inline-block;
          }
          .cta-band-section1-text31 {
            display: inline-block;
          }
          .cta-band-section1-text32 {
            display: inline-block;
          }
          .cta-band-section1-text33 {
            display: inline-block;
          }
          .cta-band-section1-text34 {
            display: inline-block;
          }
          .cta-band-section1-text35 {
            display: inline-block;
          }
          .cta-band-section1-text36 {
            display: inline-block;
          }
          .cta-band-section1-text37 {
            display: inline-block;
          }
          .cta-band-section1-text38 {
            display: inline-block;
          }
          .cta-band-section1-text39 {
            display: inline-block;
          }
          .cta-band-section1-text40 {
            display: inline-block;
          }
          .cta-band-section1-text41 {
            display: inline-block;
          }
          .cta-band-section1-text42 {
            display: inline-block;
          }
          .cta-band-section1-text43 {
            display: inline-block;
          }
          .cta-band-section1-text44 {
            display: inline-block;
          }
          .cta-band-section1-text45 {
            display: inline-block;
          }
          .cta-band-section1-text46 {
            display: inline-block;
          }
          .cta-band-section1-text47 {
            display: inline-block;
          }
          .cta-band-section1-text48 {
            display: inline-block;
          }
          .cta-band-section1-text49 {
            display: inline-block;
          }
          .cta-band-section1-text50 {
            display: inline-block;
          }
          .cta-band-section1-text51 {
            display: inline-block;
          }
          .cta-band-section1-text52 {
            display: inline-block;
          }
          .cta-band-section1-text53 {
            display: inline-block;
          }
          .cta-band-section1-text54 {
            display: inline-block;
          }
          .cta-band-section1-text55 {
            display: inline-block;
          }
          .cta-band-section1-text56 {
            display: inline-block;
          }
          .cta-band-section1-text57 {
            display: inline-block;
          }
          .cta-band-section1-text58 {
            display: inline-block;
          }
          .cta-band-section1-text59 {
            display: inline-block;
          }
          .cta-band-section1-text60 {
            display: inline-block;
          }
          .cta-band-section1-text61 {
            display: inline-block;
          }
          .cta-band-section1-text62 {
            display: inline-block;
          }
          .cta-band-section1-text63 {
            display: inline-block;
          }
          .cta-band-section1-text64 {
            display: inline-block;
          }
          .cta-band-section1-text65 {
            display: inline-block;
          }
          .cta-band-section1-text66 {
            display: inline-block;
          }
          .cta-band-section1-text67 {
            display: inline-block;
          }
          .cta-band-section1-text68 {
            display: inline-block;
          }
          .cta-band-section1-text69 {
            display: inline-block;
          }
          .cta-band-section1-text70 {
            display: inline-block;
          }
          .cta-band-section1-text71 {
            display: inline-block;
          }
          .cta-band-section1-text72 {
            display: inline-block;
          }
          .cta-band-section1-text73 {
            display: inline-block;
          }
          .cta-band-section1-text74 {
            display: inline-block;
          }
          .cta-band-section1-text75 {
            display: inline-block;
          }
          .cta-band-section1-text76 {
            display: inline-block;
          }
          .cta-band-section1-text77 {
            display: inline-block;
          }
          .cta-band-section1-text78 {
            display: inline-block;
          }
          .cta-band-section1-text79 {
            display: inline-block;
          }
          .cta-band-section1-text80 {
            display: inline-block;
          }
          .cta-band-section1-text81 {
            display: inline-block;
          }
          .cta-band-section1-text82 {
            display: inline-block;
          }
          .cta-band-section1-text83 {
            display: inline-block;
          }
          .cta-band-section1-text84 {
            display: inline-block;
          }
          .cta-band-section1-text85 {
            display: inline-block;
          }
          .cta-band-section1-text86 {
            display: inline-block;
          }
          .cta-band-section1-text87 {
            display: inline-block;
          }
          .cta-band-section1-text88 {
            display: inline-block;
          }
          .cta-band-section1-text89 {
            display: inline-block;
          }
          .cta-band-section1-text90 {
            display: inline-block;
          }
          .cta-band-section1-text91 {
            display: inline-block;
          }
          .cta-band-section1-text92 {
            display: inline-block;
          }
          .cta-band-section1-text93 {
            display: inline-block;
          }
          .cta-band-section1-text94 {
            display: inline-block;
          }
          .cta-band-section1-text95 {
            display: inline-block;
          }
          .cta-band-section1-text96 {
            display: inline-block;
          }
          .cta-band-section1-text97 {
            display: inline-block;
          }
          .cta-band-section1-text98 {
            display: inline-block;
          }
          .cta-band-section1-text99 {
            display: inline-block;
          }
          .cta-band-section1-text100 {
            display: inline-block;
          }
          .cta-band-section1-text101 {
            display: inline-block;
          }
          .cta-band-section1-text102 {
            display: inline-block;
          }
          .cta-band-section1-text103 {
            display: inline-block;
          }
          .cta-band-section1-text104 {
            display: inline-block;
          }
          .cta-band-section1-text105 {
            display: inline-block;
          }
          .cta-band-section1-text106 {
            display: inline-block;
          }
          .cta-band-section1-text107 {
            display: inline-block;
          }
          .cta-band-section1-text108 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaBandSection1.defaultProps = {
  text1: undefined,
  sectionTitle: undefined,
  sectionContent: undefined,
  text: undefined,
}

CtaBandSection1.propTypes = {
  text1: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
  text: PropTypes.element,
}

export default CtaBandSection1
