import * as d3 from 'd3';

export class CTOERangeSlider {
  constructor(width, height, margin, data, months) {
    const {filteredData, filteredMonths} = this.prepareDataInMonthBatches(data, months);
    this.data = filteredData;
    this.months = filteredMonths;
    this.gap = 0;
    this.height = height;
    this.heightWithMargins = this.height - (margin.top + margin.bottom);
    this.width = width;
    this.widthWithMargins = this.width - (margin.left + margin.right);
    this.margin = margin;
    this.tickSize = parseInt(this.widthWithMargins/this.months.length);
    this.yMax = this.data.reduce((prev, current) => current > prev ? current : prev, 0);
    this.yScale = d3.scaleLinear().domain([0, this.yMax]).range([0, this.heightWithMargins]);
    this.xScale = d3.scaleOrdinal().domain([0, months.length]).range(0, this.width);
    this.xInverseAxis = d3.scaleLinear().domain([0, this.widthWithMargins]).rangeRound([0, this.months.length]);

    this.svg = this.createSVG();
    this.addBars();
    this.addAxis();
    this.addHandles();
    this.addRangeMarker();
  }

  prepareDataInMonthBatches(data, months) {
    console.log(data, months);
    const res = {};
    months.forEach((month) => res[month.label] = 0);
    console.log(res);
    data.forEach((call) => {
      if(months.map((month) => month.label).indexOf(call.date.slice(0, 7)) > -1) {
        res[call.date.slice(0, 7)] += 1;
      }
    });
    const filteredData = Object.values(res).filter((val) => val > 0);
    const filteredKeys = Object.keys(res).filter((val, index) => res[val] > 0)
    console.log(filteredKeys);
    return {
      filteredData: filteredData,
      filteredMonths: filteredKeys
    };
  }

  getSelectedMonths() {
    const fromIndex = this.xInverseAxis(parseInt(this.leftHandle.attr('cx')));
    const toIndex = this.xInverseAxis(parseInt(this.rightHandle.attr('cx')));
    return { from: this.months[fromIndex], to:this.months[toIndex] };
  }

  addBars() {
    const width = parseInt(this.widthWithMargins/(this.months.length));
    const context = this;
    this.svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (width + this.gap))
      .attr('y', (d, i) => this.heightWithMargins - this.yScale(d))
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('width', width)
      .attr('height', (d, i) => this.yScale(d))
      .attr('fill', '#E0E0E0')
      .append('title')
      .text((d, i) => `${context.months[i]}: ${d}`);

    this.svg.selectAll('rect-highlighted')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('clip-path', 'url(#clip-selected)')
      .attr('x', (d, i) => i * (width + this.gap))
      .attr('y', (d, i) => this.heightWithMargins - this.yScale(d))
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('width', width)
      .attr('height', (d, i) => this.yScale(d))
      .attr('fill', '#FE71016E')
      .append('title')
      .text((d, i) => `${context.months[i]}: ${d}`);
  }

  onValueChange(callback) {
    this.valueChangeCallback = callback;
  }

  valuesChanged() {
    const months = this.getSelectedMonths();
    this.valueChangeCallback(months);
  }

  addAxis() {
    const context = this;
    this.svg
      .append('rect')
      .attr('x', 0)
      .attr('y', this.heightWithMargins - this.tickSize / 2)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('width', this.widthWithMargins)
      .attr('height', this.tickSize)
      .attr('fill', '#E0E0E0');

    this.svg
      .append('rect')
      .attr('class', 'range')
      .attr('clip-path', 'url(#clip-selected)')
      .attr('x', 0)
      .attr('y', this.heightWithMargins - this.tickSize / 2)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('width', this.widthWithMargins)
      .attr('height', this.tickSize)
      .attr('fill', '#ff7100');

    this.svg.selectAll('.range')
    .call(
      d3.drag().on('drag', function (e) {
        const halfRangeWidth = parseInt(context.range.attr('width')) / 2;
        context.range.attr('x', (context.xInverseAxis(e.x - halfRangeWidth)) * context.tickSize);
        context.leftHandle.attr('cx', context.range.attr('x'));
        context.rightHandle.attr('cx', parseInt(context.range.attr('x')) + parseInt(context.range.attr('width')));
        context.valuesChanged();
      })
    );
  }
  
  addHandles() {
    this.addLeftHandle();
    this.addRightHandle();
    this.addHandleFunctions();
  }
  
  addLeftHandle() {
    this.leftHandle = this.svg
      .append('circle')
      .attr('cx', this.widthWithMargins / 3)
      .attr('cy', this.heightWithMargins)
      .attr('r', 15)
      .attr('fill', '#ff7100')
      .attr('class', 'handle');
  }
  
  addRightHandle() {
    this.rightHandle = this.svg
      .append('circle')
      .attr('cx', this.widthWithMargins / 3 * 2)
      .attr('cy', this.heightWithMargins)
      .attr('r', 15)
      .attr('fill', '#ff7100')
      .attr('class', 'handle');
  }
  
  addRangeMarker() {
    const context = this;
    this.range = this.svg
      .append('clipPath')
      .attr('id', 'clip-selected')
      .append('rect')
      .attr('x', this.leftHandle.attr('cx'))
      .attr('y', 0)
      .attr('width', parseInt(this.rightHandle.attr('cx'), 10) - parseInt(this.leftHandle.attr('cx'), 10))
      .attr('height', this.height)
      .attr('fill', '#ff710011')
      .attr('class', 'range');
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
        context.valuesChanged();
      })
    );
  }
  
  createSVG() {
    return d3
      .select('#d3-timeline-wrapper')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      // .attr('transform', `translate(${this.margin.left + this.margin.right}, ${this.margin.top + this.margin.bottom})`)
    }
}

