import React from "react";
import styled from "styled-components";
import { HeadingComponent } from "../GlobalStyle";

const Account = () => {
  return (
    <Container>
      <HeadingComponent mainTitle={"마음 전하실 곳"} />
      <AccountsInfoWrapper>
        {accountsInfo.map(({ accountNumber, bank, name, relation }) => {
          return (
            <AccountComponent
              accountNumber={accountNumber}
              bank={bank}
              name={name}
              relation={relation}
            />
          );
        })}
      </AccountsInfoWrapper>
    </Container>
  );
};

export default Account;

const Container = styled.div`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  gap: 32px;
`;

const AccountsInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;

const accountsInfo = [
  {
    relation: "신랑",
    name: "김민석",
    bank: "토스뱅크",
    accountNumber: "1000-1666-8860",
  },
  {
    relation: "신부",
    name: "정원정",
    bank: "토스뱅크",
    accountNumber: "1000-1666-8860",
  },
];

const AccountComponent = ({ name, relation, bank, accountNumber }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber).then(
      () => {
        alert("계좌번호가 복사되었습니다.😉😉");
      },
      () => {
        alert("계좌번호 복사에 실패했습니다.🥲🥲");
      }
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {accountNumber}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>복사</CopyButton>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "SUITE-Regular";
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;
const Relation = styled.span`
  color: #44484d;
`;
const Name = styled.span`
  font-size: 1rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div``;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;
