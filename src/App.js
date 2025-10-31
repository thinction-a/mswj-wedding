import Container from "./Container";
import Account from "./sections/Account";
import Calendar from "./sections/Calendar";
import Description from "./sections/Description";
import Location from "./sections/Location";
import Top from "./sections/Top";
import Comments from "./sections/Comments";
import { lazy, Suspense } from "react";
import { LoadingComponent } from "./sections/Loading";
import { css } from "styled-components";

function App() {
  const commentsPageId = window.location.pathname.replace("/", "") || "home";

  const Gallery = lazy(() => import("./sections/Gallery"));

  return (
    <Container>
      <Top />
      <Description />
      <Calendar />
      <Suspense
        fallback={
          <LoadingComponent
            text="갤러리 로딩 중..."
            containerStyle={css`
              background: var(--primary-bg-color);
              background-image: var(--primary-bg-image);
            `}
          />
        }
      >
        <Gallery />
      </Suspense>
      <Location />
      <Account />
      <Comments pageId={commentsPageId} />
    </Container>
  );
}

export default App;
