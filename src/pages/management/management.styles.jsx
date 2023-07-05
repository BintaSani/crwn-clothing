import { Link } from "react-router-dom";
import styled from "styled-components";

export const ManagementContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const NavigationContainer = styled.div`
    width: 15%;
    height: 80vh;

    
    border-radius: 3px;
    backdrop-filter: blur(2px);
    border: none;
    padding-left: 1vh;
    box-shadow: 0 4px 8px 0 rgba(27, 122, 91, 0.2), 0 6px 20px 0 rgba(27, 122, 91, 0.19);
`;
export const NavLink = styled(Link)`
    padding: 3px 0 3px 35px;
    color: grey;
    font-size: 1rem;
    margin-bottom: 15px;

    &:focus{
        border-left: solid 4px black;
        color: black;
    }
`;

export const Heading = styled.h1`
    padding-top: 40px;
    font-size: 1.2rem;
    margin-left: 4px;
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

    border-radius: 3px;
    backdrop-filter: blur(2px);
    border: none;
    padding-left: 1vh;
    box-shadow: 0 4px 8px 0 rgba(27, 122, 91, 0.2), 0 6px 20px 0 rgba(27, 122, 91, 0.19);
`;