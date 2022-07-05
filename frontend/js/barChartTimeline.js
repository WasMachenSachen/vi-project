import * as d3 from "d3";
import { callsToOrder, periods } from "../testData/testDataBarCahrt.js";
console.log(periods);
/* svg setup */
const margin = { top: 25, right: 20, bottom: 25, left: 20 };
const svgWidth = 800 - margin.left - margin.right;
const svgHeight = 100 - margin.top - margin.bottom;

let svg = d3
  .select("#d3-timeline-wrapper")
  .append("svg")
  .attr("width", svgWidth + margin.left + margin.right)
  .attr("height", svgHeight + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const leftHandle = svg
.append('circle')
.attr('cx', 0)
.attr('cy', svgHeight)
.attr('r', 10)
.attr('stroke', 'black')
.attr('fill', 'red')
.attr('class', 'handle');

const rightHandle = svg
.append('circle')
.attr('cx', svgWidth)
.attr('cy', svgHeight)
.attr('r', 10)
.attr('stroke', 'black')
.attr('fill', 'blue')
.attr('class', 'handle');

let mouseover_node = null;

svg.select('.handle')
.on("mouseover", (d) => {mouseover_node = d})
.on("mouseout", (d) => {mouseover_node = null})
.call(
  d3.drag()
  .on("start", function () {
    console.log('start');
    return false;
  })
  .on("drag", function (e) {
    console.log(e);
    e.target.attr('cx', e.x);
  })
  .on("end",  (sourceElement,index,svgItems) => {
    console.log('end drag with mouseover: ' + mouseover_node);
  })
);

/*
 * Y Axis
 */
const yMax = 100; //TODO: yMax
const yAxis = d3.scaleLinear().domain([0, yMax]).range([svgHeight, 0]);

/*
 * X Axis
 */
const xDomain = [0, 12*4];
const xAxis = d3.scaleLinear().domain(xDomain).rangeRound([0, svgWidth]);

svg
  .append("g")
  .attr("transform", `translate(0, ${svgHeight})`)
  .call(d3.axisBottom(xAxis).tickSizeOuter(0));
