import styled, { css } from "styled-components";
import { UnordedList } from "../../App/components/elements";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 80px;
  align-items: stretch;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const HeaderBox = styled.button`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const NavLink = styled.ul`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  & + & {
    margin-left: 50px;
  }
  a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

// these have an active visulisation
export const MainNavLink = styled(NavLink)`
  ${({ isActive }) =>
    isActive
      ? css`
          border-bottom: 2px solid rgb(253 188 43);
          a {
            opacity: 1;
          }
        `
      : css`
          a {
            opacity: 0.5;
          }
        `};
`;

export const Menu = styled(HeaderBox)`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Search = styled(HeaderBox)`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
  display: flex;
  flex-grow: 1;
  padding: 0 30px 0 55px;
  justify-content: space-between;
`;

// make absolute to ensure central position
export const Logo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 26px;
`;

export const NavigationLeft = styled(UnordedList)`
  display: flex;
`;
export const NavigationRight = styled(UnordedList)`
  display: flex;
`;
