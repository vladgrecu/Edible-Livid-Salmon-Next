import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import MissionSection from '../components/mission-section'
import WhatIsSection from '../components/what-is-section'
import WhyExistSection from '../components/why-exist-section'
import PrinciplesSection from '../components/principles-section'
import TimelineSection from '../components/timeline-section'
import TeamSection from '../components/team-section'
import TrustSection from '../components/trust-section'
import CtaBandSection from '../components/cta-band-section'
import Footer from '../components/footer'
import InteractiveHero from '../components/interactive-hero'

const AboutNimbusCloud = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="about-nimbus-cloud-container1">
        <Head>
          <title>{translate.raw('static_gsHnii')}</title>
          <meta name="description" content={translate.raw('static_HFpDFP')} />
          <meta property="og:title" content={translate.raw('static_gsHnii')} />
          <meta
            property="og:description"
            content={translate.raw('static_HFpDFP')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/about-nimbus-cloud`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/about-nimbus-cloud"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/about-nimbus-cloud"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/about-nimbus-cloud"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <div className="about-nimbus-cloud-container2">
          <div className="about-nimbus-cloud-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}
</style>`}
            ></Script>
          </div>
        </div>
        <HeroSection
          heroEyebrow={
            <Fragment>
              <span className="about-nimbus-cloud-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dvPYxq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heroTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_utO9DI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heroSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ndbPrA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-nimbus-cloud-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CLykCV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-nimbus-cloud-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__ex4IQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-nimbus-cloud-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FirOKL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          consoleTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nLIq7I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-nimbus-cloud-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_36myNu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-nimbus-cloud-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__yTJf8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-nimbus-cloud-text109">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oe7R_x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-nimbus-cloud-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8LLdGd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-nimbus-cloud-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YRYmni'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-nimbus-cloud-text112">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_g-4C38'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-nimbus-cloud-text113">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s-HEQI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="about-nimbus-cloud-text114">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j3Kb5R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></HeroSection>
        <MissionSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text115">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JBOCVJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text116">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K7Ps8v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text117">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kXp2D1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="about-nimbus-cloud-text118">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ih5HoR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text119">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CB4Iy9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="about-nimbus-cloud-text120">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4wen8p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="about-nimbus-cloud-text121">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S2FJ4v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="about-nimbus-cloud-text122">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_binrLY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></MissionSection>
        <WhatIsSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text123">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dUTjAE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text124">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V1scpG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text125">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5OIBJv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text126">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IZfQCE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="about-nimbus-cloud-text127">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HJkYfd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="about-nimbus-cloud-text128">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V_kE1-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel={
            <Fragment>
              <span className="about-nimbus-cloud-text129">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vf-Ke9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel1={
            <Fragment>
              <span className="about-nimbus-cloud-text130">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2dbqus'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel2={
            <Fragment>
              <span className="about-nimbus-cloud-text131">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fNSSaf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          specLabel3={
            <Fragment>
              <span className="about-nimbus-cloud-text132">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HQtjhK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-nimbus-cloud-text133">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E7CSqd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-nimbus-cloud-text134">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EVOYTf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-nimbus-cloud-text135">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CrihNV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-nimbus-cloud-text136">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__-8w87'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-nimbus-cloud-text137">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__kQUIi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-nimbus-cloud-text138">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_d3DmYF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-nimbus-cloud-text139">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CG5jrv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-nimbus-cloud-text140">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DEwP9q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></WhatIsSection>
        <WhyExistSection
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text141">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JMLCvR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          closingStatement={
            <Fragment>
              <span className="about-nimbus-cloud-text142">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gvpzRo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heroTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text143">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EG3kfH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plaqueStatement={
            <Fragment>
              <span className="about-nimbus-cloud-text144">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pqWkIj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark={
            <Fragment>
              <span className="about-nimbus-cloud-text145">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EIPUJo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-nimbus-cloud-text146">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lmgl6U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          quoteMark1={
            <Fragment>
              <span className="about-nimbus-cloud-text147">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FgCy0F'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></WhyExistSection>
        <PrinciplesSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text148">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_img-SW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text149">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q-VM6N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="about-nimbus-cloud-text150">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5EwD_M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="about-nimbus-cloud-text151">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pmnr-l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="about-nimbus-cloud-text152">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zo6OL3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent4={
            <Fragment>
              <span className="about-nimbus-cloud-text153">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M84SMJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          principleLabel={
            <Fragment>
              <span className="about-nimbus-cloud-text154">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6OuRSs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text155">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_spBVKC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          principleLabel1={
            <Fragment>
              <span className="about-nimbus-cloud-text156">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_94N52P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text157">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GmcQUk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          principleLabel2={
            <Fragment>
              <span className="about-nimbus-cloud-text158">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lISI5v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="about-nimbus-cloud-text159">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HbV-nj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          principleLabel3={
            <Fragment>
              <span className="about-nimbus-cloud-text160">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jNVoFV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="about-nimbus-cloud-text161">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wsKTM-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          principleLabel4={
            <Fragment>
              <span className="about-nimbus-cloud-text162">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iXlL6n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle4={
            <Fragment>
              <span className="about-nimbus-cloud-text163">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_O3WywV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></PrinciplesSection>
        <TimelineSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text164">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q-P_M_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp={
            <Fragment>
              <span className="about-nimbus-cloud-text165">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qn8rxV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text166">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eFDVqR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text167">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_atcV1T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp1={
            <Fragment>
              <span className="about-nimbus-cloud-text168">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hsQakb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text169">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xHrQY9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="about-nimbus-cloud-text170">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i18yz1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp2={
            <Fragment>
              <span className="about-nimbus-cloud-text171">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MqjxbB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="about-nimbus-cloud-text172">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K5O56d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="about-nimbus-cloud-text173">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TD4lyw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          dateStamp3={
            <Fragment>
              <span className="about-nimbus-cloud-text174">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DXcBM_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="about-nimbus-cloud-text175">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pOWaO_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="about-nimbus-cloud-text176">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c5MXis'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TimelineSection>
        <TeamSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text177">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jYnL69'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text178">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vh9EN3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          chip={
            <Fragment>
              <span className="about-nimbus-cloud-text179">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sN4AzN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          chip1={
            <Fragment>
              <span className="about-nimbus-cloud-text180">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pZYtA1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          chip2={
            <Fragment>
              <span className="about-nimbus-cloud-text181">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3yeYxp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text182">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HTBiKO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text183">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T7rPSW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle2={
            <Fragment>
              <span className="about-nimbus-cloud-text184">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aw0wuk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle3={
            <Fragment>
              <span className="about-nimbus-cloud-text185">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cj5ez1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle4={
            <Fragment>
              <span className="about-nimbus-cloud-text186">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uyy-eM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle5={
            <Fragment>
              <span className="about-nimbus-cloud-text187">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__wbf4V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TeamSection>
        <TrustSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text188">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_740fnY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text189">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GoYj2j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle={
            <Fragment>
              <span className="about-nimbus-cloud-text190">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0McmWc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionSubtitle1={
            <Fragment>
              <span className="about-nimbus-cloud-text191">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_znJK31'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-nimbus-cloud-text192">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SEnGob'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-nimbus-cloud-text193">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B3D-Ma'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-nimbus-cloud-text194">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ToLaww'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-nimbus-cloud-text195">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1e2hfj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-nimbus-cloud-text196">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BTC0rq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-nimbus-cloud-text197">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZRVHPs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-nimbus-cloud-text198">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ji7U9V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-nimbus-cloud-text199">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ARDQCL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-nimbus-cloud-text200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zGazla'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TrustSection>
        <CtaBandSection
          sectionTitle={
            <Fragment>
              <span className="about-nimbus-cloud-text201">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8Bsq-l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="about-nimbus-cloud-text202">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FVdmKc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-nimbus-cloud-text203">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GVrU7w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-nimbus-cloud-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wkh3-o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection>
        <div className="about-nimbus-cloud-container4">
          <div className="about-nimbus-cloud-container5">
            <Script
              html={`<style>
        @keyframes scanline {0% {top: -100%;}
100% {top: 200%;}}@keyframes beam-flow {0% {left: 0;}
100% {left: 100%;}}@keyframes pulse-dot {0% {opacity: 1;}
50% {opacity: 0.3;}
100% {opacity: 1;}}@keyframes sweep {0% {transform: translate(-50%, -50%);}
100% {transform: translate(50%, 50%);}}@keyframes orbit {from {transform: rotate(0deg) translateX(20px) rotate(0deg);}
to {transform: rotate(360deg) translateX(20px) rotate(-360deg);}}@keyframes ring-expand {0% {transform: scale(0.5);
opacity: 0;}
50% {opacity: 0.5;}
100% {transform: scale(1.5);
opacity: 0;}}@keyframes rotate {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes trace {0%,100% {clip-path: inset(0 0 95% 0);}
25% {clip-path: inset(0 95% 0 0);}
50% {clip-path: inset(95% 0 0 0);}
75% {clip-path: inset(0 0 0 95%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="about-nimbus-cloud-container6">
          <div className="about-nimbus-cloud-container7">
            <Script
              html={`<script defer data-name="nimbus-interactions">
(function(){
  // Parallax effect on cursor for Hero Visual
  const heroVisual = document.querySelector(".hero-visual")
  const parallaxElement = document.querySelector(".parallax-element")

  if (heroVisual && parallaxElement) {
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const moveX = (x - centerX) / 20
      const moveY = (y - centerY) / 20

      parallaxElement.style.transform = \`translate(\${moveX}px, \${moveY}px) rotateX(\${-moveY}deg) rotateY(\${moveX}deg)\`
    })

    heroVisual.addEventListener("mouseleave", () => {
      parallaxElement.style.transform = "translate(0, 0) rotateX(0) rotateY(0)"
    })
  }

  // Timeline Scroll Progress
  window.addEventListener("scroll", () => {
    const rail = document.querySelector(".timeline-rail")
    const progress = document.querySelector(".rail-progress")

    if (rail && progress) {
      const rect = rail.getBoundingClientRect()
      const viewHeight = window.innerHeight

      if (rect.top < viewHeight && rect.bottom > 0) {
        const scrollPercent = Math.min(100, Math.max(0, ((viewHeight - rect.top) / (viewHeight + rect.height)) * 100))
        progress.style.width = scrollPercent + "%"
      }
    }
  })

  // Kinetic reveal for headline
  const kineticText = document.querySelector(".kinetic-text")
  if (kineticText) {
    const text = kineticText.innerText
    kineticText.innerHTML = text
      .split("")
      .map((char, i) => \`<span style="display:inline-block; opacity:0; transform:translateY(20px); transition: all 0.4s ease \${i * 0.05}s">\${char === " " ? " " : char}</span>\`)
      .join("")

    setTimeout(() => {
      kineticText.querySelectorAll("span").forEach((span) => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0)"
      })
    }, 300)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
        <InteractiveHero locale={props?.locale ?? ''}></InteractiveHero>
      </div>
      <style jsx>
        {`
          .about-nimbus-cloud-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .about-nimbus-cloud-container2 {
            display: none;
          }
          .about-nimbus-cloud-container3 {
            display: contents;
          }
          .about-nimbus-cloud-text100 {
            display: inline-block;
          }
          .about-nimbus-cloud-text101 {
            display: inline-block;
          }
          .about-nimbus-cloud-text102 {
            display: inline-block;
          }
          .about-nimbus-cloud-text103 {
            display: inline-block;
          }
          .about-nimbus-cloud-text104 {
            display: inline-block;
          }
          .about-nimbus-cloud-text105 {
            display: inline-block;
          }
          .about-nimbus-cloud-text106 {
            display: inline-block;
          }
          .about-nimbus-cloud-text107 {
            display: inline-block;
          }
          .about-nimbus-cloud-text108 {
            display: inline-block;
          }
          .about-nimbus-cloud-text109 {
            display: inline-block;
          }
          .about-nimbus-cloud-text110 {
            display: inline-block;
          }
          .about-nimbus-cloud-text111 {
            display: inline-block;
          }
          .about-nimbus-cloud-text112 {
            display: inline-block;
          }
          .about-nimbus-cloud-text113 {
            display: inline-block;
          }
          .about-nimbus-cloud-text114 {
            display: inline-block;
          }
          .about-nimbus-cloud-text115 {
            display: inline-block;
          }
          .about-nimbus-cloud-text116 {
            display: inline-block;
          }
          .about-nimbus-cloud-text117 {
            display: inline-block;
          }
          .about-nimbus-cloud-text118 {
            display: inline-block;
          }
          .about-nimbus-cloud-text119 {
            display: inline-block;
          }
          .about-nimbus-cloud-text120 {
            display: inline-block;
          }
          .about-nimbus-cloud-text121 {
            display: inline-block;
          }
          .about-nimbus-cloud-text122 {
            display: inline-block;
          }
          .about-nimbus-cloud-text123 {
            display: inline-block;
          }
          .about-nimbus-cloud-text124 {
            display: inline-block;
          }
          .about-nimbus-cloud-text125 {
            display: inline-block;
          }
          .about-nimbus-cloud-text126 {
            display: inline-block;
          }
          .about-nimbus-cloud-text127 {
            display: inline-block;
          }
          .about-nimbus-cloud-text128 {
            display: inline-block;
          }
          .about-nimbus-cloud-text129 {
            display: inline-block;
          }
          .about-nimbus-cloud-text130 {
            display: inline-block;
          }
          .about-nimbus-cloud-text131 {
            display: inline-block;
          }
          .about-nimbus-cloud-text132 {
            display: inline-block;
          }
          .about-nimbus-cloud-text133 {
            display: inline-block;
          }
          .about-nimbus-cloud-text134 {
            display: inline-block;
          }
          .about-nimbus-cloud-text135 {
            display: inline-block;
          }
          .about-nimbus-cloud-text136 {
            display: inline-block;
          }
          .about-nimbus-cloud-text137 {
            display: inline-block;
          }
          .about-nimbus-cloud-text138 {
            display: inline-block;
          }
          .about-nimbus-cloud-text139 {
            display: inline-block;
          }
          .about-nimbus-cloud-text140 {
            display: inline-block;
          }
          .about-nimbus-cloud-text141 {
            display: inline-block;
          }
          .about-nimbus-cloud-text142 {
            display: inline-block;
          }
          .about-nimbus-cloud-text143 {
            display: inline-block;
          }
          .about-nimbus-cloud-text144 {
            display: inline-block;
          }
          .about-nimbus-cloud-text145 {
            display: inline-block;
          }
          .about-nimbus-cloud-text146 {
            display: inline-block;
          }
          .about-nimbus-cloud-text147 {
            display: inline-block;
          }
          .about-nimbus-cloud-text148 {
            display: inline-block;
          }
          .about-nimbus-cloud-text149 {
            display: inline-block;
          }
          .about-nimbus-cloud-text150 {
            display: inline-block;
          }
          .about-nimbus-cloud-text151 {
            display: inline-block;
          }
          .about-nimbus-cloud-text152 {
            display: inline-block;
          }
          .about-nimbus-cloud-text153 {
            display: inline-block;
          }
          .about-nimbus-cloud-text154 {
            display: inline-block;
          }
          .about-nimbus-cloud-text155 {
            display: inline-block;
          }
          .about-nimbus-cloud-text156 {
            display: inline-block;
          }
          .about-nimbus-cloud-text157 {
            display: inline-block;
          }
          .about-nimbus-cloud-text158 {
            display: inline-block;
          }
          .about-nimbus-cloud-text159 {
            display: inline-block;
          }
          .about-nimbus-cloud-text160 {
            display: inline-block;
          }
          .about-nimbus-cloud-text161 {
            display: inline-block;
          }
          .about-nimbus-cloud-text162 {
            display: inline-block;
          }
          .about-nimbus-cloud-text163 {
            display: inline-block;
          }
          .about-nimbus-cloud-text164 {
            display: inline-block;
          }
          .about-nimbus-cloud-text165 {
            display: inline-block;
          }
          .about-nimbus-cloud-text166 {
            display: inline-block;
          }
          .about-nimbus-cloud-text167 {
            display: inline-block;
          }
          .about-nimbus-cloud-text168 {
            display: inline-block;
          }
          .about-nimbus-cloud-text169 {
            display: inline-block;
          }
          .about-nimbus-cloud-text170 {
            display: inline-block;
          }
          .about-nimbus-cloud-text171 {
            display: inline-block;
          }
          .about-nimbus-cloud-text172 {
            display: inline-block;
          }
          .about-nimbus-cloud-text173 {
            display: inline-block;
          }
          .about-nimbus-cloud-text174 {
            display: inline-block;
          }
          .about-nimbus-cloud-text175 {
            display: inline-block;
          }
          .about-nimbus-cloud-text176 {
            display: inline-block;
          }
          .about-nimbus-cloud-text177 {
            display: inline-block;
          }
          .about-nimbus-cloud-text178 {
            display: inline-block;
          }
          .about-nimbus-cloud-text179 {
            display: inline-block;
          }
          .about-nimbus-cloud-text180 {
            display: inline-block;
          }
          .about-nimbus-cloud-text181 {
            display: inline-block;
          }
          .about-nimbus-cloud-text182 {
            display: inline-block;
          }
          .about-nimbus-cloud-text183 {
            display: inline-block;
          }
          .about-nimbus-cloud-text184 {
            display: inline-block;
          }
          .about-nimbus-cloud-text185 {
            display: inline-block;
          }
          .about-nimbus-cloud-text186 {
            display: inline-block;
          }
          .about-nimbus-cloud-text187 {
            display: inline-block;
          }
          .about-nimbus-cloud-text188 {
            display: inline-block;
          }
          .about-nimbus-cloud-text189 {
            display: inline-block;
          }
          .about-nimbus-cloud-text190 {
            display: inline-block;
          }
          .about-nimbus-cloud-text191 {
            display: inline-block;
          }
          .about-nimbus-cloud-text192 {
            display: inline-block;
          }
          .about-nimbus-cloud-text193 {
            display: inline-block;
          }
          .about-nimbus-cloud-text194 {
            display: inline-block;
          }
          .about-nimbus-cloud-text195 {
            display: inline-block;
          }
          .about-nimbus-cloud-text196 {
            display: inline-block;
          }
          .about-nimbus-cloud-text197 {
            display: inline-block;
          }
          .about-nimbus-cloud-text198 {
            display: inline-block;
          }
          .about-nimbus-cloud-text199 {
            display: inline-block;
          }
          .about-nimbus-cloud-text200 {
            display: inline-block;
          }
          .about-nimbus-cloud-text201 {
            display: inline-block;
          }
          .about-nimbus-cloud-text202 {
            display: inline-block;
          }
          .about-nimbus-cloud-text203 {
            display: inline-block;
          }
          .about-nimbus-cloud-text204 {
            display: inline-block;
          }
          .about-nimbus-cloud-container4 {
            display: none;
          }
          .about-nimbus-cloud-container5 {
            display: contents;
          }
          .about-nimbus-cloud-container6 {
            display: none;
          }
          .about-nimbus-cloud-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default AboutNimbusCloud

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
