import * as d3 from "d3";
import { callsToOrder, periods } from "../testData/testDataBarCahrt.js";
import { getCallsForPartiesInDateRange } from "./functions.js";

const currentParties = [...new Set(periods[0].parties.map((el) => el.name))];
const currentSelection = getCallsForPartiesInDateRange(
  new Date("2022-01-01"),
  new Date("2022-12-31"),
  currentParties,
  callsToOrder
);
console.log(currentSelection);
/* svg setup */
const margin = { top: 20, right: 10, bottom: 40, left: 10 };
const svgWidth = 800 - margin.left - margin.right;
const svgHeight = 400 - margin.top - margin.bottom;

let svg = d3
  .select("#d3-bar-wrapper")
  .append("svg")
  .attr("width", svgWidth + margin.left + margin.right)
  .attr("height", svgHeight + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
 * Y Axis
 */
const lengths = Object.keys(currentSelection).map(
  (key) => currentSelection[key].length
);
const yMax = d3.max(lengths);
/* TODO: still needed? */
const yAxis = d3.scaleLinear().domain([0, yMax]).range([svgHeight, 0]);

/*
 * X Axis
 */
// const xDomain = [...new Set(periods[0].parties.map((el) => el.name))];
const xAxis = d3
  .scaleBand()
  .domain(currentParties)
  .rangeRound([0, svgWidth])
  .paddingOuter(0)
  .paddingInner([0.15]);
svg
  .append("g")
  .attr("transform", `translate(0, ${svgHeight})`)
  .call(d3.axisBottom(xAxis).tickSizeOuter(0))
  .call((g) => g.select(".domain").remove())
  .call((g) => g.selectAll("line").remove())
  .selectAll("text")
  .style("font-size", "20px");

const maxCount = d3.max(
  Object.values(currentSelection).map((el) => {
    return el.length;
  })
);

currentParties.forEach((party, i) => {
  const wrapper = svg.append("g");
  const cliPathId = `bar-clipPath-${i}`;
  /* clip path for rounding corners */
  wrapper
    .append("clipPath")
    .attr("id", cliPathId)
    .append("rect")
    .attr("x", (d) => {
      return xAxis(party);
    })
    .attr("y", 0)
    // .attr("rx", 5)
    // .attr("ry", 5)
    .attr("width", xAxis.bandwidth())
    .attr("height", svgHeight);

  /* one slice for each callOut */
  wrapper
    .selectAll("g")
    .data(currentSelection[party])
    .enter()
    .append("rect")
    .attr("x", (d) => {
      return xAxis(d.calledOut.party);
    })
    .attr("y", (d, i) => {
      // debugger;
      console.log(d);
      const sliceHeight = svgHeight / maxCount;
      return svgHeight - sliceHeight - sliceHeight * i;
    })
    // .attr("rx", (d, i) => {
    //   // console.log({ i });
    //   // console.log(currentSelection[party].length);
    //   // return i === currentSelection[party].length - 1 ? 5 : 0;
    //   return 0;
    // })
    // .attr("ry", (d, i) => {
    //   console.log({ i });
    //   console.log(i === 0);
    //   return i === 0 ? 5 : 0;
    // })
    .attr("width", xAxis.bandwidth())
    .attr("height", svgHeight / maxCount)
    .attr("class", "bar-slice")
    .attr("clip-path", `url(#${cliPathId})`)
    .on("mousemove", function (event, d) {
      //Get this bar's x/y values, then augment for the tooltip
      const xPosition =
        parseFloat(d3.select(this).attr("x")) + xAxis.bandwidth();
      const yPosition = parseFloat(d3.pointer(event, this)[1]);
      console.log(d3.pointer(event, this)[1]);
      //Update the tooltip position and value
      d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value")
        .text(d);
      //Show the tooltip
      d3.select("#tooltip").classed("hidden", false);
    })
    .on("mouseout", function () {
      //Hide the tooltip
      /* TODO: check if mouse is over tooltip - dont hide it */
      d3.select("#tooltip").classed("hidden", true);
    });

  /* divider line (pure for the style) */
  wrapper
    .selectAll("g")
    .data(currentSelection[party])
    .enter()
    .append("line")
    .attr("x1", (d) => {
      return xAxis(d.calledOut.party);
    })
    .attr("x2", (d) => {
      return xAxis.bandwidth() + xAxis(d.calledOut.party);
    })
    .attr("y1", (d, i) => {
      return (svgHeight / maxCount) * (i + 1);
    })
    .attr("y2", (d, i) => {
      return (svgHeight / maxCount) * (i + 1);
    })
    .attr("class", "bar-divider")
    .attr("clip-path", `url(#${cliPathId})`);
});
