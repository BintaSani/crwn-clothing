import React from 'react';
import { DashboardContainer, DashboardItems, 
    RevenueContainer, CustomersContainer, 
    OrdersContainer,  
    BestProductContainer, BestSellerContainer,
    PieContainer, PieContainer2, PieContainer3,
    Heading, SubHeading, Detail, Donut, Daily,
    Weekly, DailyText, WeeklyText, TextContainer,
    TextContainer1 } from './dashboard.styles';
import DonutChart from '../../charts/chart.component';
import DonutChartA from '../../charts/chart.component1';
import DonutChartB from '../../charts/chart.component2';
import RevenueChart from '../../charts/revenue.component';
import BarChart from '../../charts/barchart.component';



const Dashboard = () => {
    const data = [
        { value: 35 },
        { value: 25 },
        { value: 18 },
        { value: 10 },
        { value: 7 }
      ];
    const data2 = [
        { value: 45 },
        { value: 95 },
        
      ];
    const data3 = [
        { value: 60 },
        { value: 25 },

      ];
      const data1 = [
        { x: 0, y: 40 },
        { x: 1, y: 35 },
        { x: 2, y: 30 },
        { x: 3, y: 60 },
        { x: 4, y: 65 },
        { x: 4, y: 55 },
        { x: 4, y: 70 },
        { x:'', y: 75 },
    ];
    //   const data0 = [
    //     { x: 0, y: 10 },
    //     { x: 2, y: 20 },
    //     { x: 4, y: 15 },
    //     { x: 6, y: 25 },
    //     { x: 8, y: 30 },
    //     { x: 4, y: 55 },
    //     { x: 4, y: 78 },
    //     { x:'', y: 80 },
    // ];
    //const dataObj = [{label: 'A', value: 10}, {label: 'B', value: 20}, {label: 'C', value: 30}, {label: 'D', value: 40}];

    const dataObj = [
        {
            name: "Sun",
            value: 50,
        },
        {
            name: "Mon",
            value: 20,
        },
        {
            name: "Teu",
            value: 40,
        },
        {
            name: "Wed",
            value: 70,
        },
        {
            name: "Thu",
            value: 60,
        },
        {
            name: "Fri",
            value: 80,
        },
        {
            name: "Sat",
            value: 10,
        },
        ];

    return(
        <DashboardContainer>            
            <Heading>Dashboard</Heading>
            <Detail>All details about selling products are here...</Detail>
        
            <DashboardItems>
                <RevenueContainer>
                    <SubHeading>Revenue</SubHeading>
                    <RevenueChart data={data1}  />
                </RevenueContainer>
                <CustomersContainer>
                    <SubHeading>Customers</SubHeading>
                    <PieContainer>
                        <PieContainer2>    
                            <DonutChart data={data}/>
                        </PieContainer2>
                        <PieContainer3>
                            <Donut><DonutChartA data={data2}/><TextContainer><Weekly>+14%</Weekly><WeeklyText>Weekly</WeeklyText></TextContainer></Donut>
                            <Donut><DonutChartB data={data3}/><TextContainer1><Daily>+18%</Daily><DailyText>Daily</DailyText></TextContainer1></Donut>
                        </PieContainer3>
                    </PieContainer>          
                </CustomersContainer>
                <OrdersContainer>
                   <SubHeading>Successful Checkouts</SubHeading>
                   {/* <CompleteCheckouts data={dataObj} width={300} height={150} />  */}
                   <BarChart data={dataObj}/>
                </OrdersContainer>
                
                <BestProductContainer>
                    <SubHeading>Returning Orders</SubHeading>
                    <RevenueChart data={data1}/>
                </BestProductContainer>
                <BestSellerContainer>
                    <SubHeading>Best Products</SubHeading>
                    {/* <BestProducts/> */}
                </BestSellerContainer>
            </DashboardItems>
        </DashboardContainer>
    )
}

export default Dashboard;