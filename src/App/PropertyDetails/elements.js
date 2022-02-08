import styled from "styled-components";
import { faintBorder } from "../elementConst";

export const PropertyDetailsWrapper = styled.section`
  // avoid using 2-elements, to create 2 colour background,
  // they can be difficult cross-browser, especially when they are used as containers
  background: #f5ded2; // older browsers
  background-image: linear-gradient(#f5ded2 90%, #fff 90%);
  height: 100vh;
`;

export const PropertyHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PropertyName = styled.h3`
  font-size: 50px;
  margin-top: 50px;
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
