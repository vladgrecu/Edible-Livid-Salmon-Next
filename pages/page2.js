import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page2 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page2-container">
        <Head>
          <title>
            Page2 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page2 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page2`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page2"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page2"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page2"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page2-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RSQzTY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page2-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cqgse1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page2-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C8yAaS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page2-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Czzoa6'),
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
              <span className="page2-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zAy4FS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page2-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oLnGCz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page2-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_G5o4HD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page2-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Gb5yvU'),
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
              <span className="page2-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_d5TCbe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page2-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TVaWml'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page2-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ELk9W7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page2-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S_iWnE'),
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
              <span className="page2-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x6o5d2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page2-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s7SScz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page2-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gWJ0JS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page2-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6tfTba'),
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
              <span className="page2-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bXvrQW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page2-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tEPewn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page2-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NLD2hj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page2-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oRnGlX'),
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
          .page2-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page2-text10 {
            display: inline-block;
          }
          .page2-text11 {
            display: inline-block;
          }
          .page2-text12 {
            display: inline-block;
          }
          .page2-text13 {
            display: inline-block;
          }
          .page2-text14 {
            display: inline-block;
          }
          .page2-text15 {
            display: inline-block;
          }
          .page2-text16 {
            display: inline-block;
          }
          .page2-text17 {
            display: inline-block;
          }
          .page2-text18 {
            display: inline-block;
          }
          .page2-text19 {
            display: inline-block;
          }
          .page2-text20 {
            display: inline-block;
          }
          .page2-text21 {
            display: inline-block;
          }
          .page2-text22 {
            display: inline-block;
          }
          .page2-text23 {
            display: inline-block;
          }
          .page2-text24 {
            display: inline-block;
          }
          .page2-text25 {
            display: inline-block;
          }
          .page2-text26 {
            display: inline-block;
          }
          .page2-text27 {
            display: inline-block;
          }
          .page2-text28 {
            display: inline-block;
          }
          .page2-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page2

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
