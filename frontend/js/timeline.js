import * as d3 from 'd3';

export class CTOERangeSlider {
  constructor(width, height, margin, data, months) {

    this.data = this.prepareDataInMonthBatches(data, months);
    this.height = height + margin.top + margin.bottom;
    this.width = width + margin.left + margin.right;
    this.months = months;
    this.margin = margin;
    this.tickSize = parseInt(width/months.length);
    this.yMax = 100;
    this.yAxis = d3.scaleLinear().domain([0, this.yMax]).range([height, 0]);
    this.xDomain = [0, months.length];
    this.xAxis = d3.scaleOrdinal().domain(months.map((month) => month.label));
    this.xInverseDomain = [0, width];
    this.xInverseAxis = d3.scaleLinear().domain(this.xInverseDomain).rangeRound([0, months.length]);

    this.svg = this.createSVG();
    this.addBars();
    this.addAxis();
    this.addHandles();
    this.addRangeMarker();
  }

  prepareDataInMonthBatches(data, months) {
    const res = {};
    months.forEach((month) => res[month.label] = 0);
    data.forEach((call) => {
      if(months.map((month) => month.label).indexOf(call.date.slice(0, 7)) > -1) {
        res[call.date.slice(0, 7)] += 1;
      }
    });
    return Object.values(res);
  }

  addBars() {
    const width = parseInt(this.width/(this.data.length*2));
    this.svg.selectAll('rect')
    .data(this.data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * width * 2)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', (d, i) => d * 10)
    .attr('fill', '#555555');
  }

  onValueChange(callback) {
    this.valueChangeCallback = callback;
  }

  valuesChanged() {
    const months = [];
    this.valueChangeCallback(months);
  }

  addAxis() {
    const context = this;
    this.svg
      .append('g')
      .call(d3.axisBottom(this.xAxis)
        .tickValues(Object.keys(this.months))
        .tickFormat((d, i) => context.months[d].label)
      )
      .selectAll('text')  
      .style('text-anchor', 'end')
      .attr('dx', '-.1em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-65)');  
  }
  
  addHandles() {
    this.addLeftHandle();
    this.addRightHandle();
    this.addHandleFunctions();
  }
  
  addLeftHandle() {
    this.leftHandle = this.svg
      .append('circle')
      .attr('cx', this.width / 3)
      .attr('cy', this.height / 2)
      .attr('r', 15)
      .attr('fill', '#ff7100')
      .attr('class', 'handle');
  }
  
  addRightHandle() {
    this.rightHandle = this.svg
      .append('circle')
      .attr('cx', this.width / 3 * 2)
      .attr('cy', this.height / 2)
      .attr('r', 15)
      .attr('fill', '#ff7100')
      .attr('class', 'handle');
  }
  
  addRangeMarker() {
    const context = this;
    this.range = this.svg
      .append('rect')
      .attr('x', this.leftHandle.attr('cx'))
      .attr('y', 0)
      .attr('width', parseInt(this.rightHandle.attr('cx'), 10) - parseInt(this.leftHandle.attr('cx'), 10))
      .attr('height', this.height)
      .attr('fill', '#ff710011')
      .attr('class', 'range');
    
    this.svg.selectAll('.range')
    .call(
      d3.drag().on('drag', function (e) {
        const halfRangeWidth = parseInt(context.range.attr('width')) / 2;
        context.range.attr('x', (context.xInverseAxis(e.x - halfRangeWidth)) * context.tickSize);
        context.leftHandle.attr('cx', context.range.attr('x'));
        context.rightHandle.attr('cx', parseInt(context.range.attr('x')) + parseInt(context.range.attr('width')));
      })
    );
  }
  
  addHandleFunctions() {
    const context = this;
    this.svg.selectAll('.handle')
    .call(
      d3.drag()
      .on('start', () => false)
      .on('drag', function (e) {
        if(e.x < 1 || e.x > context.width) return;
        // TODO: Fix the getting stuck bug after handles are too close together
        if(parseInt(context.leftHandle.attr('cx')) + 1 > context.rightHandle.attr('cx') - context.tickSize) return;
        d3.select(this).attr('cx', context.xInverseAxis(e.x) * context.tickSize);
        context.range.attr('x', context.leftHandle.attr('cx'));
        context.range.attr('width', context.rightHandle.attr('cx') - context.leftHandle.attr('cx'));
      })
    );
  }
  
  createSVG() {
    return d3
      .select('#d3-timeline-wrapper')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g');
      //.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }
}

