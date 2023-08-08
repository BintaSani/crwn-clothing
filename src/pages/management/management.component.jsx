import React from 'react';
import {ReactComponent as Dash} from '../../assets/dashboard-svgrepo-com.svg';
import {ReactComponent as Analytics} from '../../assets/analytics-sharp-svgrepo-com.svg';
import {ReactComponent as Reports} from '../../assets/paper-clip-svgrepo-com.svg';
import {ReactComponent as Shop} from '../../assets/shopping-cart-01-svgrepo-com.svg';
import {ReactComponent as Location} from '../../assets/location-pin-svgrepo-com.svg';
import {ReactComponent as Products} from '../../assets/gift-svgrepo-com.svg';
import {ReactComponent as Chat} from '../../assets/chat-dot-round-svgrepo-com.svg';
import {ReactComponent as Notification} from '../../assets/notification-svgrepo-com.svg';
import {ReactComponent as Settings} from '../../assets/settings-svgrepo-com.svg';


import { ManagementContainer, NavigationContainer, 
   FocusContainer, ProfileContainer, 
   DashContainer, HeadingP, NotificationContainer,
   BusinessContainer, ChatContainer,
   Heading, NavLink, ProfileHead } from './management.styles';
import Dashboard from '../../components/dashboard/dashboard.component';
import UserProfile from '../../components/user/user.component';


const ManagementAdmin = () => {

   return(
   <ManagementContainer>
    <NavigationContainer>

         <Heading>Overview</Heading>
         <DashContainer>  
            <NavLink ><Dash/>   Dashboard</NavLink>
            <NavLink><Analytics/>   Analytics</NavLink>
            <NavLink><Reports/>   Reports</NavLink>
         </DashContainer>

         <Heading>Business</Heading>
         <BusinessContainer>  
            <NavLink><Shop/>   Shop</NavLink>
            <NavLink><Location/>   Outlet</NavLink>
            <NavLink><Products/>   Products</NavLink>
         </BusinessContainer>

         <ChatContainer>  
            <NavLink><Chat/>   Chat</NavLink>
         </ChatContainer>
      
    </NavigationContainer>
    <FocusContainer>
      <Dashboard />
    </FocusContainer>
    <ProfileContainer>
      <ProfileHead>
         <HeadingP>
            Profile 
         </HeadingP>
         <NotificationContainer>
         <Notification/>  
         <Settings/>
         </NotificationContainer>
      </ProfileHead>
      <UserProfile  />
    </ProfileContainer>
   </ManagementContainer>
   )
}


 


export default ManagementAdmin;