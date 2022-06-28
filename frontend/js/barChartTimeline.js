import * as d3 from "d3";
import { callsToOrder, periods } from "../testData/testDataBarCahrt.js";
console.log(periods);
/* svg setup */
const margin = { top: 20, right: 10, bottom: 20, left: 10 };
const svgWidth = 800 - margin.left - margin.right;
const svgHeight = 100 - margin.top - margin.bottom;

let svg = d3
  .select("#d3-timeline-wrapper")
  .append("svg")
  .attr("width", svgWidth + margin.left + margin.right)
  .attr("height", svgHeight + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
 * Y Axis
 */
const yMax = 100; //TODO: yMax
const yAxis = d3.scaleLinear().domain([0, yMax]).range([svgHeight, 0]);

/*
 * X Axis
 */
const xDomain = [0, 12];
const xAxis = d3.scaleLinear().domain(xDomain).rangeRound([0, svgWidth]);

svg
  .append("g")
  .attr("transform", `translate(0, ${svgHeight})`)
  .call(d3.axisBottom(xAxis).tickSizeOuter(0));
