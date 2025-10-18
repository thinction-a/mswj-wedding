import React from "react";
import styled from "styled-components";
import { HeadingComponent, P } from "../GlobalStyle";

const Description = () => {
  return (
    <Container>
      <HeadingComponent subTitle={"INVITATION"} mainTitle={"초대합니다"} />
      <P fontSize={"16px"} className="description">
        새로운 한해를 시작하는
        <br />
        순간의 설레임과 함께
        <br />
        쌓은 추억들과
        <br />
        쌓아갈 추억들을 기대하며
        <br />
        두 사람이 새로운 여정을 걸으려 합니다.
        <br />
        여정의 출발점에 같이 자리하시어
        <br />
        축복해주시면 감사하겠습니다.
      </P>
      <ColumnContainer>
        <RowContainer>
          <P fontSize={"18px"}>
            김동국ﾠ·ﾠ이선천<span>의</span>
          </P>
          <P fontSize={"14px"}>아들</P>
          <P fontSize={"18px"} fontWeight={700}>
            민석
          </P>
        </RowContainer>
        <RowContainer>
          <P fontSize={"18px"} className="beforeContent">
            정인식ﾠ·ﾠ이혜경<span>의</span>
          </P>
          <P fontSize={"14px"}>ﾠ딸ﾠ</P>
          <P fontSize={"18px"} fontWeight={700}>
            원정
          </P>
        </RowContainer>
      </ColumnContainer>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  .description {
    line-height: 1.6rem;
    margin-top: 48px;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 48px;
  .beforeContent {
    position: relative;
    ::before {
      content: "故";
      position: absolute;
      left: -0.6rem;
      bottom: 0;
      font-size: 12px;
    }
  }
`;

const RowContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  span {
    font-weight: 500;
    font-size: 14px;
  }
`;
