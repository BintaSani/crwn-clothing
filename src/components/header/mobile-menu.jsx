import React from "react";
import { MobileMenu, MobileOptionLink } from "./header.styles";

const DropdownMenu = ({ signOutStart, currentUser }) => {
  return (
    <MobileMenu>
      <MobileOptionLink to="/shop">SHOP</MobileOptionLink>

      <MobileOptionLink to="/shop">CONTACT</MobileOptionLink>

      {currentUser ? (
        <MobileOptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </MobileOptionLink>
      ) : (
        <MobileOptionLink to="/signin">SIGN IN</MobileOptionLink>
      )}
    </MobileMenu>
  );
};

export default DropdownMenu;
