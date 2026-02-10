import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page1 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>
            Page1 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page1 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page1`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page1"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page1"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page1"
          />
        </Head>
        <CtaBandSection7
          text={
            <Fragment>
              <span className="page1-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0DRsha'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page1-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gRsciU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page1-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_g_ZcoV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page1-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q5wNIT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection7>
        <CtaBandSection8
          text={
            <Fragment>
              <span className="page1-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NyKkCd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page1-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a8X_mr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page1-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UODTLC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page1-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qfam91'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection8>
        <CtaBandSection9
          text={
            <Fragment>
              <span className="page1-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YBVY3y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page1-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S9wlLo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page1-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZBxB4A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page1-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fiZ24E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection9>
        <CtaBandSection10
          text={
            <Fragment>
              <span className="page1-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b_CMG8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page1-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gqoL8W'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page1-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pjj3t3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page1-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5GAPyz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection10>
        <CtaBandSection11
          text={
            <Fragment>
              <span className="page1-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Hs_keh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page1-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NWjl6T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page1-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W-GAJf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page1-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xH2CWb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection11>
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page1-text10 {
            display: inline-block;
          }
          .page1-text11 {
            display: inline-block;
          }
          .page1-text12 {
            display: inline-block;
          }
          .page1-text13 {
            display: inline-block;
          }
          .page1-text14 {
            display: inline-block;
          }
          .page1-text15 {
            display: inline-block;
          }
          .page1-text16 {
            display: inline-block;
          }
          .page1-text17 {
            display: inline-block;
          }
          .page1-text18 {
            display: inline-block;
          }
          .page1-text19 {
            display: inline-block;
          }
          .page1-text20 {
            display: inline-block;
          }
          .page1-text21 {
            display: inline-block;
          }
          .page1-text22 {
            display: inline-block;
          }
          .page1-text23 {
            display: inline-block;
          }
          .page1-text24 {
            display: inline-block;
          }
          .page1-text25 {
            display: inline-block;
          }
          .page1-text26 {
            display: inline-block;
          }
          .page1-text27 {
            display: inline-block;
          }
          .page1-text28 {
            display: inline-block;
          }
          .page1-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page1

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
