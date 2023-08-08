import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Edit } from '../../assets/edit-svgrepo-com.svg';
import { ReactComponent as EditDetails } from '../../assets/edit-2-svgrepo-com.svg';
import { ReactComponent as Wallet } from '../../assets/wallet-svgrepo-com.svg';

import { auth } from "../../firebase/firebase.utils";
import { HeaderImage, ProfileImage, DetailsContainer, ProfileContainer, WalletContainer,
     UserName, Sales, SalesText, EditProfile, EarningsContainer, Text, Icon, TotalSales,
    YourEarnings, Withdraw, PaymentMethod, EditHeader, Image } from "./user.styles";


    

const UserProfile = ({currentUser}) => {
    const user = auth.currentUser;
    const {displayName} = currentUser;

    return(
    <ProfileContainer>
        <HeaderImage>
            <EditHeader>
                <Edit/>
            </EditHeader>
        </HeaderImage>
        <ProfileImage>
            <Image src={user ? user.photoURL : 'https://i.ibb.co/X7dj5NH/user.png'} alt=''/>
        </ProfileImage>
        <DetailsContainer>
            {user ? (<UserName>{displayName}</UserName>) : (<UserName>User Name</UserName>) }
            <Sales>55.2k</Sales>
            <SalesText>sales</SalesText>
            <EditProfile><EditDetails/><div>Edit Profile</div></EditProfile> 
        </DetailsContainer>
        <EarningsContainer>
            <Text>Earnings</Text>
            <WalletContainer>
                <Icon>
                    <Wallet/>   
                </Icon>
                <TotalSales>$10,000</TotalSales>
                <YourEarnings>Your earnings this month</YourEarnings>
            </WalletContainer>
            <PaymentMethod>Update your payment <br/> method in settings</PaymentMethod>
            <Withdraw>Withdraw Earnings</Withdraw>
        </EarningsContainer>
    </ProfileContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
export default connect(mapStateToProps)(UserProfile);