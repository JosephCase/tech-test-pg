import styled from "styled-components";
import { faintBorder } from "../elementConst";
import { PageSection } from "../element";

export const PropertyDetailsSection = styled(PageSection)`
  // avoid using 2-elements, to create 2 colour background,
  // they can be difficult cross-browser, especially when they are used as containers
  background: #f5ded2; // older browsers
  background-image: linear-gradient(#f5ded2 90%, #fff 90%);
  padding-bottom: 35px;
`;

export const PropertyHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PropertyName = styled.h3`
  font-size: 50px;
  margin-top: 80px;
`;

export const PropertyDetails = styled.ul`
  display: flex;
  margin-top: 40px;
`;

export const Detail = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

export const PropertyLogistics = styled.ul`
  display: flex;
  margin-top: 20px;
  padding: 10px 0;
  border-top: ${faintBorder};
  border-bottom: ${faintBorder};
  & > li {
    padding: 0 20px;
  }
`;

export const Logistic = styled.li`
  & + & {
    border-left: ${faintBorder};
  }
`;

export const ImageFrame = styled.div`
  margin-top: 60px;
  position: relative;
  overflow: hidden;
`;

// for performance I tried to use a pure CSS solution
// to avoid having track the re-size manually
export const ImageSlider = styled.div`
  display: flex;
  position: relative;
  transform: translateX(
    ${({ visibleIndex, numberOfImages }) =>
      -visibleIndex * (100 / numberOfImages)}%
  );
  width: ${({ numberOfImages }) => numberOfImages * 100}%;
  // I dunno if scrolling image carousels are still fashionable
  // but hey-ho ¯\_(ツ)_/¯
  transition: transform 500ms;
`;

export const PropertyImage = styled.img`
  width: ${({ numberOfImages }) => 100 / numberOfImages}%;
`;

const Arrow = styled.button`
  position: absolute;
  background: white;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 6px;
`;

export const LeftArrow = styled(Arrow)`
  left: 0;
`;

export const RightArrow = styled(Arrow)`
  right: 0;
`;

export const ImageCounter = styled.p`
  box-sizing: content-box;
  position: absolute;
  border-radius: 50%;
  padding: 4px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  text-align: center;
  font-size: 14px;
`;
