import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";
import { selectManagementHidden } from "../../redux/management/management.selector";
import { auth } from "../../firebase/firebase.utils";
import Drop from "../dp/dp.component";

const Header = ({ currentUser, hide, hidden, signOutStart }) => {
  const user = auth.currentUser;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/shop">CONTACT</OptionLink>

        {hide ? null : <OptionLink to="/admin">ADMIN</OptionLink>}

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {hide ? <Drop src={user ? user.photoURL : ""} alt="" /> : null}
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hide: selectManagementHidden,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
