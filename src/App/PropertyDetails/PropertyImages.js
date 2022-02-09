import axios from "axios";
import { useState, useRef, useEffect } from "react";

import {
  ImageFrame,
  ImageSlider,
  LeftArrow,
  RightArrow,
  PropertyImage,
  ImageCounter,
} from "./elements";

// encapsulate the image fetching in a hook just for fun
const useImages = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d"
        );
        setImages(res?.data?.imageUrls.slice(0, 30) ?? []);
      } catch (error) {
        // 404 error already showing in console so not much benefit to console.error() a second error.
      }
    };
    fetchImages();
  }, []);
  return images;
};

const PropertyImages = () => {
  const images = useImages();

  const frameRef = useRef();

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [frameWidth, setFrameWidth] = useState();

  useEffect(() => {
    setFrameWidth(frameRef.current.clientWidth);
  }, []);

  const numberOfImages = images.length;

  const handleCarouselLeft = (e) => {
    e.stopPropagation();
    // update the state inside the function in case that clicking quickly can cause race issues
    setVisibleIndex((i) => (i > 0 ? i - 1 : i));
  };
  const handleCarouselRight = (e) => {
    e.stopPropagation();
    setVisibleIndex((i) => (i < numberOfImages - 1 ? i + 1 : i));
  };

  return (
    <ImageFrame ref={frameRef}>
      <ImageSlider numberOfImages={numberOfImages} visibleIndex={visibleIndex}>
        {images.map((img, i) => (
          <PropertyImage
            key={i}
            src={`${img}?w=${frameWidth}`}
            numberOfImages={numberOfImages}
          />
        ))}
      </ImageSlider>
      {visibleIndex > 0 && (
        <LeftArrow onClick={handleCarouselLeft}>LEFT</LeftArrow>
      )}
      {visibleIndex < numberOfImages - 1 && (
        <RightArrow onClick={handleCarouselRight}>RIGHT</RightArrow>
      )}
      <ImageCounter>
        {visibleIndex + 1}/{numberOfImages}
      </ImageCounter>
    </ImageFrame>
  );
};

export default PropertyImages;
