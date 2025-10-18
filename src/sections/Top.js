import React from "react";
import styled from "styled-components";
import { P } from "../GlobalStyle";

const Top = () => {
  return (
    <Container>
      <Title>
        <P fontWeight={700} fontSize={"24px"}>
          2026 | 01 | 04
        </P>
        <P fontWeight={700} fontSize={"16px"}>
          SUNDAY
        </P>
      </Title>
      <IntroImage src={require("../assets/img/photo/IMG_3053.JPG")} />
      <RowContainer>
        <P fontSize={"12px"}>
          신랑 <strong>김민석</strong>
        </P>
        <div className="divider"></div>
        <P fontSize={"12px"}>
          신부 <strong>정원정</strong>
        </P>
      </RowContainer>
      <P fontSize={"0.8rem"} className="description">
        2026년 1월 4일 일요일 오후 12시 30분
        <br />
        더블유 웨딩 에비뉴홀
      </P>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  .description {
    line-height: 1.2rem;
    margin-top: 24px;
  }
`;

const Title = styled.div`
  padding: 48px 0 var(--font-size);
  color: var(--intro-text-color);
  line-height: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--font-size);
`;

const IntroImage = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  max-height: 430px;
  object-fit: cover;
  overflow: hidden;
  padding: 0 0 var(--font-size);
`;

const RowContainer = styled.div`
  display: flex;
  gap: 12px;
  strong {
    font-weight: 500;
    font-size: 18px;
  }
  .divider {
    width: 1px;
    height: var(--font-size);
    background: var(--margin-bg-color);
  }
`;
