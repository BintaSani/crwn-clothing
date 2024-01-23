import React, {useRef} from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Edit } from '../../assets/edit-svgrepo-com.svg';
import { ReactComponent as EditDetails } from '../../assets/edit-2-svgrepo-com.svg';
import { ReactComponent as Wallet } from '../../assets/wallet-svgrepo-com.svg';

import { auth } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import 'firebase/storage';
import { HeaderImage, ProfileImage, DetailsContainer, ProfileContainer, WalletContainer,
     UserName, Sales, SalesText, EditProfile, EarningsContainer, Text, Icon, TotalSales,
    YourEarnings, Withdraw, PaymentMethod, EditHeader,HeaderInput, HeaderPicture, Image, } from "./user.styles";


    

const UserProfile = ({currentUser}) => {
    const user = auth.currentUser;
    const {displayName} = currentUser;

    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
            current.src = e.target.result;
        };
        reader.readAsDataURL(file);
        }
        firebase.storage().ref(user + '/profilePicture/' + file.name).put(file);
    };

    return(
    <ProfileContainer>
        <HeaderImage>
            <EditHeader>
                <Edit onClick={() => imageUploader.current.click()} />
            </EditHeader>
            <HeaderInput type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                display: "none"
                }}/>
            <HeaderPicture
            ref={uploadedImage}
                // style={{
                // width: "100%",
                // height: "100%",
                // position: "absolute"
                // }} 
                alt=""
        />
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