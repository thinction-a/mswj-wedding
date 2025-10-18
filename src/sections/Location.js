import styled from "styled-components";
import { HeadingComponent, P } from "../GlobalStyle";
import { Container as MapContainer, NaverMap, Marker } from "react-naver-maps";

const Location = () => {
  return (
    <Container>
      <HeadingComponent subTitle={"LOCATION"} mainTitle={"오시는 길"} />
      <P fontWeight={700}>더블유스퀘어 3층 더에비뉴홀</P>
      <P fontSize={"14px"} className="address">
        부산광역시 부산진구 신천대로 252 (부암동) 3층
      </P>
      <MapWrapper>
        <NaverMapComponent />
        <RowContainer>
          <IconButton
            text={"네이버 지도"}
            img={mapInfo.naverMapIcon}
            url={mapInfo.naverMap}
          />
          <div className="divider"></div>
          <IconButton
            text={"카카오맵"}
            img={mapInfo.kakaoMapIcon}
            url={mapInfo.kakaoMap}
          />
          <div className="divider"></div>
          <IconButton text={"티맵"} img={mapInfo.tMapIcon} url={mapInfo.tMap} />
        </RowContainer>
      </MapWrapper>
    </Container>
  );
};

export default Location;

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
  p.address {
    letter-spacing: -0.02rem;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  .divider {
    width: 1px;
    background: var(--btn-border-color);
    opacity: 0.8;
  }
`;

const Button = styled.button`
  /* background: var(--btn-dark-bg-color); */
  background: #e7dddd;
  flex: 1;
  border: none;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  p {
    letter-spacing: -0.02rem;
  }
`;

const Icon = styled.img`
  width: 16px;
  aspect-ratio: 1;
  height: auto;
  object-fit: contain;
`;

const IconButton = ({ img, text, url }) => {
  return (
    <Button onClick={() => window.open(url)}>
      <Icon src={img} alt={text} />
      <P fontSize={"14px"}>{text}</P>
    </Button>
  );
};

const NaverMapComponent = () => {
  return (
    <MapContainer
      style={{
        height: 300,
        width: "100%",
      }}
    >
      <NaverMap
        scrollWheel={false}
        zoomControl={false}
        pinchZoom={false}
        defaultCenter={{ lat: mapInfo.lat, lng: mapInfo.lng }}
        defaultZoom={16}
      >
        <Marker
          defaultPosition={{ lat: mapInfo.lat, lng: mapInfo.lng }}
          title="W스퀘어 웨딩홀"
        />
      </NaverMap>
    </MapContainer>
  );
};

const mapInfo = {
  naverMap: "https://naver.me/5bVsWS2O",
  kakaoMap: "https://kko.kakao.com/TOJiw5ESvi",
  tMap: `https://apis.openapi.sk.com/tmap/app/routes?appKey=${process.env.REACT_APP_T_MAP_APP_KEY}&name=W스퀘어 웨딩홀&lon=129.050658&lat=35.164507`,
  lat: 35.164507,
  lng: 129.050658,
  naverMapIcon: require("../assets/img/icon_navermap_w48.png"),
  kakaoMapIcon: require("../assets/img/icon_kakaonavi_w48.png"),
  tMapIcon: require("../assets/img/icon_tmap_w48.png"),
};
