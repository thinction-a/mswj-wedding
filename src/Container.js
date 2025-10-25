import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>;
};

export default Container;

const ContainerComponent = styled.div`
  max-width: 430px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
`;
