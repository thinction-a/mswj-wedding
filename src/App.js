import Container from "./Container";
import Account from "./sections/Account";
import Calendar from "./sections/Calendar";
import Description from "./sections/Description";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import Top from "./sections/Top";
import Comments from "./sections/Comments";

function App() {
  const commentsPageId = window.location.pathname.replace("/", "") || "home";
  return (
    <Container>
      <Top />
      <Description />
      <Calendar />
      <Gallery />
      <Location />
      <Account />
      <Comments pageId={commentsPageId} />
    </Container>
  );
}

export default App;
