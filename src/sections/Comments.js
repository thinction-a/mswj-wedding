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
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
      <HeadingComponent mainTitle={"축하메시지"} />
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <Input
            value={name}
            onChange={(e) => {
              if (e.target.value.length > 12) {
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
        <Button type="submit">
          <P fontSize={"0.65rem"} fontWeight={700}>
            축하글
            <br />
            남기기
          </P>
        </Button>
      </Form>

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
              fontSize={"0.85rem"}
              fontWeight={700}
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
                fontSize={"0.7rem"}
                fontWeight={700}
                style={{ justifySelf: "flex-start" }}
              >
                {c.name}
              </P>
              <P fontSize={"0.65rem"} style={{ justifySelf: "flex-end" }}>
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
`;

const CommentContainer = styled.div`
  .text {
    opacity: 0.75;
    margin-bottom: 0.4rem;
  }
  border-top: 1px dashed var(--btn-border-color);
  padding-top: 0.6rem;
  &:first-child {
    border-style: solid;
  }
`;
