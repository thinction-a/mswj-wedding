import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeadingComponent, P } from "../GlobalStyle";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const Comments = ({ pageId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState(createNickname());
  const [message, setMessage] = useState("");
  const btnDisabled = name?.length === 0 || message?.length === 0;
  const [showInput, setShowInput] = useState(false);

  // 실시간으로 Firestore 데이터 구독
  useEffect(() => {
    const q = query(
      collection(db, "comments", pageId, "items"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [pageId]);

  let lastCommentTime = 0;
  // 댓글 작성
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const now = Date.now();
    if (now - lastCommentTime < 30000) {
      alert("30초 후에 다시 시도해주세요.");
      return;
    }
    lastCommentTime = now;

    await addDoc(collection(db, "comments", pageId, "items"), {
      name,
      message,
      createdAt: serverTimestamp(),
    });
    setName("");
    setMessage("");
  };

  return (
    <Container>
      <HeadingComponent mainTitle={"축하메시지"} subTitle={"CONGRATS"} />
      <P fontSize={"14px"}>
        축하메시지를 남겨주시면
        <br />
        <br />
        추억의 한 켠에 같이
        <br />
        <br />
        간직하겠습니다.
      </P>
      {showInput ? (
        <>
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <Input
                value={name}
                onChange={(e) => {
                  if (e.target.value.length > 20) {
                    return;
                  }
                  return setName(e.target.value);
                }}
                placeholder="남기시는 분 성함"
              />
              <TextArea
                value={message}
                onChange={(e) => {
                  if (e.target.value.length > 151) {
                    return;
                  }
                  return setMessage(e.target.value);
                }}
                placeholder="💕축하의 마음을 남겨주세요💕 (최대 150자)"
                as={"textarea"}
                rows={5}
              />
            </FormContainer>
            <Button type="submit" disabled={btnDisabled}>
              {btnDisabled ? (
                <P fontSize={"0.65rem"} fontWeight={700}>
                  성함
                  <br />
                  메세지
                  <br />
                  필수
                </P>
              ) : (
                <P fontSize={"0.65rem"} fontWeight={700}>
                  축하글
                  <br />
                  남기기
                </P>
              )}
            </Button>
          </Form>
          <Button
            onClick={() => setShowInput(!showInput)}
            style={{
              width: "100%",
            }}
          >
            <P fontSize={"0.65rem"} fontWeight={700}>
              입력창 숨기기
            </P>
          </Button>
        </>
      ) : (
        <Button
          onClick={() => setShowInput(!showInput)}
          style={{
            width: "100%",
          }}
        >
          <P fontSize={"0.65rem"} fontWeight={700}>
            메세지 남기기
          </P>
        </Button>
      )}

      <div
        style={{
          flex: 1,
          width: "100%",
          gap: "0.6rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {comments.map((c) => (
          <CommentContainer key={c.id}>
            <P
              fontSize={"0.7rem"}
              fontWeight={500}
              className="text"
              style={{ justifySelf: "flex-start", textAlign: "left" }}
            >
              {c.message}
            </P>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <P
                fontSize={"0.65rem"}
                fontWeight={700}
                style={{ justifySelf: "flex-start", opacity: "0.65" }}
              >
                {c.name}
              </P>
              <P fontSize={"0.6rem"} style={{ justifySelf: "flex-end" }}>
                {c.createdAt?.toDate
                  ? c.createdAt.toDate().toLocaleString()
                  : "방금"}
              </P>
            </div>
          </CommentContainer>
        ))}
      </div>
    </Container>
  );
};

export default Comments;

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

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 0.4rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
`;

const Input = styled.input`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  flex: 0.8;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid var(--btn-border-color);
  padding: 0.4rem 0.8rem;
  font-family: "MaruBuri";
  color: var(--text-color);
  :active {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid var(--btn-border-color);
  padding: 0.4rem 0.8rem;
  resize: none;
  font-family: "MaruBuri";
  color: var(--text-color);
  :active {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 0.2;
  font-family: "MaruBuri";
  padding: 0.4rem 0;
  border: 1px solid var(--btn-border-color);
  background: #e7dddd;
  border-radius: 0.1rem;
  &:disabled {
    background: var(--margin-bg-color);
    opacity: 0.6;
  }
`;

const CommentContainer = styled.div`
  .text {
    margin-bottom: 0.4rem;
  }
  border-top: 1px dashed var(--btn-border-color);
  padding-top: 0.6rem;
  &:first-child {
    border-style: solid;
  }
`;

const adjectives = [
  "행복한",
  "사랑스런",
  "밝은",
  "용감한",
  "따뜻한",
  "즐거운",
  "평화로운",
  "친절한",
  "귀여운",
  "부지런한",
  "감사한",
  "유쾌한",
  "차분한",
  "상냥한",
  "당당한",
  "자신있는",
  "긍정적",
  "정직한",
  "창의적",
  "배려있는",
  "순수한",
  "열정적",
  "현명한",
  "느긋한",
  "성실한",
  "믿음직한",
  "활발한",
  "겸손한",
  "사려깊은",
  "웃는",
  "따사로운",
  "기쁜",
  "용기있는",
  "선한",
  "열린",
  "신나는",
  "온화한",
  "정다운",
  "다정한",
  "희망찬",
  "활기찬",
  "매력적",
  "섬세한",
  "소중한",
  "평온한",
  "기쁜",
  "감동적",
  "자유로운",
  "순한",
  "따뜻미소",
];

const animals = [
  "너구리",
  "고양이",
  "강아지",
  "호랑이",
  "사자",
  "코끼리",
  "토끼",
  "펭귄",
  "기린",
  "돌고래",
  "다람쥐",
  "판다",
  "부엉이",
  "앵무새",
  "하마",
  "코알라",
  "곰",
  "여우",
  "수달",
  "고래",
  "늑대",
  "참새",
  "비둘기",
  "까마귀",
  "두더지",
  "거북이",
  "캥거루",
  "고슴도치",
  "까치",
  "사슴",
  "청설모",
  "돌고래",
  "미어캣",
  "치타",
  "하이에나",
  "카피바라",
  "두루미",
  "도마뱀",
  "매",
  "참새",
  "비버",
  "너새",
  "재규어",
  "앵무",
  "수리",
  "삵",
  "곰돌이",
  "햄스터",
  "청둥오리",
  "물범",
];

const createNickname = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const timeSuffix = String(new Date().getTime()).slice(-4);
  const nickname = `${adj}${animal}${timeSuffix}`;

  // 길이 검사
  if (nickname.length > 19) {
    return createNickname();
  }
  return nickname;
};
