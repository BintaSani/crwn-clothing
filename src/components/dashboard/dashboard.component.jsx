import React from 'react';
import { DashboardContainer, DashboardItems, 
    RevenueContainer, CustomersContainer, 
    OrdersContainer,  LastOrdersContainer, 
    BestProductContainer, BestSellerContainer,
    Heading, Detail    } from './dashboard.styles';

const Dashboard = () => {
    return(
        <DashboardContainer>            
            <Heading>Dashboard</Heading>
            <Detail>All details about selling products are here...</Detail>
        
            <DashboardItems>
                <RevenueContainer>REVENUE</RevenueContainer>
                <CustomersContainer>CUSTOMERS</CustomersContainer>
                <OrdersContainer>ORDERS</OrdersContainer>
                <LastOrdersContainer>LAST ORDERS</LastOrdersContainer>
                <BestProductContainer>BEST PRODUCTS</BestProductContainer>
                <BestSellerContainer>BEST SELLERS</BestSellerContainer>
            </DashboardItems>
        </DashboardContainer>
    )
}

export default Dashboard;