import React from "react";
import styled from "styled-components";
import { HeadingComponent, P } from "../GlobalStyle";
import { Gallery as GalleryPhotoSwipe, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

const Gallery = () => {
  return (
    <Container>
      <HeadingComponent subTitle={"GALLERY"} mainTitle={"갤러리"} />
      <P fontSize={"12px"}>
        우측으로 스와이프하시면
        <br />더 많은 사진을 보실 수 있습니다.
      </P>
      <GalleryComponent />
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  background: var(--primary-bg-color);
  background-image: var(--primary-bg-image);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  gap: 48px;
`;

const GalleryComponent = () => {
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "120px",
    height: "170px",
    borderRadius: "4px",
  };
  return (
    <GalleryPhotoSwipe
      options={{
        bgOpacity: 0.9,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridGap: 4,
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
        }}
      >
        {shuffleArray(images).map((img, index) => {
          return (
            <Item
              key={index}
              cropped
              original={img.source}
              thumbnail={img.source}
              // width={img.width}
              // height={img.height}
            >
              {({ ref, open }) => (
                <img
                  src={img.source}
                  onClick={open}
                  ref={ref}
                  alt={img.alt}
                  style={smallItemStyles}
                />
              )}
            </Item>
          );
        })}
      </div>
    </GalleryPhotoSwipe>
  );
};

const images = [
  // {
  //   source: require("../assets/img/photo/20250901-MS&WC-0612.jpg"),
  //   alt: "image1",
  //   width: "auto",
  //   height: "100%",
  // },
  {
    source: require("../assets/img/photo/20250901-MS&WC-0680.jpg"),
    alt: "image2",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-0712.jpg"),
    alt: "image3",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-0834.jpg"),
    alt: "image4",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1313.jpg"),
    alt: "image5",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1340.jpg"),
    alt: "image6",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1421.jpg"),
    alt: "image7",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1529.jpg"),
    alt: "image8",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1612.jpg"),
    alt: "image9",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1658.jpg"),
    alt: "image10",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1855.jpg"),
    alt: "image11",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1903.jpg"),
    alt: "image12",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1979.jpg"),
    alt: "image13",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-1981.jpg"),
    alt: "image14",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-2305.jpg"),
    alt: "image15",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-2313.jpg"),
    alt: "image16",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-2340.jpg"),
    alt: "image17",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-2381.jpg"),
    alt: "image18",
    width: "auto",
    height: "100%",
  },
  {
    source: require("../assets/img/photo/20250901-MS&WC-2540.jpg"),
    alt: "image19",
    width: "auto",
    height: "100%",
  },
];
// const images = [
//   {
//     source: require("../assets/img/photo/IMG_3053.JPG"),
//     alt: "image1",
//     width: 640,
//     height: 960,
//   },
//   {
//     source: require("../assets/img/photo/IMG_3054.JPG"),
//     alt: "image2",
//     width: 640,
//     height: 960,
//   },
//   {
//     source: require("../assets/img/photo/IMG_3055.JPG"),
//     alt: "image3",
//     width: 640,
//     height: 960,
//   },
//   {
//     source: require("../assets/img/photo/IMG_3056.JPG"),
//     alt: "image4",
//     width: 640,
//     height: 960,
//   },
//   {
//     source: require("../assets/img/photo/IMG_3057.JPG"),
//     alt: "image5",
//     width: 640,
//     height: 960,
//   },
//   {
//     source: require("../assets/img/photo/IMG_3157.PNG"),
//     alt: "image6",
//     width: "auto",
//     height: "100%",
//   },
// ];

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
