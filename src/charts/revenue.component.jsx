import React, { useRef, useEffect } from "react";
import {
  select,
  line,
  curveCardinal,
  scaleLinear,
  axisBottom,
  axisLeft,
  
} from "d3";
import { Chart } from "./revenue.styles";


//chart component
const RevenueChart = ({data}) => {
  //refs
  const svgRef = useRef();

  //draws chart
  useEffect(() => {
    const svg = select(svgRef.current);

    //scales
    const yScale = scaleLinear().domain([0, 110]).range([120, 0]);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([25, 300]);

    

    //axes
    
    const yAxis = axisLeft(yScale).ticks(5);
    svg.select(".y-axis").style("transform", "translateX(25px)").call(yAxis);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(120px)").call(xAxis);


    //line generator
    const myLine = line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(curveCardinal);
    

    //drawing the line
    svg
      .append('g')
      .attr('class','x-axis')
      
         
    svg
      .append("g")
      .attr('class','y-axis')
      

    
      
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "#ffe8e5")
      .attr("stroke", "#f96e5b");


  }, [data]);

    
  return (
    <Chart>
      <svg ref={svgRef} />
    </Chart>   
    
  );
};

export default RevenueChart;