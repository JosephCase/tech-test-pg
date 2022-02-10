import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { breakpoint, faintBorder, PageSection } from "../element";

export const PropertyHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PropertyName = styled.h3`
  text-align: center;
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
  display: flex;
  align-items: center;
  & + & {
    border-left: ${faintBorder};
  }
  svg {
    margin-right: 6px;
  }
`;

// Could potentially split into two element files
//  - PropertyDetails
//    \_index.js
//    \_element.js
//  - PropertyImages
//    \_index.js
//    \_element.js
// kind of on the limit, but given the project size
// I feel its better to do like this to keep consistent with the other sections

export const ImageWrapper = styled.div`
  margin-top: 60px;
  position: relative;
`;

export const ImageFrame = styled.div`
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

const ArrowStyling = `
  position: absolute;
  top: 50%;
  cursor: pointer;
  width: 50px;
  height: auto;
  height: auto;
  `;

export const LeftArrow = styled(BsArrowLeft)`
  ${ArrowStyling}
  left: 0;
  transform: translateY(-50%) translateX(-50%);
`;

export const RightArrow = styled(BsArrowRight)`
  ${ArrowStyling}
  right: 0;
  transform: translateY(-50%) translateX(50%);
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

// outer element
export const PropertyDetailsSection = styled(PageSection)`
  // avoid using 2-elements divs to create 2 colour background,
  background: #f5ded2; // older browsers
  background-image: linear-gradient(#f5ded2 90%, #fff 90%);
  padding-bottom: 35px;

  @media (max-width: ${breakpoint}) {
    ${PropertyHeadingWrapper} {
      align-items: stretch;
    }
    ${PropertyDetails} {
      flex-direction: column;
      align-items: flex-start;
      ${Detail} {
        margin: 0 6px 12px;
      }
    }
    ${PropertyLogistics} {
      margin-top: 0;
      flex-direction: column;
      ${Logistic} {
        border: none;
        padding: 0;
        margin: 6px 0;
      }
    }
    ${LeftArrow}, ${RightArrow} {
      width: 30px;
    }
    ${ImageCounter} {
      right: 0;
      bottom: 0;
      top: unset;
      transform: translateX(50%) translateY(50%);
    }
  }
`;
