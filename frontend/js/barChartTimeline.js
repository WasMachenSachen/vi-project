import * as d3 from 'd3';
import { callsToOrder, periods } from '../testData/testDataBarCahrt.js';

function addLeadingZeros(input, amount) {
  return (input + Math.pow(10, amount)).toString().substring(1, amount + 1);
}

function getMonthsBetweenTwoDates(from, to) {
  const fromData = {
    year: from.getFullYear(),
    month: from.getMonth(),
  };

  const toData = {
    year: to.getFullYear(),
    month: to.getMonth(),
  };

  const months = [];

  for(let year = fromData.year; year <= toData.year; year++) {
    for(let month = fromData.month; month < 12; month++) {
      months.push({
        year: year,
        month: month,
        label: `${year}-${addLeadingZeros(month + 1, 2)}`
      });
    }
  }

  return months;
}

const months = getMonthsBetweenTwoDates(new Date('2020-01-01'), new Date('2022-12-01'));
console.log(months);

/* svg setup */
const margin = { top: 25, right: 20, bottom: 25, left: 20 };
const svgWidth = 800 - margin.left - margin.right;
const svgHeight = 100 - margin.top - margin.bottom;

let svg = d3
  .select('#d3-timeline-wrapper')
  .append('svg')
  .attr('width', svgWidth + margin.left + margin.right)
  .attr('height', svgHeight + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  
const leftHandle = svg
  .append('circle')
  .attr('cx', 0)
  .attr('cy', svgHeight)
  .attr('r', 10)
  .attr('stroke', 'black')
  .attr('fill', '#333333')
  .attr('class', 'handle');

const rightHandle = svg
  .append('circle')
  .attr('cx', svgWidth)
  .attr('cy', svgHeight)
  .attr('r', 10)
  .attr('stroke', 'black')
  .attr('fill', '#333333')
  .attr('class', 'handle');

const range = svg
  .append('rect')
  .attr('x', leftHandle.attr('cx'))
  .attr('y', svgHeight/2)
  .attr('width', parseInt(rightHandle.attr('cx'), 10) - parseInt(leftHandle.attr('cx'), 10))
  .attr('height', svgHeight)
  .attr('fill', '#333333')
  .attr('class', 'range');

let mouseover_node = null;

/*
 * Y Axis
 */
const yMax = 100;
const yAxis = d3.scaleLinear().domain([0, yMax]).range([svgHeight, 0]);

/*
 * X Axis
 */
const xDomain = [0, months.length];
const xAxis = d3.scaleLinear().domain(xDomain).rangeRound([0, svgWidth]);

const xInverseDomain = [0, svgWidth];
const xInverseAxis = d3.scaleLinear().domain(xInverseDomain).rangeRound([0, months.length]);


svg.selectAll('.range')
.call(
  d3.drag().on('drag', function (e) {

  })
);

const tickSize = parseInt(svgWidth/months.length);
console.log(tickSize)
svg.selectAll('.handle')
.call(
  d3.drag()
  .on('start', () => false)
  .on('drag', function (e) {

    if(e.x < 1 || e.x > svgWidth) return;

    // TODO: Fix the getting stuck bug after handles are too close together
    if(parseInt(leftHandle.attr('cx')) + 1 > rightHandle.attr('cx') - tickSize) return;
    d3.select(this).attr('cx', xInverseAxis(e.x) * tickSize);
    range.attr('x', leftHandle.attr('cx'));
    range.attr('width', rightHandle.attr('cx') - leftHandle.attr('cx'));

  })
  .on('end',  (_sourceElement, _index, _svgItems) => {})
);


svg
  .append('g')
  .attr('transform', `translate(0, ${svgHeight})`)
  .call(d3.axisBottom(xAxis)
    .tickValues(Object.keys(months))
    .tickFormat(months[0].label)
  )
  .selectAll('text')  
  .style('text-anchor', 'end')
  .attr('dx', '-.1em')
  .attr('dy', '.15em')
  .attr('transform', 'rotate(-65)');
