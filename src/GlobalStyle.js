import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-ExtraLight.woff2);
        font-weight: 200;
        font-display: swap;
    }

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Light.woff2);
        font-weight: 300;
        font-display: swap;
    }

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.woff2);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-SemiBold.woff2);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.woff2);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Light.woff2);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-ExtraLight.woff2);
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-SemiBold.woff2);
        font-weight: 600;
        font-display: swap;
    }

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.woff2);
        font-weight: 700;
        font-display: swap;
    }

    html {
    --text-color: #544f4f;
    --text-dark-color: #524548;
    --text-light-color: #89757a;
    --title-text-color: #89757a;
    --subtitle-text-color: #c2b2b2;
    --icon-color: #cec3c3;
    --border-size: 0;
    --border-color: #e8dfdf;
    --border-light-color: #e9e5e5;
    --wave-color: #fbfbfb;
    --primary-bg-color: #fbfbfb;
    --primary-bg-image: url("${process.env.PUBLIC_URL}/bg1.jpg");
    --secondary-bg-color: #f6f5f5;
    --third-bg-color: #f2eeee;
    --fourth-bg-color: #fff;
    --footer-bg-color: #f2eeee;
    --margin-bg-color: #333;
    --btn-bg-color: rgba(0, 0, 0, 0);
    --btn-text-color: #978686;
    --btn-border-color: #d1c8c8;
    --btn-dark-bg-color: #d0b9b9;
    --btn-dark-text-color: #fff;
    --btn-dark-border-color: #d0b9b9;
    --font-size: 20px;
    --common-margin-lr: 1.2rem;
    --account-margin-lr: 0.4rem;
    --calendar-margin-lr: 0.5rem;
    --font-regular: "MaruBuri";
    --font-regular-spacing: 0;
    --font-gothic: Pretendard Variable;
    --font-gothic-spacing: -0.2px;
    --font-bold: "MaruBuri";
    --font-bold-weight: bold;
    }

    #root {
    font-family: "MaruBuri", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    }
    #root,
    html {
    height: 100%;
    }
    html {
    font-size: calc(var(--font-size) * 430 / 390);
    }
    @media (max-width: 450px) {
    html {
        font-size: calc(var(--font-size) * 450 / 390);
    }
    }
    @media (max-width: 440px) {
    html {
        font-size: calc(var(--font-size) * 440 / 390);
    }
    }
    @media (max-width: 430px) {
    html {
        font-size: calc(var(--font-size) * 430 / 390);
    }
    }
    @media (max-width: 420px) {
    html {
        font-size: calc(var(--font-size) * 420 / 390);
    }
    }
    @media (max-width: 410px) {
    html {
        font-size: calc(var(--font-size) * 410 / 390);
    }
    }
    @media (max-width: 400px) {
    html {
        font-size: calc(var(--font-size) * 400 / 390);
    }
    }
    @media (max-width: 390px) {
    html {
        font-size: calc(var(--font-size) * 390 / 390);
    }
    }
    @media (max-width: 380px) {
    html {
        font-size: calc(var(--font-size) * 380 / 390);
    }
    }
    @media (max-width: 370px) {
    html {
        font-size: calc(var(--font-size) * 370 / 390);
    }
    }
    @media (max-width: 360px) {
    html {
        font-size: calc(var(--font-size) * 360 / 390);
    }
    }
    body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: var(--margin-bg-color);
    }
    h1,
    h2 {
    font-weight: 400;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    a {
    color: var(--text-color);
    }
    br {
    font-family: initial;
    }
    img {
    -webkit-touch-callout: none;
    }
    p.headingComponent {
    letter-spacing: 2.2px;
    line-height: 1.4rem;
    span {
      font-size: var(--font-size);
    }
  }
  /* .pswp__zoom-wrap {
    max-width: 420px !important;
    margin: 0 auto;
    } */
  .pswp__img {
    /* max-width: 420px !important;  */
    width: fit-content;
    /* height: auto !important;  */
    height: 100dvh;
    object-fit: contain !important;
    margin: 0 auto !important;
    display: block;

}
@media (max-width: 420px) {
    .pswp__img {
        max-width: 420px !important;
    }
}
@media (min-width: 768px) {
    .pswp__img {
        max-height: 100vh !important;
    }
}
`;

export default GlobalStyle;

export const P = ({ children, fontWeight, fontSize, ...rest }) => {
  return (
    <FontComponent $fontWeight={fontWeight} $fontSize={fontSize} {...rest}>
      {children}
    </FontComponent>
  );
};

const FontComponent = styled.p`
  color: var(--text-color);
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
  font-size: ${({ $fontSize }) => $fontSize ?? "var(--font-size)"};
`;

export const HeadingComponent = ({ subTitle, mainTitle }) => {
  return (
    <P className="headingComponent" fontSize={"12px"}>
      {subTitle}
      <br />
      <span>{mainTitle}</span>
    </P>
  );
};
