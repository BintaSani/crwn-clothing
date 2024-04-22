import React, { useEffect, useRef } from 'react';
import { ChartContainer, Container } from './chart.stylesA';
import CustomerChartA from './customers-chart1';

const DonutChartA = ({ data }) => {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        CustomerChartA(ref.current, data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  
    return (
      <Container>
        <ChartContainer ref={ref} />
      </Container>
    );
  };
  
  export default DonutChartA;
  