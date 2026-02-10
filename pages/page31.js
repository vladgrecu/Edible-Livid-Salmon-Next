import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page31 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page31-container">
        <Head>
          <title>
            Page31 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page31 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page31`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page31"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page31"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page31"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page31-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uOBd6_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page31-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LEIN1g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page31-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__RnkvM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page31-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NFeRjS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection7>
        <CtaBandSection8
          sectionTitle={
            <Fragment>
              <span className="page31-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rFM8Ro'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page31-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b4Ur8L'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page31-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__gfzh1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page31-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nyyWua'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection8>
        <CtaBandSection9
          sectionTitle={
            <Fragment>
              <span className="page31-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oWKXbb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page31-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2xBCyS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page31-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9eMeE4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page31-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jba4mW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection9>
        <CtaBandSection10
          sectionTitle={
            <Fragment>
              <span className="page31-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PKUqwy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page31-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KfhSx3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page31-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2itOzM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page31-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S731Xt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection10>
        <CtaBandSection11
          sectionTitle={
            <Fragment>
              <span className="page31-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_l3tC_0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page31-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tZEgIH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page31-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wPUpPt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page31-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-rjARR'),
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
          .page31-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page31-text10 {
            display: inline-block;
          }
          .page31-text11 {
            display: inline-block;
          }
          .page31-text12 {
            display: inline-block;
          }
          .page31-text13 {
            display: inline-block;
          }
          .page31-text14 {
            display: inline-block;
          }
          .page31-text15 {
            display: inline-block;
          }
          .page31-text16 {
            display: inline-block;
          }
          .page31-text17 {
            display: inline-block;
          }
          .page31-text18 {
            display: inline-block;
          }
          .page31-text19 {
            display: inline-block;
          }
          .page31-text20 {
            display: inline-block;
          }
          .page31-text21 {
            display: inline-block;
          }
          .page31-text22 {
            display: inline-block;
          }
          .page31-text23 {
            display: inline-block;
          }
          .page31-text24 {
            display: inline-block;
          }
          .page31-text25 {
            display: inline-block;
          }
          .page31-text26 {
            display: inline-block;
          }
          .page31-text27 {
            display: inline-block;
          }
          .page31-text28 {
            display: inline-block;
          }
          .page31-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page31

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
