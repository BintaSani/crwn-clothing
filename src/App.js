import React from 'react';
import { useEffect } from 'react';
//import ReactGA from 'react-ga';
//import TagManager from 'react-gtm-module';
import { Routes , Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import ManagementAdmin from './pages/management/management.component';


const App = ({checkUserSession, currentUser}) => {
  //unsubscribeFromAuth = null
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);



  return (
    <div >
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/shop/*' Component={ShopPage} />
        <Route path='/checkout' Component={CheckoutPage} />
        <Route path='/admin' Component={ManagementAdmin}/>
        <Route exact path='/signin' 
        Component={() => 
          currentUser ? (
            <Navigate to='/' replace/>
          ) : (
            <SignInAndSignUpPage/>
          )
          }/>
        
      </Routes>
      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
});

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
