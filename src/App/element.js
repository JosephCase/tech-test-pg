import styled from "styled-components";

export const breakpoint = "768px";

export const faintBorder = "1px solid rgba(0,0,0,0.2)";

// can be used to create sections with consisent paddings
export const PageSection = styled.section`
  padding: 0 60px;
  @media (max-width: ${breakpoint}) {
    padding: 0 30px;
  }
`;
