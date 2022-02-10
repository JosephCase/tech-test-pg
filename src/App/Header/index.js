import React from "react";
import { FiSearch, FiMenu } from 'react-icons/fi';
import {
  StyledHeader,
  NavLink,
  MainNavLink,
  Menu,
  Search,
  Navigation,
  Logo,
  NavigationLeft,
  NavigationRight,
} from "./elements";

const Header = () => {
  return (
    <StyledHeader>
      <Menu><FiMenu /></Menu>
      <Navigation>
        {/* could split these into sub components, but as there is no business logic it's okay like this */}
        <NavigationLeft>
          <MainNavLink isActive>
            <a href="">HOMES</a>
          </MainNavLink>
          <MainNavLink>
            <a href="">HOSTS</a>
          </MainNavLink>
        </NavigationLeft>
        <Logo>PLUM GUIDE</Logo>
        <NavigationRight>
          <NavLink>
            <a href="">Need help?</a>
          </NavLink>
          <NavLink>
            <a href="">Login</a>
          </NavLink>
        </NavigationRight>
      </Navigation>
      <Search><FiSearch /></Search>
    </StyledHeader>
  );
};

export default Header;
