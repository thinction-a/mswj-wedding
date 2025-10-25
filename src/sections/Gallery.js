import React from "react";
import styled from "styled-components";
import { HeadingComponent } from "../GlobalStyle";
import { Gallery as GalleryPhotoSwipe, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

const Gallery = () => {
  return (
    <Container>
      <HeadingComponent subTitle={"GALLERY"} mainTitle={"갤러리"} />
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
    width: "100px",
    height: "150px",
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
          gridTemplateColumns: "repeat(3, 0fr)",
          gridGap: 4,
        }}
      >
        {images.map((img, index) => {
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
  {
    source: require("../assets/img/photo/IMG_3053.JPG"),
    alt: "image1",
    width: 640,
    height: 960,
  },
  {
    source: require("../assets/img/photo/IMG_3054.JPG"),
    alt: "image2",
    width: 640,
    height: 960,
  },
  {
    source: require("../assets/img/photo/IMG_3055.JPG"),
    alt: "image3",
    width: 640,
    height: 960,
  },
  {
    source: require("../assets/img/photo/IMG_3056.JPG"),
    alt: "image4",
    width: 640,
    height: 960,
  },
  {
    source: require("../assets/img/photo/IMG_3057.JPG"),
    alt: "image5",
    width: 640,
    height: 960,
  },
  {
    source: require("../assets/img/photo/IMG_3157.PNG"),
    alt: "image6",
    width: "auto",
    height: "100%",
  },
];
