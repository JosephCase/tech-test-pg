import React from "react";
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
      <Menu>MENU</Menu>
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
      <Search>Search</Search>
    </StyledHeader>
  );
};

export default Header;
