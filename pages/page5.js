import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page5 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page5-container">
        <Head>
          <title>
            Page5 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page5 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page5`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page5"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page5"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page5"
          />
        </Head>
        <CtaBandSection7
          text={
            <Fragment>
              <span className="page5-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-SmSH7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page5-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X4ZObf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page5-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cg9x3K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page5-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iCJCmP'),
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
              <span className="page5-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OZFveN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page5-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eFdfxD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page5-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jwby00'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page5-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_leYu63'),
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
              <span className="page5-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X4tUvS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page5-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ig25uv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page5-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_L1POO7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page5-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BDNqpE'),
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
              <span className="page5-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ctwxZy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page5-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XBtmwv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page5-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6Ko8vQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page5-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DoIN27'),
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
              <span className="page5-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CTXI8g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page5-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SDb8uf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page5-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zl8xXr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page5-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k75Ian'),
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
          .page5-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page5-text10 {
            display: inline-block;
          }
          .page5-text11 {
            display: inline-block;
          }
          .page5-text12 {
            display: inline-block;
          }
          .page5-text13 {
            display: inline-block;
          }
          .page5-text14 {
            display: inline-block;
          }
          .page5-text15 {
            display: inline-block;
          }
          .page5-text16 {
            display: inline-block;
          }
          .page5-text17 {
            display: inline-block;
          }
          .page5-text18 {
            display: inline-block;
          }
          .page5-text19 {
            display: inline-block;
          }
          .page5-text20 {
            display: inline-block;
          }
          .page5-text21 {
            display: inline-block;
          }
          .page5-text22 {
            display: inline-block;
          }
          .page5-text23 {
            display: inline-block;
          }
          .page5-text24 {
            display: inline-block;
          }
          .page5-text25 {
            display: inline-block;
          }
          .page5-text26 {
            display: inline-block;
          }
          .page5-text27 {
            display: inline-block;
          }
          .page5-text28 {
            display: inline-block;
          }
          .page5-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page5

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
