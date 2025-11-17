import React, { useState } from "react";
import styled from "styled-components";
import { HeadingComponent, P } from "../GlobalStyle";

const Account = () => {
  return (
    <Container>
      <HeadingComponent mainTitle={"마음 전하실 곳"} />
      <AccountsInfoWrapper>
        {/* {accountsInfo.map(({ accountNumber, bank, name, relation }) => {
          return (
            <AccountComponent
              accountNumber={accountNumber}
              bank={bank}
              name={name}
              relation={relation}
              key={name}
            />
          );
        })} */}
        {accountsInfo.map(({ type, list }) => {
          return <AccountWrapperComponent key={type} type={type} list={list} />;
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
  padding-top: 24px;
  gap: 32px;
  @media (max-width: 420px) {
    width: calc(100% - 64px);
  }
`;

const AccountsInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
`;

const accountsInfo = [
  {
    type: "male",
    list: [
      {
        relation: "신랑",
        name: "김민석",
        bank: "토스뱅크",
        accountNumber: "1000-1666-8860",
      },
      {
        relation: "신랑 아버지",
        name: "김동국",
        bank: "우체국",
        accountNumber: "110-0042-55687",
      },
      {
        relation: "신랑 어머니",
        name: "이선천",
        bank: "하나은행",
        accountNumber: "393-910479-84607",
      },
    ],
  },
  {
    type: "female",
    list: [
      {
        relation: "신부",
        name: "정원정",
        bank: "부산은행",
        accountNumber: "112-2187-1744-01",
      },
      {
        relation: "신부 어머니",
        name: "이혜경",
        bank: "부산은행",
        accountNumber: "126-12-032154-1",
      },
    ],
  },
];

const AccountWrapperComponent = ({ type, list = [] }) => {
  const [open, setOpen] = useState(false);
  const typeConvert = (type) => {
    const typeToLocale = { male: "신랑", female: "신부" };

    return typeToLocale[type];
  };
  return (
    <Wrapper $typeDivider $open={open}>
      <Info onClick={() => setOpen(!open)}>
        <Relation>{typeConvert(type)}측</Relation>
        <ToggleIcon>{open ? "닫기" : "보기"}</ToggleIcon>
      </Info>
      <ToggleContent $open={open} $listNum={list.length ?? 0}>
        {list.map(({ accountNumber, bank, name, relation }) => (
          <AccountComponent
            accountNumber={accountNumber}
            bank={bank}
            name={name}
            relation={relation}
            key={name}
          />
        ))}
      </ToggleContent>
    </Wrapper>
  );
};

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
  padding: 10px 0;
  border-bottom: ${({ $typeDivider, $open }) =>
    $typeDivider && $open
      ? "2px solid var(--btn-border-color)"
      : "1px solid #dfdfdf"};
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin: 5px 0;
`;
const Relation = styled(P)`
  color: #44484d;
  font-size: 0.7rem;
  opacity: 0.7;
`;
const Name = styled(P)`
  font-size: 0.85rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled(P)`
  font-size: 0.75rem;
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: var(--btn-bg-color);
  color: #544f4f;
  font-family: "MaruBuri";
`;

const ToggleIcon = styled.span`
  font-size: 0.65rem;
  justify-self: flex-end;
  margin-left: auto;
  color: #5858d8;
`;

const ToggleContent = styled.div`
  overflow: hidden;
  max-height: ${({ $open, $listNum }) => ($open ? `${$listNum * 80}px` : "0")};
  transition: max-height 0.3s ease;
`;
