import React from "react";
import styled from "styled-components";
import { P } from "../GlobalStyle";

const Loading = () => {
  return (
    <Container>
      <LoadingComponent />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  height: calc(100vh - var(--font-size));
  height: calc(100dvh - var(--font-size));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingComponent = ({
  size = "160px",
  text = "청첩장 여는 중...",
  containerStyle,
  fontSize = "0.8rem",
  fontWeight = 600,
}) => {
  return (
    <ComponentContainer $style={containerStyle}>
      <LoadingImg
        src={`${process.env.PUBLIC_URL}/loadingIcon.gif`}
        $size={size}
      />
      <P fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </P>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ $style }) => $style}
`;

const LoadingImg = styled.img`
  width: ${({ $size }) => $size ?? "160px"};
  height: ${({ $size }) => $size ?? "160px"};
  aspect-ratio: 1;
`;
