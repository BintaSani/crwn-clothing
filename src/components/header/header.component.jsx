import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import DropdownMenu from "./mobile-menu";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { managementHidden } from "../../redux/management/management.actions";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  MenuButton,
  StyledMenuIcon,
  StyledCloseIcon,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";
import { selectManagementHidden } from "../../redux/management/management.selector";
import { auth } from "../../firebase/firebase.utils";
import Drop from "../dp/dp.component";

const Header = ({
  currentUser,
  hide,
  hidden,
  signOutStart,
  managementHidden,
}) => {
  const user = auth.currentUser;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/shop">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {hide ? <Drop src={user ? user.photoURL : ""} alt="" /> : null}
        <MenuButton onClick={managementHidden}>
          {hide ? <StyledMenuIcon /> : <StyledCloseIcon />}
        </MenuButton>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
      {hide ? null : (
        <DropdownMenu signOutStart={signOutStart} currentUser={currentUser} />
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hide: selectManagementHidden,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  managementHidden: () => dispatch(managementHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
