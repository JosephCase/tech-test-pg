import styled, { css } from "styled-components";
import { breakpoint, faintBorder } from "../element";

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
  border-right: ${faintBorder};
`;

export const Search = styled(HeaderBox)`
  border-left: ${faintBorder};
  @media (max-width: ${breakpoint}) {
    display: none;
  }
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

export const NavigationLeft = styled.ul`
  display: flex;
`;
export const NavigationRight = styled.ul`
  display: flex;
`;

//  outermost element
export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 80px;
  align-items: stretch;
  border-bottom: ${faintBorder};

  // in the end I decided to delegate the breakpoint logic to the parent element
  // this way all breakpoint related stylings can be seen in one place
  // and imagining a case where the smaller components were shared between other views in the app
  // the breakpoints is a layout consideration, not a consideration of an individual element

  @media (max-width: ${breakpoint}) {
    ${Navigation} {
      justify-content: flex-end;
    }
    // hide the navigation in the navbar,
    // in a full working example it would
    // be moved to the menu
    ${NavLink}, ${Search} {
      display: none;
    }
    ${Logo} {
      position: static;
      display: flex;
      align-items: center;
      transform: unset;
    }
  }
`;
