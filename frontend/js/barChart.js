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
  .selectAll("text")
  .style("font-size", "20px");

currentParties.forEach((party) => {
  svg
    .append("g")
    .selectAll("g")
    .data(currentSelection[party])
    .enter()
    .append("rect")
    .attr("x", (d) => {
      console.log(d);
      return xAxis(d.calledOut.party);
    })
    .attr("y", (d, i) => {
      console.log(i);
      return (svgHeight / 2) * i;
    })
    .attr("width", xAxis.bandwidth())
    .attr("height", svgHeight / 2);
});
