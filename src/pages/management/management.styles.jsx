import { Link } from "react-router-dom";
import styled from "styled-components";

export const ManagementContainer = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-y: none;

`;

export const NavigationContainer = styled.div`
    width: 15%;
    height: 80vh;
    background-color: #ffffff;
    
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: none;
    padding-left: 1vh;
    box-shadow: 0 4px 8px 0 rgba(27, 122, 91, 0.2), 0 6px 20px 0 rgba(27, 122, 91, 0.19);
`;
export const NavLink = styled(Link)`
    padding: 3px 0 3px 35px;
    color: grey;
    font-size: 0.7rem;
    margin-bottom: 10px;

    &:focus{
        border-left: solid 4px black;
        color: black;
        font-weight: bold;
    }
`;

export const Heading = styled.h1`
    padding-top: 30px;
    font-size: 0.8rem;
    margin-left: 4px;
`;
export const HeadingP = styled.h1`
    padding-top: 10px;
    font-size: 0.8rem;
    margin-left: 4px;
    justify-content: space-between;
`;
export const ProfileHead = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const NotificationContainer= styled.div`
    width: 30%;
    justify-content: space-between;
    padding-top: 17px;
`;
export const DashContainer = styled.div`
    margin-left: -7px;
    color: grey;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const BusinessContainer = styled.div`
    margin-left: -7px;
    color: grey;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
`;
export const ChatContainer = styled.div`
    margin-left: -7px;
    color: grey;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
`;
export const FocusContainer = styled.div`
    width: 70%;
    height: 100vh;

`;
export const ProfileContainer = styled.div`
    width: 15%;
    height: 80vh;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: none;
    padding-left: 1vh;
    box-shadow: 0 4px 8px 0 rgba(27, 122, 91, 0.2), 0 6px 20px 0 rgba(27, 122, 91, 0.19);
`;