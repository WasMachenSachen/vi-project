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
  const cliPathId = "bar-clipPath-" + i;
  wrapper
    .append("clipPath")
    .attr("id", cliPathId)
    .append("rect")
    .attr("x", (d) => {
      return xAxis(party);
    })
    .attr("y", 0)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("width", xAxis.bandwidth())
    .attr("height", svgHeight);

  wrapper
    .selectAll("g")
    .data(currentSelection[party])
    .enter()
    .append("rect")
    .attr("x", (d) => {
      return xAxis(d.calledOut.party);
    })
    .attr("y", (d, i) => {
      return (svgHeight / maxCount) * i;
    })
    .attr("width", xAxis.bandwidth())
    .attr("height", svgHeight / maxCount)
    .attr("class", "bar-slice")
    .attr("clip-path", `url(#${cliPathId})`);

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
