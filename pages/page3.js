import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page3 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page3-container">
        <Head>
          <title>
            Page3 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page3 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page3`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page3"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page3"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page3"
          />
        </Head>
        <CtaBandSection7
          text={
            <Fragment>
              <span className="page3-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8yFc0d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page3-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ah53M9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page3-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tRP3YV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page3-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HuHl4K'),
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
              <span className="page3-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_buS9NQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page3-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YcgsHc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page3-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4uj-SH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page3-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AOcVXJ'),
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
              <span className="page3-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4YeqIW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page3-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tX5p92'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page3-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vmv3Qe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page3-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z5o3_z'),
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
              <span className="page3-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X0pSKJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page3-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kGF7XV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page3-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SMEgUf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page3-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dSVytM'),
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
              <span className="page3-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NNRHZ-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page3-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__DpSsc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page3-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AKmwB1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page3-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fg4iF5'),
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
          .page3-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page3-text10 {
            display: inline-block;
          }
          .page3-text11 {
            display: inline-block;
          }
          .page3-text12 {
            display: inline-block;
          }
          .page3-text13 {
            display: inline-block;
          }
          .page3-text14 {
            display: inline-block;
          }
          .page3-text15 {
            display: inline-block;
          }
          .page3-text16 {
            display: inline-block;
          }
          .page3-text17 {
            display: inline-block;
          }
          .page3-text18 {
            display: inline-block;
          }
          .page3-text19 {
            display: inline-block;
          }
          .page3-text20 {
            display: inline-block;
          }
          .page3-text21 {
            display: inline-block;
          }
          .page3-text22 {
            display: inline-block;
          }
          .page3-text23 {
            display: inline-block;
          }
          .page3-text24 {
            display: inline-block;
          }
          .page3-text25 {
            display: inline-block;
          }
          .page3-text26 {
            display: inline-block;
          }
          .page3-text27 {
            display: inline-block;
          }
          .page3-text28 {
            display: inline-block;
          }
          .page3-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page3

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
