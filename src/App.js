import { NavermapsProvider } from "react-naver-maps";
import Container from "./Container";
import Account from "./sections/Account";
import Calendar from "./sections/Calendar";
import Description from "./sections/Description";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import Top from "./sections/Top";

function App() {
  return (
    <Container>
      <Top />
      <Description />
      <Calendar />
      <Gallery />
      <Location />
      <Account />
    </Container>
  );
}

export default App;
