import * as d3 from 'd3';


const CustomerChart = (element, data) => {
  const colors = ["#f96e5b", "#1b7a5b", "#d7f5e6", "#1b7a5b", "#d7f5e6"];
  const boxSize = 1000; // graph boxsize, in pixels
  const innerRadius = 300; // inner radius of pie, in pixels (non-zero for donut)
  const outerRadius = 400; // outer radius of pie, in pixels
  
  d3.select(element).select("svg").remove(); // Remove the old svg

  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width",  "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

    
    var defs = svg.append('defs');

    var filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '130%');

    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 5)
      .attr('result', 'blur');

    filter.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', 5)
      .attr('dy', 5)
      .attr('result', 'offsetBlur');

    var feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
      .attr('in', 'offsetBlur')
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');



    svg.append("svg:circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 200)
    .attr('filter', 'url(#drop-shadow)')
    .attr("class", "white-circle")
    .style("fill", "#fff")
    .append("g");


//add first line of text in middle  of doughnut
  svg.append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("style","font-family")
    .attr("font-size","100")
    .attr("fill","#000000")
    .attr("dy", "0em")
    .text("60%");

//add second line of text in middle of doughnut
  svg.append("text")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .attr("style","font-family")
  .attr("font-size","70")
  .attr("fill","#000000")
  .attr("dy", "1em") // how far apart it shows up
  .text("Total")   



  const arcGenerator = d3.arc().cornerRadius(30).padAngle(0.06).innerRadius(innerRadius).outerRadius(outerRadius);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);


 
};  


  
  export default CustomerChart;
  