import React, { useEffect, useRef } from 'react';
import { ChartContainer, Container } from './chart.stylesB';
import CustomerChartB from './customers-chart2';

const DonutChartB = ({ data }) => {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        CustomerChartB(ref.current, data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  
    return (
      <Container>
        <ChartContainer ref={ref} />
      </Container>
    );
  };
  
  export default DonutChartB;
  