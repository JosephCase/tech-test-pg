import styled from "styled-components";

import { PageSection } from "../element";

export const SearchDetailsSection = styled(PageSection)`
  min-height: 136px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: stretch;
  & > * {
    flex: 1 1 auto;
  }
`;

export const SearchDetailWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 6px 25px 6px 0;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  & + & {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 25px;
  }
`;

export const DetailLabel = styled.p`
  color: rgb(107 107 110);
  font-size: 14px;
  margin-bottom: 8px;
`;

export const DetailArrow = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookButton = styled.button`
  width: 230px;
  flex: 0 0 auto;
  background: #fdbc2b;
`;
