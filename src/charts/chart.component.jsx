import React, { useEffect, useRef } from 'react';
import { ChartContainer, Container } from './chart.styles';
import CustomerChart from './customers-chart';

const DonutChart = ({ data }) => {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        CustomerChart(ref.current, data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  
    return (
      <Container>
        <ChartContainer ref={ref} />
      </Container>
    );
  };
  
  export default DonutChart;
  